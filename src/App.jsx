import React from 'react'

const App = () => {
  const viteCommand = "npm create vite@latest YOUR_PROJECT_TITLE -- --template react";

  return (
    <>
      <p>This App is created using Vite app with command given below</p>
      <h3>{viteCommand}</h3>
    </>
  )
}

export default App