import React from "react";
import { bookPropertyRequest, getBuilderById, updateBuilder, updateProperty, updateUser } from "../axiosGloableInstance";
import { toast } from "react-toastify";

const bookProperty = async (user, builder, property, amountPaid, requests = []) => {
  const { data } = await getBuilderById(builder.id);

  const updatedUserAmount = parseFloat(user.amount) - parseFloat(amountPaid);
  const updatedBuilderAmount = parseFloat(data.amount) + parseFloat(amountPaid);

  const userObj = {
    ...user,
    amount: updatedUserAmount
  };
  const builderObj = {
    ...data,
    amount: updatedBuilderAmount
  };
  const propertyObj = {
    ...property,
    bookedBy: {
      booked: true,
      id: user.id,
      name: user.name
    }
  };

  try {
    const requestObj = {
      id: requests.length !== 0 ? (parseInt(requests[requests.length - 1].id) + 1).toString() : "1",
      userId: user.id,
      builderId: builder.id,
      amountPaid,
      requestedAt: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
      requestStatus: "pending",
      property
    };

    const { success, error } = await bookPropertyRequest(requestObj);
    if (success) {
      await updateUser(user.id, userObj);
      await updateBuilder(builder.id, builderObj);
      await updateProperty(property.id, propertyObj);

      toast.success("Property booked successfully");

      return userObj;
    } else {
      console.log("Failed to book property", error);
      toast.error("Problem for booking property, Please try after some time!");
    }
  } catch (error) {
    console.log("Failed to book property", error);
  }
};

export default bookProperty;
