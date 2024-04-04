import React from "react";
import "./output.css";
import Logo from "./components/Logo";
import Greetings from "./components/Greetings";
import Searchbar from "./components/Searchbar";
import Currentweather from "./components/Currentweather";
import Weatherdetail from "./components/Weatherdetail";
import { useState } from "react";
import { weatherAPI } from "./api";
import axios from "axios";

function App() {
  const [currentweather, setCurrentweather] = useState(null);
  const handleOnSearch = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPI}&units=metric`
      )
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="font-nunito">
      <div className=" bg-background h-full">
        <Logo />
        <Greetings />
        <Searchbar onSearchChange={handleOnSearch} />
        <Currentweather />
        <Weatherdetail />
      </div>
    </div>
  );
}

export default App;
