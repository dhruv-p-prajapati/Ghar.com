import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllRequests } from "../../../utils/axiosGloableInstance";
import { PropertyRequestCard } from "../../common";

const PendingRequests = () => {
  const { builder } = useSelector((state) => state.role);
  const [requests, setRequests] = useState([]);

  const currBuilderPendingRequest = requests.filter((request) => request.builderId === builder.id && request.requestStatus === "pending");

  useEffect(() => {
    (async () => {
      const { data } = await getAllRequests();
      setRequests(data);
    })();
  }, []);

  if (currBuilderPendingRequest.length === 0) {
    return (
      <div className="text-center text-secondary">
        <p className="mb-1">No pending requests for review at the moment.</p>
        <p className="text-sm text-gray-600">Check back later for any new requests.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:px-16 gap-10 mt-10">
      {currBuilderPendingRequest?.map((request) => {
        return <PropertyRequestCard key={request.id} request={request} />;
      })}
    </div>
  );
};

export default PendingRequests;
