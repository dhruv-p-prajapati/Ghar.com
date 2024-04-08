import React, { useEffect, useState } from "react";
import { getAllProperties, getAllRequests } from "../../../utils/axiosGloableInstance";
import PropertyCard from "../../common/PropertyCard";
import { useSelector } from "react-redux";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [requests, setRequests] = useState([]);

  const { admin } = useSelector((state) => state.role);

  useEffect(() => {
    (async () => {
      const { data } = await getAllProperties();
      setProperties(data);
      const { data: reqData } = await getAllRequests();
      setRequests(reqData);
    })();
  }, []);

  if (properties.length === 0) {
    return (
      <div className="text-center mt-8">
        <h2 className="text-lg font-semibold mb-2">No properties available at the moment.</h2>
        <p className="text-gray-600">Please check back later or explore other listings.</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-10 justify-center items-center my-10">
      {properties.map((property) => {
        if (admin === null && property?.bookedBy?.booked === true) {
          return null;
        }
        return <PropertyCard property={property} key={property.id} requests={requests} />;
      })}
    </div>
  );
};

export default AllProperties;
