import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getAllRequests, getPropertyById } from "../../../utils/axiosGloableInstance";
import { MdOutlineCurrencyRupee, MdVerified } from "react-icons/md";
import { Button } from "../../common";
import { useSelector } from "react-redux";
import ConfirmVerifyUnverifyModel from "../../common/ConfirmVerifyUnverifyModel";
import CommonBookConfirmation from "../../common/CommonBookConfirmation";
import DeleteConfirmationModel from "../../common/DeleteConfirmationModel";

const CustomCheckbox = ({ checkBoxData = [], type = "" }) => {
  return (
    <div className="flex justify-start gap-6 flex-wrap">
      {checkBoxData &&
        checkBoxData?.map((checkbox) => {
          return (
            <div className="flex flex-col" key={checkbox.id}>
              <div>
                <label
                  htmlFor={checkbox.id}
                  className={`block w-fit cursor-pointer rounded-lg border border-gray-300 bg-white py-2 px-4 text-sm font-medium shadow text-gray-600 hover:border-gray-20 has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:ring-1 has-[:checked]:shadow-primary has-[:checked]:ring-primary has-[:checked]:shadow ${
                    checkbox.checked !== "true" && type === "amenities" && "opacity-70"
                  }`}>
                  <div className="">
                    <p className="text-center">{checkbox.text}</p>
                  </div>
                  <div className="sr-only">
                    <input type="checkbox" id={checkbox.id} checked={checkbox.checked === "true"} className="hidden" readOnly />
                  </div>
                </label>
              </div>
              {checkbox.checked !== "true" && type === "amenities" && (
                <div className="text-[10px] text-start text-danger opacity-70">Not available</div>
              )}
            </div>
          );
        })}
    </div>
  );
};

