import React, { useEffect, useState } from "react";
import { getAllProperties } from "../../../utils/axiosGloableInstance";
import PropertyCard from "../../common/PropertyCard";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getAllProperties();
      setProperties(data);
    })();
  }, []);

  if (properties.length === 0) {
    return <div>No Properties</div>;
  }
  return (
    <div className="flex flex-col gap-10 justify-center items-center my-10">
      {properties.map((property) => {
        return <PropertyCard property={property} key={property.id} />;
      })}
    </div>
  );
};

export default AllProperties;
