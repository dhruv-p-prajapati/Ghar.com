import React from "react";
import { useSelector } from "react-redux";
import LandingComponent from "../../common/LandingComponent";
import { Button, HelmetHeader } from "../../common";

const HomeBuilder = () => {
  const { builder } = useSelector((state) => state.role);

  const title = (
    <p>
      Welcome, <span className="text-4xl font-bold italic">{builder?.name}</span> to Ghar.com Builder Platform!
    </p>
  );
  const description = (
    <p>
      List your properties on Ghar.com for rent or sale, connecting with a vast audience of renters and buyers.Utilize our platform's tools to
      efficiently manage listings and maximize your property's potential.
    </p>
  );
  return (
    <>
      <HelmetHeader title="Home | Builder" />
      <LandingComponent title={title} description={description} />
      <div className="mt-10 mb-5 text-center px-2">
        <h1 className="text-xl md:text-3xl font-semibold text-gray-800">Discover Endless Opportunities</h1>
        <p className="text-gray-600 mt-2 text-sm">Your Gateway to Building and Selling Dreams</p>
      </div>

      <div className="py-12 px-5 flex justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:px-10 gap-5">
          <div className="md:w-1/2 md:mr-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">List Your Property for Free</h2>
            <p className="text-gray-700 mb-4">
              Showcase your properties to potential buyers without any listing fees. Our platform offers you the opportunity to add your properties
              for free, expanding your reach and maximizing your chances of a successful sale. With a simple and user-friendly interface, listing your
              properties has never been easier.
            </p>
            <p className="text-gray-700 mb-4">
              Take advantage of our platform to connect with interested buyers and showcase the unique features of your properties. Whether you're a
              seasoned developer or a first-time seller, our platform empowers you to reach your target audience and achieve your sales goals without
              any upfront costs.
            </p>
            <Button variant="primaryOutline">Add new property</Button>
          </div>
          <div className="md:w-1/3">
            <img src="/images/BasicDetails.gif" alt="Add Property" className="w-[350px] rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      <div className="py-12 px-5 flex justify-center">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center md:px-10 gap-5">
          <div className="md:w-1/2 md:ml-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Your Listings with Ease</h2>
            <p className="text-gray-700 mb-4">
              As a builder, take control of your listings effortlessly. Our platform provides you with the tools to view and update your properties
              seamlessly. Whether it's adding new listings, updating property details, or monitoring performance metrics, managing your portfolio has
              never been more convenient.
            </p>
            <p className="text-gray-700 mb-4">
              Explore your listings, analyze market trends, and make informed decisions to optimize your property portfolio. With intuitive features
              and insightful analytics, stay ahead in the competitive real estate market and maximize the potential of your projects.
            </p>
            <Button variant="primaryOutline">Manage listings</Button>
          </div>
          <div className="md:w-1/3">
            <img src="/images/PropertyDetail.gif" alt="Builder Management" className="w-[350px] rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBuilder;
