import React, { useState } from "react";
import { useSelector } from "react-redux";

const CreateProperty = () => {
  const { builder } = useSelector((state) => state.role);

  const [currStep, setCurrStep] = useState(0);
  const [data, setData] = useState({
    lookingFor: "",
    propertyType: "",
    phNo: builder.phNo || "",
    subPropertyType: "",

    name: "",
    description: "",
    streetNo: "",
    addressLine: "",
    city: "",
    state: "",
    sqFt: "",

    furnished: "",
    bhk: "",
    facing: "",
    nearByPlaces: {
      school: "",
      hospital: "",
      bus: "",
      shopppingMarket: ""
    },
    amenitiesForResidential: {
      lift: true,
      cctv: true,
      gym: true,
      garden: true,
      swimmingPool: true,
      clubHouse: true
    },
    amenitiesForCommercial: {
      Lift: "",
      Cctv: "",
      powerBackup: "",
      fireSafety: "",
      waterStorage: "",
      cafeteria: "",
      receptionArea: ""
    },
    parking: "",

    monthlyRent: "",
    tokenAmount: "",
    negotiable: "",
    constructionStatus: ""
  });
  return <div>CreateProperty</div>;
};

export default CreateProperty;
