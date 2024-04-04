import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BasicDetails from "./BasicDetails";
import PropertyDetails from "./PropertyDetails";
import AmenitiesDetails from "./AmenitiesDetails";
import PricingDetails from "./PricingDetails";
import { getAllCategories } from "../../../utils/axiosGloableInstance";

const CreateProperty = () => {
  const { builder } = useSelector((state) => state.role);

  const [currStep, setCurrStep] = useState(0);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState({
    lookingFor: "",
    propertyType: "",
    phNo: builder.phNo || "",

    name: "",
    description: "",
    address: {
      streetNo: "25",
      addressLine: "",
      city: "",
      state: ""
    },
    sqFt: "",

    // for all
    facing: "",
    parking: "",
    nearByPlaces: {
      school: "",
      hospital: "",
      bus: "",
      shopppingMarket: ""
    },

    // for residential
    furnished: "",
    bhk: "",
    amenitiesForResidential: {
      lift: true,
      cctv: true,
      gym: true,
      garden: true,
      swimmingPool: true,
      clubHouse: true
    },

    // for commercial
    amenitiesForCommercial: {
      Lift: "",
      Cctv: "",
      powerBackup: "",
      fireSafety: "",
      waterStorage: "",
      cafeteria: "",
      receptionArea: ""
    },

    // for land
    width: "",
    length: "",
    amenitiesForLand: {
      powerBackup: "",
      waterStorage: "",
      farmHouse: ""
    },

    monthlyRent: "",
    tokenAmount: "",
    negotiable: "",
    constructionStatus: ""
  });

  const nextStep = (values) => {
    setData((prevValues) => {
      return { ...prevValues, ...values };
    });
    setCurrStep(currStep + 1);
  };
  const prevStep = (values) => {
    setData((prevValues) => {
      return { ...prevValues, ...values };
    });
    setCurrStep(currStep - 1);
  };

  console.log(data);

  useEffect(() => {
    (async () => {
      const { success, data, error } = await getAllCategories();
      setCategories(data);
    })();
  }, []);

  switch (currStep) {
    case 0: {
      return <BasicDetails data={data} setData={setData} nextStep={nextStep} prevStep={prevStep} categories={categories} />;
    }

    case 1: {
      return <PropertyDetails data={data} setData={setData} nextStep={nextStep} prevStep={prevStep} />;
    }

    case 2: {
      return <AmenitiesDetails data={data} setData={setData} nextStep={nextStep} prevStep={prevStep} />;
    }

    case 3: {
      return <PricingDetails data={data} setData={setData} nextStep={nextStep} prevStep={prevStep} />;
    }

    default:
      return null;
  }
};

export default CreateProperty;
