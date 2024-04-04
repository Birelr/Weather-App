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
import snowy from "../Assets/Weather/snow.svg";

function Currentweather({ data, city }) {
  let weatherIcon;
  let weatherDescription;
  let temperature;
  let maxTemperature;
  let minTemperature;
  let countryCode;
  let cityName;

  console.log(data);
  // Veri varsa, verileri değişkenlere atayalım
  if (data) {
    weatherDescription = data.weather[0].description;
    temperature = Math.round(data.main.temp);
    maxTemperature = Math.round(data.main.temp_max);
    minTemperature = Math.round(data.main.temp_min);

    // Hava durumu ikonunu belirleme
    switch (data.weather[0].main) {
      case "Clear":
        weatherIcon = clearday;
        break;
      case "Clouds":
        weatherIcon = cloudday;
        break;
      case "Rain":
        weatherIcon = rainday;
        break;
      case "Thunderstorm":
        weatherIcon = stormday;
        break;
      case "Snow":
        weatherIcon = snowy;
        break;
      default:
        weatherIcon = clearday;
    }
  }

  return (
    <div className="text-white mt-10">
      <div className="current-weather-card h-80 w-96 bg-custom-blue-transparent m-auto rounded-md flex justify-center items-center">
        <div className="weather-detail rounded-lg h-72 w-90 bg-clearnight flex flex-col justify-between">
          <div className="text-left pl-4 pt-4">
            <p className="text-4xl font-bold mb-2">{city}</p>
            <p className=" text-xl  font-extralight">{weatherDescription}</p>
          </div>
          <div className="flex flex-row justify-end items-center gap-1">
            <div className=" mr-20">
              <p className=" text-4xl font-bold">{temperature}°</p>
              <p className=" text-lg font-thin">
                {maxTemperature}°/{minTemperature}°
              </p>
              <p>{weatherDescription}</p>
            </div>
            <div className="">
              <img
                src={weatherIcon}
                alt={weatherDescription}
                className="w-150 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currentweather;
