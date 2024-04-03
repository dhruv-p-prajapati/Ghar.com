import React from "react";
import { Button } from "../../common";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ErrorPage = () => {
  const navigate = useNavigate();
  const { isAuth, user, builder, admin } = useSelector((state) => state.role);

  const handleClick = () => {
    user ? navigate("/") : builder ? navigate("/builder/home") : admin ? navigate("/admin/home") : navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img src="/images/Error.gif" alt="Error image" />
      <Button variant="primary" onClick={handleClick}>
        Go To Home
      </Button>
    </div>
  );
};

export default ErrorPage;
