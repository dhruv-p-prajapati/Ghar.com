import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllCategories, getAllProperties } from "../../../../utils/axiosGloableInstance";
import { Button, FilterComponent, HelmetHeader, Pagination, PropertyCard, SearchComponent, SortComponent } from "../../../common";
import useSearch from "../../../../utils/customHooks/useSearch";
import useFilter from "../../../../utils/customHooks/useFilter";
import useSort from "../../../../utils/customHooks/useSort";

const ListedProperties = () => {
  const navigate = useNavigate();

  const { builder } = useSelector((state) => state.role);

  const [properties, setProperties] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const limit = 2;

  const listedProperties = properties?.filter((property) => builder.listedProperties.includes(property.id));

  const [query, setQuery, searchedProperties] = useSearch(listedProperties.reverse(), "name", "address.city");
  const [
    propertyType,
    setPropertyType,
    subPropertyType,
    setSubPropertyType,
    lookingFor,
    setLookingFor,
    verifiedByAdmin,
    setVerifiedByAdmin,
    filteredProperty
  ] = useFilter(searchedProperties);

  const [sortBy, setSortBy, descending, setDescending, sortedProperties] = useSort(filteredProperty);

  const totalPages = Math.ceil(sortedProperties?.length / limit);

  const propertiesToShow = () => {
    return sortedProperties?.slice((currPage - 1) * limit, currPage * limit);
  };

  const fetchData = async () => {
    const { data: propertiesData } = await getAllProperties();
    const { data: categoryData } = await getAllCategories();
    setProperties(propertiesData);
    setCategories(categoryData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (listedProperties.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <h2 className="text-lg font-semibold mb-2">You haven't listed any properties yet.</h2>
        <p className="text-gray-600 mb-4 text-center">Start listing your properties now to reach a wider audience!</p>
        <Button onClick={() => navigate("/create-property")}>Start Listing Properties</Button>
      </div>
    );
  }

  return (
    <>
      <HelmetHeader title="Listed Properties" />
      <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-10 my-10 w-screen ">
        <div
          className={
            showFilter &&
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-screen h-screen z-50 bg-[rgba(0,0,0,0.2)]"
          }>
          <div className={`${showFilter ? "flex rounded-md" : "hidden"} xl:flex flex-col xl:max-w-80 bg-white py-10 px-5 w-[min(90vw,520px)] xl:p-0`}>
            <SearchComponent query={query} setQuery={setQuery} setCurrPage={setCurrPage} />

            <FilterComponent
              propertyType={propertyType}
              setPropertyType={setPropertyType}
              subPropertyType={subPropertyType}
              setSubPropertyType={setSubPropertyType}
              lookingFor={lookingFor}
              setLookingFor={setLookingFor}
              verifiedByAdmin={verifiedByAdmin}
              setVerifiedByAdmin={setVerifiedByAdmin}
              categories={categories}
              setCurrPage={setCurrPage}
            />

            <SortComponent sortBy={sortBy} setSortBy={setSortBy} descending={descending} setDescending={setDescending} setCurrPage={setCurrPage} />

            {showFilter && (
              <Button className="mt-3" onClick={() => setShowFilter(!showFilter)}>
                Apply Filters
              </Button>
            )}
          </div>
        </div>

        <div className="xl:hidden">
          <Button onClick={() => setShowFilter(!showFilter)}>Choose Filters</Button>
        </div>

        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="lg:min-h-[70vh]">
            {propertiesToShow()?.length === 0 ? (
              <div className="flex flex-col items-center w-[min(85vw,850px)]">
                <div>
                  <img src="/images/Notfound.gif" alt="Not found" />
                </div>
                <h2 className="text-lg font-semibold mb-2">No matching properties found !</h2>
              </div>
            ) : (
              propertiesToShow()?.map((property) => {
                return <PropertyCard property={property} key={property.id} />;
              })
            )}
          </div>

          <div>
            <Pagination currPage={currPage} setCurrPage={setCurrPage} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListedProperties;
