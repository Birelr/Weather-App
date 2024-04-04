import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "rgb(30, 30, 40)",
    borderRadius: "0.5rem",
    fontWeight: "Medium",
    border: "none",
    color: "rgb(255, 255, 255)",
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "rgb(59, 59, 82)",
    border: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#3699FF" : null,
    color: state.isFocused ? "white" : null,
  }),
};

function Searchbar({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {};

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      className=" w-80 lg:min-w-96 m-auto  text-custom-purple mt-16  "
      styles={customStyles}
      placeholder="Search location"
      value={search}
      debounceTimeout={700}
      onChange={handleOnChange}
      noOptionsMessage={() => "This city was not found"}
      loadOptions={loadOptions}
    />
  );
}

export default Searchbar;
