import React from "react";
import "./output.css";
import Logo from "./components/Logo";
import Greetings from "./components/Greetings";
import Searchbar from "./components/Searchbar";
import Currentweather from "./components/Currentweather";
import Weatherdetail from "./components/Weatherdetail";

function App() {
  const handleOnSearch = (searchData) => {
    console.log(searchData);
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
