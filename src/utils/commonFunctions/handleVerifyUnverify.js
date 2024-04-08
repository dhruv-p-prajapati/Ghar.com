import React from "react";
import { updateProperty } from "../axiosGloableInstance";
import { toast } from "react-toastify";

const handleVerifyUnverify = async (status, property) => {
  try {
    const propertyObj = {
      ...property,
      verifyStatusAdmin: status
    };
    const { success, error } = await updateProperty(property.id, propertyObj);
    if (success) {
      toast.success(`Property marked as ${status === true ? "Verified" : "Unverified"}`);
    } else {
      console.log("Failed to update status ", error);
      console.log("Problem for updating status, Please try after some time!");
    }
  } catch (error) {
    console.log("Failed to update status ", error);
  }
};

export default handleVerifyUnverify;
