import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LandingComponent from "../../common/LandingComponent";
import { useNavigate } from "react-router-dom";
import { getAllProperties } from "../../../utils/axiosGloableInstance";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropertyCardHome from "../../common/PropertyCardHome";
import { TbHomeSearch } from "react-icons/tb";
import { Button, PropertyCard } from "../../common";
import CarouselComponent from "../../common/CarouselComponent";

const Home = () => {
  const { user, builder, admin } = useSelector((state) => state.role);
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);

  const recentlyAddedProperties = properties.reverse().slice(0, 5);

  const verifiedProperties = properties.filter((property) => property.verifyStatusAdmin === true).slice(0, 5);

  const title = <p>Welcome to Ghar.com</p>;
  const description = (
    <p>
      Discover a wide range of rental and sale properties on Ghar.com. Explore listings tailored to your needs and preferences, and unlock
      opportunities to find your perfect home or investment. Start your property search journey today with Ghar.com!
    </p>
  );

  const fetchProperties = async () => {
    const { data } = await getAllProperties();
    setProperties(data);
  };

  useEffect(() => {
    user !== null ? navigate("/user") : builder !== null ? navigate("/builder") : admin !== null ? navigate("/admin") : navigate("/");

    fetchProperties();
  }, []);
  return (
    <div>
      <LandingComponent title={title} description={description} />

      <div className="mt-10 mb-5 text-center px-2">
        <h1 className="text-xl md:text-3xl font-semibold text-gray-800">Discover Your Ideal Home with Us</h1>
        <p className="text-gray-600 mt-2 text-sm">Where Exceptional Service Meets Unmatched Selection</p>
      </div>

      <div className="py-12 px-5 flex justify-center ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center  md:px-10 gap-5">
          <div className="md:w-1/2 md:mr-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Renters</h2>
            <p className="text-gray-700 mb-4">
              Discover a diverse range of rental properties, from charming apartments to spacious houses, meticulously curated to cater to every
              lifestyle and budget. With advanced search filters and detailed property listings, finding your dream rental home has never been easier.
            </p>
            <p className="text-gray-700 mb-4">
              Browse through a variety of neighborhoods, amenities, and rental rates to pinpoint the perfect match for your preferences.
            </p>
          </div>
          <div className="md:w-1/3">
            <img src="/images/rent.gif" alt="Renter" className="w-[350px] rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      <div className="md:px-10 my-5 md:my-12">
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
        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center md:px-10 gap-5">
          <div className="md:w-1/2 md:ml-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Builders</h2>
            <p className="text-gray-700 mb-4">
              List your property with confidence and reach a vast audience of potential buyers eager to find their next home. Our user-friendly
              platform allows you to showcase your property with stunning photo, comprehensive descriptions, and key features that highlight its
              unique selling points.
            </p>
            <p className="text-gray-700 mb-4">
              With our innovative marketing tools and dedicated support, selling your house has never been more convenient or rewarding.
            </p>
          </div>
          <div className="md:w-1/3">
            <img src="/images/sell.gif" alt="Seller" className="w-[350px] rounded-lg shadow-md gap-5" />
          </div>
        </div>
      </div>

      <div className="md:px-10 my-5 md:my-12">
        <div className="text-2xl text-center mb-5 flex justify-center flex-col">
          <span className="font-bold">Verified by Admin</span>
          <span className="text-base">Your Trusted Source for Authenticated Properties</span>
        </div>
        <CarouselComponent>
          {verifiedProperties.map((property) => {
            return <PropertyCard key={property.id} property={property} />;
          })}
        </CarouselComponent>
      </div>

      <div className="py-12 px-5 flex justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:px-10 gap-5">
          <div className="md:w-1/2 md:mr-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Admins</h2>
            <p className="text-gray-700 mb-4">
              Explore a diverse range of rental properties, from charming apartments to spacious houses, meticulously curated to cater to every
              lifestyle and budget. With advanced search filters and detailed property listings, managing listings for your users has never been
              easier.
            </p>
            <p className="text-gray-700 mb-4">
              Review a variety of neighborhoods, amenities, and rental rates to ensure listings meet quality standards and user expectations.
            </p>
          </div>
          <div className="md:w-1/3">
            <img src="/images/PropertyDetail.gif" alt="Renter" className="w-[350px] rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
