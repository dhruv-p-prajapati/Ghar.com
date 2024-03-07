import React from "react";
import { Button } from "../../common";
import "./home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const viteCommand = "npm create vite@latest YOUR_PROJECT_TITLE -- --template react";
  const theme = useSelector((state) => state.theme);

  return (
    <div className="home">
      <h1>Home</h1>
      <br />
      <p>This App is created using Vite app with command given below</p>
      <h3>{viteCommand}</h3>
      <br />
      Current Theme :- <span className={`${theme ? "light" : "dark"}`}>{theme ? "Light" : "Dark"}</span>
      <br />
      <br />
      <Button />
    </div>
  );
};

export default Home;
