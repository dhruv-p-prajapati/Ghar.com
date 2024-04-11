import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllCategories, getAllProperties, getBuilders, getPropertyById, getUsers, updateProperty } from "../../../../utils/axiosGloableInstance";
import { useDispatch, useSelector } from "react-redux";
import BasicDetails from "../CreateProperty/BasicDetails";
import PropertyDetails from "../CreateProperty/PropertyDetails";
import AmenitiesDetails from "../CreateProperty/AmenitiesDetails";
import PricingDetails from "../CreateProperty/PricingDetails";
import { setLoader } from "../../../../redux/actions/appAction";
import { toast } from "react-toastify";

const UpdateProperty = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState({});

  const { builder } = useSelector((state) => state.role);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currStep, setCurrStep] = useState(0);
  const [categories, setCategories] = useState([]);
  const [properties, setProperties] = useState([]);
  const [data, setData] = useState([]);

  const nextStep = (values) => {
    setData((prevValues) => {
      return { ...prevValues, ...values };
    });
    currStep < 3 && setCurrStep(currStep + 1);
  };

  const prevStep = (values) => {
    setData((prevValues) => {
      return { ...prevValues, ...values };
    });
    currStep > 0 && setCurrStep(currStep - 1);
  };

  const handleUpdateProperty = async (values) => {
    try {
      dispatch(setLoader(true));

      const propertyObj = {
        ...data,
        price: values.price,
        tokenAmount: values.tokenAmount,
        negotiable: values.negotiable,
        constructionStatus: values.constructionStatus,
        verifyStatusAdmin: data.verifyStatusAdmin,
        builderDetail: {
          id: builder.id,
          amount: builder.amount,
          name: builder.name,
          phNo: builder.phNo
        }
      };

      const { success, error } = await updateProperty(data.id, propertyObj);

      if (success) {
        toast.success("Property registered successfully");
        navigate("/builder");
      } else {
        console.log("Failed to update property ", error);
        toast.error("Problem for updating property, Please try after some time!");
      }
    } catch (error) {
      console.log("Failed to update property ", error);
    } finally {
      dispatch(setLoader(false));
    }
  };

  const fetchData = async () => {
    const { data: categoryData } = await getAllCategories();
    setCategories(categoryData);

    const { data: propertiesData } = await getAllProperties();
    setProperties(propertiesData);

    const { data: propertyData } = await getPropertyById(propertyId);
    setData(propertyData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length === 0) {
    return null;
  }

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
      return (
        <PricingDetails
          data={data}
          setData={setData}
          nextStep={nextStep}
          prevStep={prevStep}
          handleSubmitProperty={handleUpdateProperty}
          isUpdate={true}
        />
      );
    }

    default:
      return null;
  }
};

export default UpdateProperty;
