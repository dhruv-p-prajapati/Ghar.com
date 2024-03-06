import React from "react";
import { Home, Login, Register } from "./components/pages";
import { useSelector } from "react-redux";

const App = () => {
  const viteCommand =
    "npm create vite@latest YOUR_PROJECT_TITLE -- --template react";

  const theme = useSelector((state) => state.theme);

  return (
    <>
      <p>This App is created using Vite app with command given below</p>
      <h3>{viteCommand}</h3>
      <Home />
      Current Theme :- <span className={`${theme ? "light" : "dark"}`}>{theme ? "Light" : "Dark"}</span>
    </>
  );
};

export default App;
