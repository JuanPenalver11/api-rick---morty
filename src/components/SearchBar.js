import React from "react";
import '../styles/SearchBar.css'

const SearchBar = ({ handleSearch, setPageNumber }) => {
  //props obtained though out main.js
  return (
    <form className="searchBar d-flex my-4" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Enter Character Name"
        aria-label="Search"
        onChange={(e) => {
          setPageNumber(1);
          handleSearch(e.target.value);
        }}

        // input searchbar. It will respond to on change effect. 
        //this onchange is waiting for an event to happen. That event, which value is being targeted, 
        // will modify setSearch though out handleSearch. 

        // we also want setPageNumber to be updated to one. Because, once the value has been obtained, 
        // we want our pagination to render the data obtained from page 1. 
      />
    </form>
  );
};

export default SearchBar;
