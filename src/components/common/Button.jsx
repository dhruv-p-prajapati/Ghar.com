import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/actions/ThemeAction";

const Button = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);

  const handleToggleMode = () => {
    dispatch(toggleTheme(theme));
  };
  return (
    <button
      className="py-1 px-2 border-2 border-black rounded-md transition-all duration-300 hover:bg-black hover:text-white"
      onClick={handleToggleMode}>
      Change Theme
    </button>
  );
};

export default Button;
