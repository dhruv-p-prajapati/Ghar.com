import React, { useEffect } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import Button from "./Button";
import { useNavigate } from "react-router";

const PropertyCard = ({ property }) => {
  console.log(property);
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

  const navigate = useNavigate();
  return (
    <div className="flex flex-col px-4 w-[min(85vw,850px)] relative text-secondary text-xs font-medium shadow duration-300 hover:shadow hover:shadow-gray-600 rounded-md border border-gray-200">
      {verifyStatusAdmin && <div className="absolute top-2 left-2 text-base bg-success rounded-md py-1 px-2 text-white">Verified</div>}
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 py-2 md:py-4">
        <div className="flex justify-center items-center overflow-hidden rounded-md border border-gray-100">
          <img src="/images/main.jpg" alt="" className="duration-300 hover:scale-105 w-[85vw] md:w-[400px] rounded-md h-full " />
        </div>
        <div className="flex flex-col gap-2 md:gap-3 w-full">
          <div className="flex justify-between">
            <div className="font-semibold text-2xl">{name}</div>
            <div className="flex items-center gap-5">
              <div className="text-sm">{lookingFor === "Rent" ? <p>Available for Rent</p> : <p>Available for Sell</p>}</div>
              <div className="text-xl md:text-2xl cursor-pointer">
                <FaRegBookmark />
              </div>
            </div>
          </div>

          <div>
            {address.streetNo}, {address.addressLine}, {address.city}
          </div>

          <div className="flex gap-1 md:gap-5 flex-col items-start md:flex-row">
            <div className="flex gap-2 items-center justify-center">
              <div className="text-sm">{lookingFor === "Rent" ? "Monthly Rent" : "Expected Price"} - </div>

              <div className="flex items-center justify-center">
                <div className="text-base md:text-lg font-bold">{price || 5602}</div>
                <div className="text-base md:text-lg">
                  <MdCurrencyRupee />
                </div>
              </div>
            </div>

            <div className="flex gap-2 items-center justify-center">
              <div className="text-sm">Token amount - </div>
              <div className="flex items-center justify-center">
                <div className="text-base md:text-lg font-bold">{tokenAmount || 5602}</div>
                <div className="text-base md:text-lg">
                  <MdCurrencyRupee />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p>
              <span className="text-sm">Property Type - </span> {propertyType} / {subPropertyType || "Villa"}{" "}
              <span className="text-base">({sqFt} sq. ft)</span>
            </p>
          </div>

          <div className="line-clamp-2 md:w-2/3">
            <span className="text-sm">Description - </span> {description}
          </div>

          <div>
            <span className="text-sm">Near by places - </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
              <p>Bus: {nearByPlaces.bus} k.m</p>
              <p>Hospital: {nearByPlaces.hospital} k.m</p>
              <p>Shopping Market: {nearByPlaces.shopppingMarket} k.m</p>
              <p>School: {nearByPlaces.school} k.m</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 py-3">
        <div className="flex gap-8">
          <p>
            <span className="text-sm">Property from - </span> {builderDetail.name}
          </p>
          <p>
            <span className="text-sm">Phone No - </span> {builderDetail.phNo}
          </p>
        </div>
        <div className="flex justify-between gap-8">
          <Button className=" text-primary" variant="primaryOutline" onClick={() => navigate(`/property/${id}`)}>
            View Details
          </Button>
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
