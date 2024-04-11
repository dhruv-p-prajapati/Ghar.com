import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllProperties } from "../../../../utils/axiosGloableInstance";
import { Button, HelmetHeader, Pagination, PropertyCard } from "../../../common";

const SavedProperties = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.role);

  const [properties, setProperties] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const limit = 2;

  const savedProperties = properties?.filter((property) => user.savedProperties.includes(property.id));

  const totalPages = Math.ceil(savedProperties?.length / limit);

  const savedPropertiesToShow = () => {
    return savedProperties?.slice((currPage - 1) * limit, currPage * limit).reverse();
  };

  const fetchData = async () => {
    const { data } = await getAllProperties();
    setProperties(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (savedPropertiesToShow()?.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <h2 className="text-lg font-semibold">You haven't saved any properties yet.</h2>
        <p className="text-gray-600 mb-2">Explore our listings and save properties you're interested in for quick access later.</p>
        <Button onClick={() => navigate("/all-properties")}>Explore properties</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <HelmetHeader title="Saved Properties" />
      <div className="flex flex-col gap-10 justify-center items-center my-10 lg:min-h-[70vh]">
        {savedPropertiesToShow()?.map((property) => {
          return <PropertyCard property={property} key={property.id} />;
        })}
      </div>

      <div>
        <Pagination currPage={currPage} setCurrPage={setCurrPage} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default SavedProperties;
