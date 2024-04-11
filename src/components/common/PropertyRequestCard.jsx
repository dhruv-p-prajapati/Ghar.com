import React, { useEffect, useState } from "react";
import {
  getBuilderById,
  getPropertyById,
  getUserById,
  updateBuilder,
  updateProperty,
  updatePropertyRequest,
  updateUser
} from "../../utils/axiosGloableInstance";
import Button from "./Button";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setLoader } from "../../redux/actions/appAction";
import { setRole } from "../../redux/actions/roleAction";
import { MdCurrencyRupee } from "react-icons/md";

const PropertyRequestCard = ({ request, showBuilderDetails = false, showButtons = true }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({});
  const [builder, setBuilder] = useState({});
  const [property, setProperty] = useState({});

  const handleAccept = async () => {
    dispatch(setLoader(true));
    try {
      const requestObj = {
        ...request,
        requestStatus: "accepted"
      };

      const { success, error } = await updatePropertyRequest(request.id, requestObj);
      if (success) {
        toast.success("Property request accepted");
      } else {
        console.log("Failed to accept property request", error);
        toast.error("Problem for accepting request, Please try after some time!");
      }
    } catch (error) {
      console.log("Failed to accept property request", error);
    } finally {
      dispatch(setLoader(false));
    }
  };

  const handleReject = async () => {
    try {
      const updatedUserAmount = parseFloat(user.amount) + parseFloat(request.amountPaid);
      const updatedBuilderAmount = parseFloat(builder.amount) - parseFloat(request.amountPaid);

      const userObj = {
        ...user,
        amount: updatedUserAmount
      };
      const builderObj = {
        ...builder,
        amount: updatedBuilderAmount
      };

      const propertyObj = {
        ...property,
        bookedBy: {}
      };

      const requestObj = {
        ...request,
        requestStatus: "rejected"
      };

      const { success, error } = await updatePropertyRequest(request.id, requestObj);
      if (success) {
        await updateUser(request.userId, userObj);
        await updateProperty(request.propertyId, propertyObj);
        await updateBuilder(request.builderId, builderObj);
        dispatch(setRole("builder", builderObj));

        toast.success("Property request rejected");
      } else {
        console.log("Failed to accept property request", error);
        toast.error("Problem for accepting request, Please try after some time!");
      }
    } catch (error) {
      console.log("Failed to accept property request", error);
    } finally {
      dispatch(setLoader(false));
    }
  };

  const fetchData = async () => {
    const { data: userData } = await getUserById(request.userId);
    const { data: builderData } = await getBuilderById(request.builderId);
    const { data: propertyData } = await getPropertyById(request.propertyId);

    setUser(userData);
    setBuilder(builderData);
    setProperty(propertyData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[min(400px,90vw)] border border-gray-200 overflow-hidden rounded-md p-3 relative">
      <div
        className={`absolute top-4 -left-8 -rotate-45 px-8 py-1 text-white ${
          request.requestStatus === "pending" ? "bg-warning" : request.requestStatus === "accepted" ? "bg-primary" : "bg-danger"
        } `}>
        {request.requestStatus}
      </div>
      <div className="rounded-md">
        <img src="/images/main.jpg" className="rounded-md" />
      </div>
      <div className="flex flex-col bg-white w-full text-sm gap-1">
        {showBuilderDetails ? (
          <>
            <div className="mt-2">
              <span className="font-semibold">Builder's Name - </span> {builder?.name}
            </div>
            <div>
              <span className="font-semibold">builder's Email - </span> {builder?.email}
            </div>
            <div className="mb-1">
              <span className="font-semibold">Builder's Phone No - </span> {builder?.phNo}
            </div>
          </>
        ) : (
          <>
            <div className="mt-2">
              <span className="font-semibold">Name - </span> {user?.name}
            </div>
            <div>
              <span className="font-semibold">Email - </span> {user?.email}
            </div>
            <div className="mb-1">
              <span className="font-semibold">Phone No - </span> {user?.phNo}
            </div>
          </>
        )}
        <hr />
        <div>
          <span className="font-semibold">Property Name - </span> {property?.name}
        </div>
        <div>
          <span className="font-semibold">Property Type - </span> {property?.propertyType} / {property?.subPropertyType}
        </div>
        <div>
          <span className="font-semibold">Looking for - </span> {property?.lookingFor}
        </div>
        <div className="flex">
          <span className="font-semibold">Price - </span>
          <div className="flex items-center">
            <MdCurrencyRupee /> <span className="-ml-[2px]">{property?.price}</span>
          </div>
        </div>
        <div className="mb-1 flex">
          <span className="font-semibold">Token Amount - </span>
          <div className="flex items-center">
            <MdCurrencyRupee /> <span className="-ml-[2px]">{property?.tokenAmount}</span>
          </div>
        </div>
        <hr />
        <div className="flex">
          <span className="font-semibold ">Amount Paid by {showBuilderDetails ? "You" : "User"} - </span>
          <div className="flex items-center">
            <MdCurrencyRupee /> <span className="-ml-[2px]">{request?.amountPaid}</span>
          </div>
        </div>
        <div>
          <span className="font-semibold">Requested At - </span> {request?.requestedAt}
        </div>

        {showButtons && (
          <div className="flex mt-2 gap-5">
            <Button onClick={handleAccept}>Accept</Button>
            <Button variant="danger" onClick={handleReject}>
              Reject
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyRequestCard;
