import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllRequests } from "../../../../utils/axiosGloableInstance";
import { Button, PropertyRequestCard } from "../../../common";

const OwnProperties = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.role);
  const [requests, setRequests] = useState([]);

  const currRequests = requests.filter((request) => request.userId === user.id);

  const fetchData = async () => {
    const { data } = await getAllRequests();
    setRequests(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (currRequests.length === 0) {
    return (
      <div className="text-center text-secondary">
        <p className="mb-1">No owned properties at the moment.</p>
        <Button onClick={() => navigate("/all-properties")}>Explore Properties</Button>
      </div>
    );
  }
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:px-16 gap-10 mt-10">
      {currRequests?.map((request) => {
        return <PropertyRequestCard key={request.id} request={request} showButtons={false} showBuilderDetails={true} />;
      })}
    </div>
  );
};

export default OwnProperties;
