import React, { useEffect, useMemo, useState } from "react";
import { Button, DeleteConfirmationUserModel, Table } from "../../../common";
import {
  deletePropertyRequest,
  deleteUser,
  getAllProperties,
  getAllRequests,
  getUsers,
  updateProperty
} from "../../../../utils/axiosGloableInstance";
import { toast } from "react-toastify";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [userToBeDeleted, setUserToBeDeleted] = useState(null);

  const handleClick = (id) => {
    setUserToBeDeleted(id);
    setShowDeleteConfirmation(!showDeleteConfirmation);
  };

  const handleDeleteUser = async (userId) => {
    try {
      const filteredRequests = requests.filter((request) => request.userId === userId);

      for (const filteredRequest of filteredRequests) {
        const { error: updatePropertyError } = await updateProperty(filteredRequest.propertyId, { bookedBy: {} });
        if (updatePropertyError) throw new Error("Failed to update Property");

        const { error: deletePropertyRequestError } = await deletePropertyRequest(filteredRequest.id);
        if (deletePropertyRequestError) throw new Error("Failed to delete request");
      }

      const { error: deleteUserError } = await deleteUser(userId);
      if (deleteUserError) throw new Error("Failed to delete user");

      toast.success("User deleted successfully!");
    } catch (error) {
      toast.error(error);
    } finally {
      setUserToBeDeleted(null);
    }
  };

  const columns = useMemo(() => {
    return [
      { field: "id", headerName: "ID", width: 80 },
      { field: "name", headerName: "Name", width: 150 },
      { field: "email", headerName: "Email", width: 180 },
      { field: "phNo", headerName: "Phone No.", width: 140, sortable: false },
      { field: "amount", headerName: "Amount", width: 120 },
      {
        field: "actions",
        headerName: "Actions",
        width: 120,
        sortable: false,
        renderCell: (params) => (
          <Button onClick={() => handleClick(params.row.id)} variant="dangerOutline">
            Delete
          </Button>
        )
      }
    ];
  }, []);

  const fetchData = async () => {
    const { data: userData, error: userError } = await getUsers();
    setUsers(userData);

    const { data: requestsData, error: requestsError } = await getAllRequests();
    setRequests(requestsData);
  };

  useEffect(() => {
    fetchData();
  }, [userToBeDeleted]);

  return (
    <>
      {showDeleteConfirmation && (
        <DeleteConfirmationUserModel
          showDeleteConfirmation={showDeleteConfirmation}
          setShowDeleteConfirmation={setShowDeleteConfirmation}
          handleDeleteUser={handleDeleteUser}
          userToBeDeleted={userToBeDeleted}
        />
      )}
      <div className="w-[800px] max-w-[80svw] md:max-w-[85svw] lg:max-w-[90svw] mx-auto mt-10 mb-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-center mb-5 font-bold">Users Listings</h1>
        <Table columns={columns} rows={users} pageSizeOptions={[5, 10, 25, 50]} />
      </div>
    </>
  );
};

export default Users;
