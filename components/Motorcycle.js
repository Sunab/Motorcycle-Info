import React, { useState } from "react";
import "./style.css";
import Motor from "../components/motorApi";
import MotorCard from "./MotorCard";
const Motorcycle = () => {
  const [motorData, setMotorData] = useState(Motor);
  const filterItem = (category) => {
    const updatedList = Motor.filter((currentElement) => {
      return currentElement.category === category;
    });
    setMotorData(updatedList);
  };
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem("Bajaj")}
          >
            Bajaj
          </button>
          <button className="btn-group__item" onClick={() => filterItem("TVS")}>
            TVS
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("Yamaha")}
          >
            Yamaha
          </button>
          <button
            className="btn-group__item"
            onClick={() => setMotorData(Motor)}
          >
            All
          </button>
        </div>
      </nav>
      <MotorCard motorData={motorData} />
    </>
  );
};
export default Motorcycle;
