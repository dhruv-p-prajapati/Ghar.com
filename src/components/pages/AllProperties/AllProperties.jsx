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
  }, [properties]);

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
        return <PropertyCard property={property} key={property.id} />;
      })}
    </div>
  );
};

export default AllProperties;
