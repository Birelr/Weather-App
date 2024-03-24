import React from "react";

import clearday from "../Assets/Weather/clearday.svg";
import clearnight from "../Assets/Weather/clearnight.svg";
import cloudday from "../Assets/Weather/cloudyday.svg";
import cloudsnight from "../Assets/Weather/cloudynight.svg";
import fewcloudsday from "../Assets/Weather/fewday.svg";
import fewcloudsnight from "../Assets/Weather/fewnight.svg";
import rainday from "../Assets/Weather/rainday.svg";
import rainnight from "../Assets/Weather/rainnight.svg";
import stormday from "../Assets/Weather/stormday.svg";
import stormnight from "../Assets/Weather/stormnight.svg";

function Currentweather() {
  return (
    <div className="text-white mt-10">
      <div className="current-weather-card h-80 w-96 bg-custom-blue-transparent m-auto rounded-md flex justify-center items-center">
        <div className="weather-detail rounded-lg h-72 w-90 bg-clearnight flex flex-col justify-between">
          <div className="text-left pl-4 pt-4">
            <p className="text-4xl font-bold mb-2">Izmir, TR</p>
            <p className=" text-xl  font-extralight">Clear</p>
          </div>
          <div className="flex flex-row justify-end items-center gap-1">
            <div className=" mr-20">
              <p className=" text-4xl font-bold">22°</p>
              <p className=" text-lg font-thin">22°/10°</p>
              <p>few clouds</p>
            </div>
            <div className="">
              <img src={clearnight} alt="" className="w-150" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currentweather;
