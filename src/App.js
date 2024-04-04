import React, { useState } from "react";
import "./output.css";
import Logo from "./components/Logo";
import Greetings from "./components/Greetings";
import Searchbar from "./components/Searchbar";
import Currentweather from "./components/Currentweather";
import Weatherdetail from "./components/Weatherdetail";
import { weatherAPI } from "./api";
import axios from "axios";

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleOnSearch = (searchData) => {
    setSelectedCity(searchData.label);
    const [lat, lon] = searchData.value.split(" ");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPI}&units=metric`
      )
      .then((response) => {
        setCurrentWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data: ", error);
        setCurrentWeatherData(null); // Hata durumunda veriyi temizle
      });
  };

  return (
    <div className="font-nunito">
      <div className="bg-background h-screen">
        <Logo />
        {(!currentWeatherData || !selectedCity) && ( // Veri veya seçili şehir yoksa Greetings bileşenini göster
          <Greetings />
        )}
        <Searchbar onSearchChange={handleOnSearch} />
        {currentWeatherData &&
          selectedCity && ( // Veri ve seçili şehir varsa Currentweather bileşenini göster
            <Currentweather data={currentWeatherData} city={selectedCity} />
          )}
      </div>
    </div>
  );
}

export default App;
