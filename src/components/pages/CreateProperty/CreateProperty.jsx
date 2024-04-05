import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicDetails from "./BasicDetails";
import PropertyDetails from "./PropertyDetails";
import AmenitiesDetails from "./AmenitiesDetails";
import PricingDetails from "./PricingDetails";
import { getAllCategories, getAllProperties, registerProperty } from "../../../utils/axiosGloableInstance";
import { setLoader } from "../../../redux/actions/appAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CreateProperty = () => {
  const { builder } = useSelector((state) => state.role);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currStep, setCurrStep] = useState(0);
  const [categories, setCategories] = useState([]);
  const [properties, setProperties] = useState([]);
  const [data, setData] = useState({
    lookingFor: "",
    propertyType: "",
    phNo: builder.phNo || "",

    subPropertyType: "",
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
      lift: false,
      cctv: false,
      gym: false,
      garden: false,
      swimmingPool: false,
      clubHouse: false
    },

    amenitiesForCommercial: {
      lift: false,
      cctv: false,
      powerBackup: false,
      fireSafety: false,
      waterStorage: false,
      cafeteria: false,
      receptionArea: false
    },

    amenitiesForLand: {
      powerBackup: false,
      waterStorage: false,
      farmHouse: false
    },

    price: "",
    tokenAmount: "",
    negotiable: true,
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

  const handleRegisterProperty = async () => {
    try {
      dispatch(setLoader(true));

      const propertyObj = {
        ...data,
        id: properties.length !== 0 ? (parseInt(properties[properties.length - 1].id) + 1).toString() : "1",
        verifyStatusAdmin: false,
        builderDetail: {
          id: builder.id,
          name: builder.name,
          phNo: builder.phNo
        }
      };

      const { success, error } = await registerProperty(propertyObj);

      if (success) {
        toast.success("Property registered successfully");
        navigate("/builder");
      } else {
        console.log("Failed to register property ".error);
        toast.error("Problem for registering property, Please try after some time!");
      }
    } catch (error) {
      console.log("Failed to register property ".error);
    } finally {
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    (async () => {
      const { success, data: categoryData, error } = await getAllCategories();
      const { data: propertiesData } = await getAllProperties();
      setCategories(categoryData);
      setProperties(propertiesData);
    })();
  }, []);

  switch (currStep) {
    case 0: {
      return <BasicDetails data={data} setData={setData} nextStep={nextStep} prevStep={prevStep} categories={categories} />;
    }

    case 1: {
      return <PropertyDetails data={data} setData={setData} nextStep={nextStep} prevStep={prevStep} categories={categories} />;
    }

    case 2: {
      return <AmenitiesDetails data={data} setData={setData} nextStep={nextStep} prevStep={prevStep} />;
    }

    case 3: {
      return <PricingDetails data={data} setData={setData} nextStep={nextStep} prevStep={prevStep} handleRegisterProperty={handleRegisterProperty} />;
    }

    default:
      return null;
  }
};

export default CreateProperty;
