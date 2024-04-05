import React from "react";
import { useSelector } from "react-redux";
import PropertyCard from "../../common/PropertyCard";
import { Button } from "../../common";
import { useNavigate } from "react-router";

const SavedProperties = () => {
  const { user } = useSelector((state) => state.role);
  const navigate = useNavigate();

  if (user.savedProperties.length === 0) {
    return (
      <div className="flex flex-col gap-1 justify-center items-center h-[70vh]">
        <h2 className="text-lg font-semibold">You haven't saved any properties yet.</h2>
        <p className="text-gray-600 mb-2">Explore our listings and save properties you're interested in for quick access later.</p>
        <Button onClick={() => navigate("/all-properties")}>Explore properties</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center my-10">
      {user?.savedProperties?.map((property) => {
        return <PropertyCard property={property} key={property.id} />;
      })}
    </div>
  );
};

export default SavedProperties;
