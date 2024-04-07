import React from "react";
import { useSelector } from "react-redux";
import LandingComponent from "../../common/LandingComponent";

const HomeUser = () => {
  const { user } = useSelector((state) => state.role);

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
  return (
    <div>
      <LandingComponent title={title} description={description} />
    </div>
  );
};

export default HomeUser;
