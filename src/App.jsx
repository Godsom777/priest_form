import React from "react";
import Form from "./form.jsx";

function App() {
  return (
    <div className="App">
      <div className="app-bar">
        <img className="logo" src="/assets/Logo.png" alt="Image 1" />
        <img src="/assets/BGtext.png" alt="Image 2" />
      </div>
      <h2 style={{ color: "white" }}>Please fill the Form Accordingly</h2>
      <Form />
    </div>
  );
}

export default App;
