import React from "react";
import { Home, Login, Register } from "./components/pages";

const App = () => {
  const viteCommand =
    "npm create vite@latest YOUR_PROJECT_TITLE -- --template react";

  return (
    <>
      <p>This App is created using Vite app with command given below</p>
      <h3>{viteCommand}</h3>
      <Home />
      <Login />
      <Register />
    </>
  );
};

export default App;