const PropertyDetail = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();

  const { user, admin, builder } = useSelector((state) => state.role);

  const [showConfirmationModel, setShowConfirmationModel] = useState(false);
  const [showBookConfirmation, setShowBookConfirmation] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const [requests, setRequests] = useState([]);
  const [property, setProperty] = useState();

  const facingLinks = [
    {
      id: "north",
      text: "North",
      checked: property?.facing === "North" ? "true" : "false"
    },
    {
      id: "east",
      text: "East",
      checked: property?.facing === "East" ? "true" : "false"
    },
    {
      id: "west",
      text: "West",
      checked: property?.facing === "West" ? "true" : "false"
    },
    {
      id: "south",
      text: "South",
      checked: property?.facing === "South" ? "true" : "false"
    }
  ];

  const furnishedLinks = [
    {
      id: "fullFurnished",
      checked: property?.furnished === "Full-Furnished" ? "true" : "false",
      text: "Full-Furnished"
    },
    {
      id: "semiFurnished",
      checked: property?.furnished === "Semi-Furnished" ? "true" : "false",
      text: "Semi-Furnished"
    },
    {
      id: "unFurnished",
      checked: property?.furnished === "Un-Furnished" ? "true" : "false",
      text: "Un-Furnished"
    }
  ];

  const bhkLinks = [
    {
      id: "1bhk",
      text: "1 BHK",
      checked: property?.bhk === "1 BHK" ? "true" : "false"
    },
    {
      id: "2bhk",
      text: "2 BHK",
      checked: property?.bhk === "2 BHK" ? "true" : "false"
    },
    {
      id: "3bhk",
      text: "3 BHK",
      checked: property?.bhk === "3 BHK" ? "true" : "false"
    },
    {
      id: "3+bhk",
      text: "3+ BHK",
      checked: property?.bhk === "3+ BHK" ? "true" : "false"
    }
  ];

  const amenitiesForResidentialLinks = [
    {
      id: "lift",
      text: "lift",
      checked: property?.amenitiesForResidential.lift === true ? "true" : "false"
    },
    {
      id: "cctv",
      text: "CCTV",
      checked: property?.amenitiesForResidential.cctv === true ? "true" : "false"
    },
    {
      id: "gym",
      text: "GYM",
      checked: property?.amenitiesForResidential.gym === true ? "true" : "false"
    },
    {
      id: "garden",
      text: "Garden",
      checked: property?.amenitiesForResidential.garden === true ? "true" : "false"
    },
    {
      id: "swimmingPool",
      text: "Swimming Pool",
      checked: property?.amenitiesForResidential.swimmingPool === true ? "true" : "false"
    },
    {
      id: "clubHouse",
      text: "Club House",
      checked: property?.amenitiesForResidential.clubHouse === true ? "true" : "false"
    }
  ];

  const amenitiesForCommercialLinks = [
    {
      id: "lift",
      text: "Lift",
      checked: property?.amenitiesForCommercial.lift === true ? "true" : "false"
    },
    {
      id: "cctv",
      checked: property?.amenitiesForCommercial.cctv === true ? "true" : "false",
      text: "CCTV"
    },
    {
      id: "fireSafety",
      checked: property?.amenitiesForCommercial.fireSafety === true ? "true" : "false",
      text: "Fire Safety"
    },
    {
      id: "waterStorage",
      checked: property?.amenitiesForCommercial.waterStorage === true ? "true" : "false",
      text: "Water Storage"
    },
    {
      id: "cafeteria",
      checked: property?.amenitiesForCommercial.cafeteria === true ? "true" : "false",
      text: "Cafeteria"
    },
    {
      id: "receptionArea",
      checked: property?.amenitiesForCommercial.receptionArea === true ? "true" : "false",
      text: "Reception Area"
    }
  ];

  const amenitiesForLandLinks = [
    {
      id: "powerBackup",
      checked: property?.amenitiesForLand.powerBackup === true ? "true" : "false",
      text: "Power Backup"
    },
    {
      id: "waterStorage",
      checked: property?.amenitiesForLand.waterStorage === true ? "true" : "false",
      text: "Water Storage"
    },
    {
      id: "farmHouse",
      checked: property?.amenitiesForLand.farmHouse === true ? "true" : "false",
      text: "Farm House"
    }
  ];

  useEffect(() => {
    (async () => {
      const { data: propertyData } = await getPropertyById(propertyId);
      const { data: requestData } = await getAllRequests();
      setProperty(propertyData);
      setRequests(requestData);
    })();
  }, [property]);

  return (
    <div className="flex justify-center">
      <div className="w-[min(85vw,900px)] md:px-10 py-20 flex flex-col text text-sm md:text-md font-semibold justify-center items-center">
        <div className="w-full flex flex-col gap-5 relative overflow-hidden">
          {property?.verifyStatusAdmin && (
            <div className="absolute top-5 -rotate-45 -left-8 text-base bg-success z-10 rounded-md py-1 px-7 text-white flex justify-between items-center gap-1">
              <div>
                <MdVerified />
              </div>
              <p>Verified </p>
            </div>
          )}
          <div className="bg-primary w-full ">
            <img src="/images/main.jpg" alt="Main Image" className="w-full h-[400px]" />
          </div>
          <div className="w-full flex flex-col gap-2 md:gap-5">
            <div className="text-3xl md:text-5xl font-semibold flex items-center">{property?.name}</div>

            <div>
              {property?.propertyType} ({property?.subPropertyType}) with{" "}
              <span className="font-bold text-base md:text-lg">{property?.sqFt} sq.ft</span> available for{" "}
              <span className="font-bold text-base md:text-lg">{property?.lookingFor}</span> at {property?.address.streetNo},{" "}
              {property?.address.addressLine}, {property?.address.city}, {property?.address.state}
            </div>

            <div className="flex gap-5">
              <div className="flex items-center">
                <div className="text-sm md:text-base text-gray-800">{property?.lookingFor === "Rent" ? "Monthly Rent" : "Expected Price"} -</div>

                <div className="flex items-center justify-center">
                  <span className="flex items-center text-base md:text-lg font-bold">
                    <MdOutlineCurrencyRupee />
                    <span className="-ml-[2px]">{property?.price || 450011}</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-sm md:text-base text-gray-800">Token Amount - </div>

                <div className="flex items-center justify-center">
                  <span className="flex items-center text-base md:text-lg font-bold">
                    <MdOutlineCurrencyRupee />
                    <span className="-ml-[2px]">{property?.tokenAmount || 450011}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="w-full mt-5 flex flex-col gap-8">
          <div>
            <h2 className="text-xl md:text-3xl">Description</h2>
            <p className="text-sm md:text-base mt-1 font-normal">{property?.description}</p>
          </div>

          <hr />

          <h2 className="text-xl md:text-3xl mt-5">Amenities and Other details</h2>

          <div>
            <h3>Facing</h3>
            <div className="mt-4">
              <CustomCheckbox checkBoxData={facingLinks} />
            </div>
          </div>

          {property?.propertyType === "residential" && (
            <div>
              <h3>Furnished Status</h3>
              <div className="mt-4">
                <CustomCheckbox checkBoxData={furnishedLinks} />
              </div>
            </div>
          )}

          {property?.propertyType === "residential" && (
            <div>
              <h3>BHK</h3>
              <div className="mt-4">
                <CustomCheckbox checkBoxData={bhkLinks} />
              </div>
            </div>
          )}

          {property?.propertyType === "residential" && (
            <div>
              <h3>Amenities For Residential</h3>
              <div className="mt-4">
                <CustomCheckbox checkBoxData={amenitiesForResidentialLinks} type="amenities" />
              </div>
            </div>
          )}

          {property?.propertyType === "commercial" && (
            <div>
              <h3>Amenities For Commercial</h3>
              <div className="mt-4">
                <CustomCheckbox checkBoxData={amenitiesForCommercialLinks} type="amenities" />
              </div>
            </div>
          )}

          {property?.propertyType === "land" && (
            <div>
              <h3>Amenities For Land</h3>
              <div className="mt-4">
                <CustomCheckbox checkBoxData={amenitiesForLandLinks} type="amenities" />
              </div>
            </div>
          )}

          <div>
            <h3>Available parking</h3>
            <span className="mt-1 bg-primary text-white w-fit flex justify-center items-center py-2 px-4 rounded-md text-base cursor-pointer">
              {property?.parking}
            </span>
          </div>

          <div>
            <h3>Construction Status</h3>
            <div className="mt-3">
              <span className="bg-primary text-white shadow shadow-primary py-2 px-4 rounded-md text-base cursor-pointer">
                {property?.constructionStatus}
              </span>
            </div>
          </div>

          <hr />

          <div>
            <h3 className="text-xl md:text-3xl">Builders Details</h3>

            <p className="text-base text-gray-800 mt-2 md:mt-5">
              Name - <span>{property?.builderDetail.name}</span>
            </p>
            <p className="text-base text-gray-800">
              Phone No - <span>{property?.builderDetail.phNo}</span>
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondaryOutline" onClick={() => navigate("/")}>
              Back
            </Button>

            {showBookConfirmation && (
              <CommonBookConfirmation
                showBookConfirmation={showBookConfirmation}
                setShowBookConfirmation={setShowBookConfirmation}
                user={user}
                builder={property?.builderDetail}
                property={property}
                requests={requests}
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
              />
            )}

            {admin !== null && (
              <div>
                {property?.verifyStatusAdmin === false ? (
                  <Button onClick={() => setShowConfirmationModel(!showConfirmationModel)}>Verify Property</Button>
                ) : (
                  <Button variant="danger" onClick={() => setShowConfirmationModel(!showConfirmationModel)}>
                    Unverify Property
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
              />
            )}
            {builder !== null && property?.builderDetail?.id === builder.id && (
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
    </div>
  );
};

export default PropertyDetail;
