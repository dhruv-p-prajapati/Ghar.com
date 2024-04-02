import React from "react";
import { Button } from "../../common";
import { useSelector } from "react-redux";

const Home = () => {
  const viteCommand =
    "npm create vite@latest YOUR_PROJECT_TITLE -- --template react";
  const theme = useSelector((state) => state.theme);

  return (
    <div className="dark:flex">
      <h1>Home</h1>
      <br />
      <p>This App is created using Vite app with command given below</p>
      <h3>{viteCommand}</h3>
      <br />
      Current Theme :-{" "}
      <span
        className={`${
          theme
            ? "text-black border-2 border-black px-1 py-2"
            : "bg-black text-white border-2 border-black px-1 py-2"
        }`}
      >
        {theme ? "Light" : "Dark"}
      </span>
      <br />
      <br />
      <Button />
    </div>
  );
};

export default Home;
