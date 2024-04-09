import React, { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { MdCurrencyRupee, MdVerified } from "react-icons/md";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../utils/axiosGloableInstance";
import { setRole } from "../../redux/actions/roleAction";
import ConfirmVerifyUnverifyModel from "./ConfirmVerifyUnverifyModel";
import CommonBookConfirmation from "./CommonBookConfirmation";
import Button from "./Button";
import DeleteConfirmationModel from "./DeleteConfirmationModel";

const PropertyCard = ({ property, setRerender, rerender }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showConfirmationModel, setShowConfirmationModel] = useState(false);
  const [showBookConfirmation, setShowBookConfirmation] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const { user, admin, builder } = useSelector((state) => state.role);
  const {
    id,
    name,
    description,
    address,
    builderDetail,
    lookingFor,
    nearByPlaces,
    price,
    propertyType,
    subPropertyType,
    sqFt,
    tokenAmount,
    verifyStatusAdmin
  } = property;

  const handleSavedProperty = async () => {
    if (user === null) {
      toast.warning("Please login to save properties");
      return;
    } else {
      const propertyExistsInSavedProperty = user?.savedProperties?.filter((currSavedProperty) => currSavedProperty === property?.id);

      if (propertyExistsInSavedProperty.length === 0) {
        // Property not exists in Users
        try {
          const newUserObj = {
            ...user,
            savedProperties: [...user.savedProperties, property.id]
          };

          const { success, error } = await updateUser(user.id, newUserObj);

          if (success) {
            dispatch(setRole("user", newUserObj));
            toast.success("Added to saved properties");
          } else {
            console.log("Failed to save property " + error);
            toast.error("Failed to save property");
          }
        } catch (error) {
          console.log("Failed to save property " + error);
        }
      } else {
        // Property already Exists. remove it from saved properties
        const updatedSavedProperties = user.savedProperties.filter((currSavedProperty) => currSavedProperty !== property.id);

        try {
          const newUserObj = {
            ...user,
            savedProperties: updatedSavedProperties
          };

          const { success, error } = await updateUser(user.id, newUserObj);

          if (success) {
            dispatch(setRole("user", newUserObj));
            toast.success("Removed from saved properties");
          } else {
            console.log("Failed to remove property " + error);
            toast.error("Failed to remove property");
          }
        } catch (error) {
          console.log("Failed to remove property " + error);
        }
      }
    }
  };

  return (
    <div className="flex mb-3 mx-auto flex-col px-4 w-[min(85vw,850px)] relative text-secondary text-xs overflow-hidden font-medium shadow duration-300 rounded-md border border-gray-200">
      {property?.verifyStatusAdmin && (
        <div className="absolute top-5 -rotate-45 -left-8 text-base bg-success z-10 rounded-md py-1 px-7 text-white flex justify-between items-center gap-1">
          <div>
            <MdVerified />
          </div>
          <p>Verified </p>
        </div>
      )}
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 py-2 md:py-4">
        <div className="flex justify-center items-center overflow-hidden rounded-md border border-gray-100">
          <img src="/images/main.jpg" alt="" className="duration-300 hover:scale-105 w-[85vw] md:w-[400px] rounded-md h-full " />
        </div>
        <div className="flex flex-col gap-2 md:gap-3 w-full">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-2xl">{property?.name}</div>
            <div className="flex items-center justify-center gap-2">
              {property?.bookedBy?.booked === true ? (
                builder !== null ? (
                  <div className="text-base bg-primary text-white py-1 px-2 rounded-md">Booked by - {property?.bookedBy.name}</div>
                ) : (
                  <div
                    className={`text-sm border px-2 py-1 text-white rounded-md ${
                      property?.bookedBy?.id === user?.id ? "bg-success border-success" : "bg-danger border-danger"
                    } `}>
                    {property?.bookedBy?.id === user?.id ? "Already Booked" : "SOLD"}
                  </div>
                )
              ) : (
                <div className="text-sm">{lookingFor === "Rent" ? <p>Available for Rent</p> : <p>Available for Sell</p>}</div>
              )}

              {user && (
                <div className="text-xl md:text-2xl cursor-pointer" onClick={handleSavedProperty}>
                  {user !== null && user.savedProperties?.some((currSavedProperty) => currSavedProperty === property?.id) ? (
                    <FaBookmark />
                  ) : (
                    <FaRegBookmark />
                  )}
                </div>
              )}
            </div>
          </div>

          <div>
            {property?.address?.streetNo}, {property?.address?.addressLine}, {property?.address?.city}
          </div>

          <div className="flex gap-1 md:gap-5 flex-col items-start md:flex-row">
            <div className="flex gap-2 items-center justify-center">
              <div className="text-sm">{property?.lookingFor === "Rent" ? "Monthly Rent" : "Expected Price"} - </div>

              <div className="flex items-center justify-center">
                <div className="text-base md:text-lg font-bold">{property?.price}</div>
                <div className="text-base md:text-lg">
                  <MdCurrencyRupee />
                </div>
              </div>
            </div>

            <div className="flex gap-2 items-center justify-center">
              <div className="text-sm">Token amount - </div>
              <div className="flex items-center justify-center">
                <div className="text-base md:text-lg font-bold">{property?.tokenAmount}</div>
                <div className="text-base md:text-lg">
                  <MdCurrencyRupee />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p>
              <span className="text-sm">Property Type - </span> {property?.propertyType} / {property?.subPropertyType || "Villa"}{" "}
              <span className="text-base">({property?.sqFt} sq. ft)</span>
            </p>
          </div>

          <div className="line-clamp-3 md:w-2/3">
            <span className="text-sm">Description - </span> {property?.description}
          </div>

          <div>
            <span className="text-sm">Near by places - </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
              <p>Bus: {property?.nearByPlaces?.bus} k.m</p>
              <p>Hospital: {property?.nearByPlaces?.hospital} k.m</p>
              <p>Shopping Market: {property?.nearByPlaces?.shopppingMarket} k.m</p>
              <p>School: {property?.nearByPlaces?.school} k.m</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 py-3">
        <div className="flex gap-8">
          <p>
            <span className="text-sm">Property from - </span> {property?.builderDetail?.name}
          </p>
          <p>
            <span className="text-sm">Phone No - </span> {property?.builderDetail?.phNo}
          </p>
        </div>
        <div className="flex justify-between gap-5">
          <Button className=" text-primary" variant="primaryOutline" onClick={() => navigate(`/property/${property?.id}`)}>
            View Details
          </Button>
          {showBookConfirmation && (
            <CommonBookConfirmation
              showBookConfirmation={showBookConfirmation}
              setShowBookConfirmation={setShowBookConfirmation}
              user={user}
              builder={builderDetail}
              property={property}
              rerender={rerender}
              setRerender={setRerender}
            />
          )}
          {user !== null && !(property?.bookedBy?.booked === true) && (
            <Button onClick={() => setShowBookConfirmation(!showBookConfirmation)}>Book Now</Button>
          )}

          {builder !== null && builder.id === property?.builderDetail?.id && !(property?.bookedBy?.booked === true) && (
            <Button onClick={() => navigate(`/update-property/${property?.id}`)}>Edit</Button>
          )}

          {showConfirmationModel && (
            <ConfirmVerifyUnverifyModel
              showConfirmationModel={showConfirmationModel}
              setShowConfirmationModel={setShowConfirmationModel}
              status={property?.verifyStatusAdmin === false ? true : false}
              property={property}
              rerender={rerender}
              setRerender={setRerender}
            />
          )}
          {admin !== null && (
            <div>
              {property?.verifyStatusAdmin === false ? (
                <Button onClick={() => setShowConfirmationModel(!showConfirmationModel)}>Verify</Button>
              ) : (
                <Button variant="danger" onClick={() => setShowConfirmationModel(!showConfirmationModel)}>
                  Unverify
                </Button>
              )}
            </div>
          )}

          {showDeleteConfirmation && (
            <DeleteConfirmationModel
              showDeleteConfirmation={showDeleteConfirmation}
              setShowDeleteConfirmation={setShowDeleteConfirmation}
              property={property}
              builder={builder}
              rerender={rerender}
              setRerender={setRerender}
            />
          )}
          {builder !== null && property?.builderDetail.id === builder.id && (
            <Button variant="danger" onClick={() => setShowDeleteConfirmation(!showDeleteConfirmation)}>
              Delete
            </Button>
          )}
          {admin !== null && (
            <Button variant="danger" onClick={() => setShowDeleteConfirmation(!showDeleteConfirmation)}>
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
