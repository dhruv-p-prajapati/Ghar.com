import React from "react";
import RadioButton from "./RadioButton";

const FilterComponent = ({
  propertyType,
  setPropertyType,
  subPropertyType,
  setSubPropertyType,
  lookingFor,
  setLookingFor,
  verifiedByAdmin,
  setVerifiedByAdmin,
  categories
}) => {
  const propertyTypeDataRadioButton = [
    { id: "all", name: "propertyType", text: "all" },
    ...categories?.map(({ propertyType }) => ({ id: propertyType, name: "propertyType", text: propertyType }))
  ];

  const subPropertyTypeDataRadioButton = [
    { id: "all", name: "subPropertyType", text: "all" },
    ...categories
      ?.filter((category) => category.propertyType === propertyType && category.subPropertyType)
      ?.map((category) =>
        category.subPropertyType.map((subCategory) => ({
          id: subCategory,
          name: "subPropertyType",
          text: subCategory
        }))
      )
      .flat()
  ];

  const lookingForDataRadioButton = [
    { id: "All", name: "lookingFor", text: "all" },
    { id: "rent", name: "lookingFor", text: "Rent" },
    { id: "sell", name: "lookingFor", text: "Sell" }
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg">Property Type - </h3>
        <RadioButton
          radioButtonData={propertyTypeDataRadioButton}
          value={propertyType}
          handleChange={(e) => {
            setPropertyType(e.target.value);
            setSubPropertyType("all");
          }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg">Sub Property Type - </h3>
        {propertyType !== "all" ? (
          <div>
            <RadioButton
              radioButtonData={subPropertyTypeDataRadioButton}
              value={subPropertyType}
              handleChange={(e) => {
                setSubPropertyType(e.target.value);
              }}
            />
          </div>
        ) : (
          <p className="text-gray-400 pb-2">Please select a property type to see available Sub Property</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg">Available For - </h3>
        <RadioButton
          radioButtonData={lookingForDataRadioButton}
          value={lookingFor}
          handleChange={(e) => {
            console.log(e.target.value);
            setLookingFor(e.target.value);
          }}
        />
      </div>

      <div className="flex gap-1 items-center mt-5 cursor-pointer">
        <input type="checkbox" id="verifiedByAdmin" checked={verifiedByAdmin} onChange={() => setVerifiedByAdmin((prev) => !prev)} />
        <label htmlFor="verifiedByAdmin" className="cursor-pointer">
          Verified by Admin
        </label>
      </div>
    </div>
  );
};

export default FilterComponent;
