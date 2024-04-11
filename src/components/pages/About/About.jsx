import React from "react";

const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-20 lg:p-20 text-secondary">
      <div className="w-screen p-5 lg:w-1/2">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">Welcome to our premier house renting and selling platform!</p>
        <p className="mb-4">
          At <span className="italic text-black font-bold">Ghar.com</span>, we are dedicated to providing a seamless experience for both property
          buyers and sellers. Our platform bridges the gap between builders and potential homeowners, ensuring transparency, trust, and efficiency in
          every transaction.
        </p>
        <p className="mb-4">
          For builders, we offer a user-friendly interface to list properties for sale or rent. With detailed descriptions, high-quality images, and
          accurate pricing, showcasing your properties has never been easier.
        </p>
        <p className="mb-4">
          For users, we provide a diverse range of properties to choose from, each verified and curated to meet your specific needs. Whether you're
          searching for your dream home or a lucrative investment opportunity, we've got you covered.
        </p>
        <p className="mb-4">
          Our dedicated team of administrators ensures the integrity of our platform by verifying properties and resolving disputes promptly. We're
          committed to enhancing the user experience, continuously improving our features, and providing unparalleled support every step of the way.
        </p>
        <p className="mb-4">
          Experience the convenience and reliability of <span className="italic text-black font-bold">Ghar.com</span>. Find your perfect home or
          investment opportunity today!
        </p>
      </div>
      <div>
        <img src="/images/AboutUs.gif" alt="About Us" />
      </div>
    </div>
  );
};

export default About;
