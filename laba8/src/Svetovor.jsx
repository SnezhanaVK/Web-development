import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [lightColor, setLightColor] = useState("red");
  const [manPosition, setManPosition] = useState("bottom");

  const handleManMove = () => {
    if (manPosition === "bottom") {
      setManPosition("middle");
      setLightColor("yellow");
    } else if (manPosition === "middle") {
      setManPosition("top");
      setLightColor("green");
    } else {
      setManPosition("bottom");
      setLightColor("red");
    }
  };

  return (
    <div className="App">
      <div className="traffic-light">
        <div
          className={`light ${lightColor}`}
          onClick={handleManMove}
        ></div>
        <div className={`man ${manPosition}`}></div>
      </div>
    </div>
  );
};

export default App;