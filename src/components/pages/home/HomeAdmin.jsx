import React from "react";
import LandingComponent from "../../common/LandingComponent";

const HomeAdmin = () => {
  const title = <p>Welcome to the Ghar.com Admin Panel!</p>;
  const description = (
    <p>
      Effortlessly handle property verification, user management, and property CRUD tasks with our user-friendly interface. Simplify your property
      management duties with Ghar.com
    </p>
  );
  return (
    <div>
      <LandingComponent title={title} description={description} />
    </div>
  );
};

export default HomeAdmin;
