import React from "react";
import "./output.css";
import Logo from "./components/Logo";
import Greetings from "./components/Greetings";
import Searchbar from "./components/Searchbar";
import Currentweather from "./components/Currentweather";

function App() {
  const handleOnSearch = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="font-nunito">
      <div className=" bg-background h-screen">
        <Logo />
        <Greetings />
        <Searchbar onSearchChange={handleOnSearch} />
        <Currentweather />
      </div>
    </div>
  );
}

export default App;
