import React from "react";
import { useSelector } from "react-redux";
import LandingComponent from "../../common/LandingComponent";

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
    <div>
      <LandingComponent title={title} description={description} />
    </div>
  );
};

export default HomeBuilder;
