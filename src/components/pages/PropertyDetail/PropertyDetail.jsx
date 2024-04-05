import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getPropertyById } from "../../../utils/axiosGloableInstance";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdCurrencyRupee, MdOutlineCurrencyRupee } from "react-icons/md";
import { Button, Checkbox } from "../../common";

const CustomCheckbox = ({ checkBoxData = [] }) => {
  return (
    <div className="flex justify-start gap-6 flex-wrap">
      {checkBoxData &&
        checkBoxData?.map((checkbox) => {
          console.log(checkbox);
          return (
            <div key={checkbox.id}>
              <label
                htmlFor={checkbox.id}
                className={`block w-fit cursor-pointer rounded-lg border border-gray-300 bg-white py-2 px-4 text-sm font-medium shadow text-gray-600 hover:border-gray-20 has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:ring-1 has-[:checked]:shadow-primary has-[:checked]:ring-primary has-[:checked]:shadow-md`}>
                <div className="">
                  <p className="text-center">{checkbox.text}</p>
                </div>
                <div className="sr-only">
                  <input type="checkbox" id={checkbox.id} checked={checkbox.checked === "true"} className="hidden" readOnly />
                </div>
              </label>
            </div>
          );
        })}
    </div>
  );
};

const PropertyDetail = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();

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
      const { data } = await getPropertyById(propertyId);
      setProperty(data);
    })();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="w-[min(85vw,900px)] md:px-10 py-20 flex flex-col text text-sm md:text-md font-semibold justify-center items-center">
        <div className="w-full flex flex-col gap-5">
          <div className="bg-primary w-full ">
            <img src="/images/main.jpg" alt="Main Image" className="w-full h-[400px]" />
          </div>
          <div className="w-full flex flex-col gap-2 md:gap-5">
            <div className="text-3xl md:text-5xl font-semibold">{property?.name}</div>

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
            <p className="text-sm md:text-base mt-1 font-normal">
              IIt’s a 2 bhk independent house situated in Visnagar Road, Mahesana. It has a salable area of 1350 sqft and is available at a price of
              Rs. 2,592 per sqft. It is a 5 year old ready-to-move-in property. The society is well connected by different modes of transportation.
              Kindly call us for details.It’s a 2 bhk independent house situated in Visnagar Road, Mahesana. It has a salable area of 1350 sqft and is
              available at a price of Rs. 2,592 per sqft. It is a 5 year old ready-to-move-in property. The society is well connected by different
              modes of transportation. Kindly call us for details.
            </p>
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
                <CustomCheckbox checkBoxData={amenitiesForResidentialLinks} />
              </div>
            </div>
          )}

          {property?.propertyType === "commercial" && (
            <div>
              <h3>Amenities For Commercial</h3>
              <div className="mt-4">
                <CustomCheckbox checkBoxData={amenitiesForCommercialLinks} />
              </div>
            </div>
          )}

          {property?.propertyType === "land" && (
            <div>
              <h3>Amenities For Land</h3>
              <div className="mt-4">
                <CustomCheckbox checkBoxData={amenitiesForLandLinks} />
              </div>
            </div>
          )}

          <div>
            <h3>Available parking</h3>
            <span className="mt-1 border-2 bg-primary text-white border-primary w-fit py-1 px-3 flex justify-center items-center rounded-[50%]">
              {property?.parking}
            </span>
          </div>

          <div>
            <h3>Construction Status</h3>
            <div className="mt-3">
              <span className="bg-primary text-white shadow-md shadow-primary py-2 px-4 rounded-md text-base">
                {property?.constructionStatus || "Ready To move"}
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
          <div className="">
            <Button variant="primaryOutline" onClick={() => navigate("/")}>
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
