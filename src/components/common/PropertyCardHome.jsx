import React from "react";
import { MdCurrencyRupee, MdVerified } from "react-icons/md";
import Button from "./Button";
import { useSelector } from "react-redux";

const PropertyCardHome = ({ property }) => {
  const { user } = useSelector((state) => state.role);
  return (
    <div className="w-[320px] h-[460px] mx-auto border-2 border-gray-200 p-3 rounded-md relative overflow-hidden">
      {property?.verifyStatusAdmin && (
        <div className="absolute top-5 -rotate-45 -left-8 text-base bg-success z-10 rounded-md py-1 px-7 text-white flex justify-between items-center gap-1">
          <div>
            <MdVerified />
          </div>
          <p>Verified </p>
        </div>
      )}
      <div>
        <img src="/images/main.jpg" alt="" className="rounded-md" />
      </div>
      <div className="flex flex-col mt-3 gap-2">
        <div className="flex justify-between">
          <div className="font-semibold text-xl line-clamp-1">{property?.name}</div>

          <div className="flex items-center justify-center">
            {property?.bookedBy?.booked === true ? (
              <div
                className={`text-sm border px-2 py-1 text-white rounded-md ${
                  property?.bookedBy?.id === user?.id ? "bg-success border-success" : "bg-danger border-danger"
                } `}>
                {property?.bookedBy?.id === user?.id ? "Already Booked" : "SOLD"}
              </div>
            ) : (
              <div className="text-sm">{property?.lookingFor === "Rent" ? <p>Available for Rent</p> : <p>Available for Sell</p>}</div>
            )}
          </div>
        </div>

        <div>
          {property?.address.streetNo}, {property?.address.addressLine}, {property?.address.city}
        </div>

        <div>
          {property?.propertyType} / {property.subPropertyType} <span className="text-base">({property?.sqFt} sq. ft)</span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="text-sm">{property?.lookingFor === "Rent" ? "Monthly Rent" : "Expected Price"} - </div>

            <div className="flex items-center justify-center">
              <div className="text-base font-semibold">
                <MdCurrencyRupee />
              </div>
              <div className="text-base font-semibold -ml-[2px]">{property?.price}</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-sm">Token amount - </div>
            <div className="flex items-center justify-center">
              <div className="text-base font-semibold">
                <MdCurrencyRupee />
              </div>
              <div className="text-base font-semibold -ml-[2px]">{property?.tokenAmount}</div>
            </div>
          </div>
        </div>

        <hr />

        <div>
          A Property By <span className="font-semibold">{property?.builderDetail?.name}</span>
        </div>
      </div>

      <div className="mt-3">
        <Button>Explore more</Button>
      </div>
    </div>
  );
};

export default PropertyCardHome;
