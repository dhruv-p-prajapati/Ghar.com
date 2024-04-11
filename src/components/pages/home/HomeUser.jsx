import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LandingComponent from "../../common/LandingComponent";
import CarouselComponent from "../../common/CarouselComponent";
import { HelmetHeader, PropertyCard } from "../../common";
import { getAllProperties } from "../../../utils/axiosGloableInstance";

const HomeUser = () => {
  const { user } = useSelector((state) => state.role);

  const [properties, setProperties] = useState([]);

  const recentlyAddedProperties = properties.reverse().slice(0, 5);

  const title = (
    <p>
      Welcome back, <span className="text-4xl font-bold italic">{user?.name}</span>
    </p>
  );
  const description = (
    <p>
      Discover hidden gems, unlock exclusive deals, and find your perfect home with Ghar.com. Whether you're looking to buy or rent, we're here to
      guide you every step of the way.
    </p>
  );

  const fetchProperties = async () => {
    const { data } = await getAllProperties();
    setProperties(data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);
  return (
    <>
      <HelmetHeader title="Home | User" />
      <LandingComponent title={title} description={description} />

      <div className="py-12 px-5 flex justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:px-10 gap-5">
          <div className="md:w-1/2 md:mr-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Users Buying Properties</h2>
            <p className="text-gray-700 mb-4">
              Embark on an exciting journey to find your dream property among our diverse range of listings, meticulously curated to cater to every
              preference and budget. With advanced search filters and detailed property descriptions, locating your ideal home has never been more
              accessible.
            </p>
            <p className="text-gray-700 mb-4">
              Explore various neighborhoods, amenities, and property features to discover the perfect match for your lifestyle. Whether you're seeking
              a cozy starter home or a luxurious estate, each listing is thoroughly vetted to ensure quality and satisfaction, empowering you to make
              a confident investment decision.
            </p>
          </div>
          <div className="md:w-1/3">
            <img src="/images/sell.gif" alt="Buyer" className="w-[350px] rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      <div className="md:px-10 my-5 md:my-12 bg-[#f5f5f5] py-5">
        <div className="text-2xl text-center mb-5 flex justify-center flex-col">
          <span className="font-bold">Recently Added</span>
          <span className="text-base">Discover Our Recently Added Properties</span>
        </div>
        <CarouselComponent>
          {recentlyAddedProperties.map((property) => {
            return <PropertyCard key={property.id} property={property} />;
          })}
        </CarouselComponent>
      </div>

      <div className="py-12 px-5 flex justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:px-10 gap-5">
          <div className="md:w-1/2 md:mr-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Users Renting Properties</h2>
            <p className="text-gray-700 mb-4">
              Embark on a journey to find your ideal living space among our diverse range of rental properties, meticulously curated to cater to every
              lifestyle and budget. With advanced search filters and detailed property listings, locating your dream rental home has never been
              easier.
            </p>
            <p className="text-gray-700 mb-4">
              Browse through a variety of neighborhoods, amenities, and rental rates to discover the perfect match for your preferences. From charming
              apartments to spacious houses, each property is vetted to meet our quality standards, ensuring that you find a home that aligns with
              your expectations.
            </p>
          </div>
          <div className="md:w-1/3">
            <img src="/images/rent.gif" alt="Renter" className="w-[350px] rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeUser;
