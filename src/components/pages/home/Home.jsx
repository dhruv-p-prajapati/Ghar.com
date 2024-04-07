import React from "react";
import { Button, Input, RadioButton } from "../../common";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import LandingComponent from "../../common/LandingComponent";

const Home = () => {
  const title = <p>Welcome to Ghar.com</p>;
  const description = (
    <p>
      Discover a wide range of rental and sale properties on Ghar.com. Explore listings tailored to your needs and preferences, and unlock
      opportunities to find your perfect home or investment. Start your property search journey today with Ghar.com!
    </p>
  );
  return (
    <div>
      <LandingComponent title={title} description={description} />
    </div>
  );
};

export default Home;
