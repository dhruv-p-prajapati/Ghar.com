import React, { useEffect, useState } from "react";
import LandingComponent from "../../common/LandingComponent";
import { Button, PropertyCard } from "../../common";
import { getAllProperties } from "../../../utils/axiosGloableInstance";
import CarouselComponent from "../../common/CarouselComponent";

const HomeAdmin = () => {
  const [properties, setProperties] = useState([]);
  const recentlyAddedProperties = properties.reverse().slice(0, 5);

  const title = <p>Welcome to the Ghar.com Admin Panel!</p>;
  const description = (
    <p>
      Effortlessly handle property verification, user management, and property CRUD tasks with our user-friendly interface. Simplify your property
      management duties with Ghar.com
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
    <div>
      <LandingComponent title={title} description={description} />
      <div className="mt-10 mb-5 text-center px-2">
        <h1 className="text-xl md:text-3xl font-semibold text-gray-800">Empower Your Real Estate Vision</h1>
        <p className="text-gray-600 mt-2 text-sm">Streamline Your Property Management Journey with Confidence</p>
      </div>

      <div className="py-12 px-5 flex justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:px-10 gap-5">
          <div className="md:w-1/2 md:mr-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Verify New Properties</h2>
            <p className="text-gray-700 mb-4">
              As an admin, review and verify new properties published by builders on our platform. Ensure that each listing meets our quality
              standards before being showcased to potential buyers. With our intuitive verification process, managing new property submissions has
              never been easier.
            </p>
            <p className="text-gray-700 mb-4">
              Take advantage of our platform to connect with builders and facilitate seamless property verification. Whether it's approving new
              listings, updating property details, or providing feedback, our platform empowers you to maintain the integrity and credibility of our
              property database.
            </p>
            <Button variant="primaryOutline">Review property request</Button>
          </div>
          <div className="md:w-1/3">
            <img src="/images/Building.gif" alt="Verify Property" className="w-[350px] rounded-lg shadow-md" />
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
          <div className="md:w-1/2 md:mr-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage User Accounts</h2>
            <p className="text-gray-700 mb-4">
              Admins can efficiently manage user accounts on our platform, ensuring a smooth and secure user experience. From user registration to
              account updates and permissions management, our intuitive interface empowers admins to oversee every aspect of user management with
              ease.
            </p>
            <p className="text-gray-700 mb-4">
              Take control of user accounts, review account activity, and enforce security measures to safeguard user information and platform
              integrity. With advanced user management tools, admins can effectively handle user inquiries, resolve issues, and maintain a positive
              user community.
            </p>
          </div>
          <div className="md:w-1/3">
            <img src="/images/User.gif" alt="User Management" className="w-[350px] rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
