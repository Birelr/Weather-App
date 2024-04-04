import React from "react";
import sens from "../Assets/Icons/Type=thermometer-simple-light.svg";
import rain from "../Assets/Icons/Type=cloud-rain-light.svg";
import wind from "../Assets/Icons/Type=wind-light.svg";
import sun from "../Assets/Icons/Type=sun-dim-light.svg";
import drop from "../Assets/Icons/Type=drop-light.svg";

function Weatherdetail() {
  return (
    <div className=" pb-12 mt-5 ">
      <div className=" mt-7 h-80 w-96 bg-custom-blue-transparent m-auto rounded-md flex flex-col justify-center items-center text-custom-purple2 fill-custom-purple2">
        <div className="flex flex-row justify-between w-full p-4 ">
          <div>
            <img src={sens} alt="" className="" />
          </div>
          <p>Thermal Sensation</p>
          <p>26</p>
        </div>
        <div className="flex flex-row justify-between w-full p-4 ">
          <div>
            <img src={rain} alt="" />
          </div>
          <p> Probability Of Rain</p>
          <p>26</p>
        </div>
        <div className="flex flex-row justify-between w-full p-4 ">
          <div>
            <img src={wind} alt="" />
          </div>
          <p>Wind Speed</p>
          <p>26</p>
        </div>
        <div className="flex flex-row justify-between w-full p-4">
          <div>
            <img src={drop} alt="" />
          </div>
          <p>Air Humidity</p>
          <p>26</p>
        </div>
        <div className="flex flex-row justify-between w-full p-4">
          <div>
            <img src={sun} alt="" />
          </div>
          <p>UV Index</p>
          <p>26</p>
        </div>
      </div>
    </div>
  );
}

export default Weatherdetail;
