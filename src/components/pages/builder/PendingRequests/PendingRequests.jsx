import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllRequests } from "../../../../utils/axiosGloableInstance";
import { HelmetHeader, PropertyRequestCard } from "../../../common";

const PendingRequests = () => {
  const { builder } = useSelector((state) => state.role);
  const [requests, setRequests] = useState([]);

  const currBuilderPendingRequest = requests.filter((request) => request.builderId === builder.id && request.requestStatus === "pending");

  const fetchData = async () => {
    const { data } = await getAllRequests();
    setRequests(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (currBuilderPendingRequest.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <p className="text-lg font-semibold">No pending requests for review at the moment.</p>
        <p className=" text-gray-600">Check back later for any new requests.</p>
      </div>
    );
  }

  return (
    <>
      <HelmetHeader title="Pending Requests" />
      <div className="flex flex-col lg:flex-row justify-center items-center md:px-16 gap-10 mt-10">
        {currBuilderPendingRequest?.map((request) => {
          return <PropertyRequestCard key={request.id} request={request} />;
        })}
      </div>
    </>
  );
};

export default PendingRequests;
