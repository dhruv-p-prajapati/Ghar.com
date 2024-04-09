import React, { useEffect, useState } from "react";
import { getAllProperties } from "../../../../utils/axiosGloableInstance";
import { PropertyCard } from "../../../common";

const ReviewRequest = () => {
  const [properties, setProperties] = useState([]);

  const reviewPendingPrpperty = properties?.filter((property) => property.verifyStatusAdmin === false);

  useEffect(() => {
    (async () => {
      const { data } = await getAllProperties();
      setProperties(data);
    })();
  }, [properties]);

  if (reviewPendingPrpperty.length === 0) {
    return (
      <div className="text-center mt-8">
        <h2 className="text-lg font-semibold mb-2">No properties are pending for review.</h2>
        <p className="text-gray-600">Check back later or explore other tasks.</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center my-10">
        {reviewPendingPrpperty.map((property) => {
          return <PropertyCard property={property} key={property.id} />;
        })}
      </div>
    </>
  );
};

export default ReviewRequest;
