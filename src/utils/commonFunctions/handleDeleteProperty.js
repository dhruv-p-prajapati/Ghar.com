import { deleteProperty, deletePropertyRequest, getAllRequests, getBuilders, getUsers, updateBuilder, updateUser } from "../axiosGloableInstance";
import { toast } from "react-toastify";

const handleDeleteProperty = async (property) => {
  try {
    let builderObjToBeReturned;
    const { data: users } = await getUsers();
    const { data: builders } = await getBuilders();
    const { data: requests } = await getAllRequests();

    const propertyRequestExists = requests.filter((request) => request.propertyId === property.id);

    if (propertyRequestExists[0]) {
      deletePropertyRequest(propertyRequestExists[0]?.id);
    }

    await deleteProperty(property.id);

    for (const user of users) {
      const existsInSavedProperty = user.savedProperties.includes(property.id);
      if (existsInSavedProperty) {
        const userObj = {
          ...user,
          savedProperties: user.savedProperties.filter((savedProperty) => savedProperty !== property.id)
        };
        await updateUser(user.id, userObj);
      }

      if (propertyRequestExists[0]?.userId === user.id) {
        const userObj = {
          amount: parseFloat(user.amount) + parseFloat(propertyRequestExists[0].amountPaid)
        };

        await updateUser(user.id, userObj);
      }
    }

    for (const builder of builders) {
      const existsInListedProperties = builder.listedProperties.includes(property.id);
      if (existsInListedProperties) {
        const builderObj = {
          ...builder,
          listedProperties: builder.listedProperties.filter((listedProperty) => listedProperty !== property.id)
        };

        await updateBuilder(builder.id, builderObj);
      }

      if (propertyRequestExists[0]?.builderId === builder.id) {
        const builderObj = {
          amount: parseFloat(builder.amount) - parseFloat(propertyRequestExists[0].amountPaid)
        };

        await updateBuilder(builder.id, builderObj);
        builderObjToBeReturned = builderObj;
      }
    }

    toast.success("Property deleted successfully");

    return builderObjToBeReturned;
  } catch (error) {
    console.log("Failed to delete Property", error);
    toast.error("Problem for deleting property, Please try after some time!");
  }
};

export default handleDeleteProperty;
