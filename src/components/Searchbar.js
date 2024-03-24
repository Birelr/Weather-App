import React from "react";

function Searchbar() {
  return (
    <div className="">
      <div className=" flex justify-center items-center mt-16">
        <input
          type="text"
          placeholder="Search Location"
          className=" p-3  bg-blue-dark rounded-md w-1/2"
        />
        <button className=" p-3 bg-blue-light text-white rounded-md ml-2 ">
          Search
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
