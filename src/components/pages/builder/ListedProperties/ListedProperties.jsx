import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllProperties } from "../../../../utils/axiosGloableInstance";
import { Button, PropertyCard } from "../../../common";

const ListedProperties = () => {
  const navigate = useNavigate();

  const { builder } = useSelector((state) => state.role);

  const [properties, setProperties] = useState([]);

  const listedProperties = properties?.filter((property) => builder.listedProperties.includes(property.id));

  useEffect(() => {
    (async () => {
      const { data } = await getAllProperties();
      setProperties(data);
    })();
  }, []);

  if (listedProperties.length === 0) {
    return (
      <div className="text-center mt-8">
        <h2 className="text-lg font-semibold mb-2">You haven't listed any properties yet.</h2>
        <p className="text-gray-600 mb-4">Start listing your properties now to reach a wider audience!</p>
        <Button onClick={() => navigate("/create-property")}>Start Listing Properties</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center my-10">
      {listedProperties.map((property) => {
        return <PropertyCard property={property} key={property.id} />;
      })}
    </div>
  );
};

export default ListedProperties;
