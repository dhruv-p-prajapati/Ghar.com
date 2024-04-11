import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllRequests } from "../../../../utils/axiosGloableInstance";
import { Button, HelmetHeader, PropertyRequestCard } from "../../../common";

const AcceptedRequests = () => {
  const navigate = useNavigate();

  const { builder } = useSelector((state) => state.role);
  const [requests, setRequests] = useState([]);

  const currBuilderAcceptedRequest = requests.filter((request) => request.builderId === builder.id && request.requestStatus === "accepted");

  const fetchData = async () => {
    const { data } = await getAllRequests();
    setRequests(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (currBuilderAcceptedRequest.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <p className="text-lg font-semibold">No accepted requests at the moment.</p>
        <p className=" text-gray-600 mb-2">Start reviewing and accepting request</p>
        <Button onClick={() => navigate("/pending-request")}>Explore pending request</Button>
      </div>
    );
  }
  return (
    <>
      <HelmetHeader title="Accepted Request" />
      <div className="flex flex-col lg:flex-row justify-center items-center md:px-16 gap-10 mt-10">
        {currBuilderAcceptedRequest?.map((request) => {
          return <PropertyRequestCard key={request.id} request={request} showButtons={false} />;
        })}
      </div>
    </>
  );
};

export default AcceptedRequests;
