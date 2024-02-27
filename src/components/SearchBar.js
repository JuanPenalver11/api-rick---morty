import React from "react";

const SearchBar = ({ handleSearch, setPageNumber }) => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Enter Character Name"
        aria-label="Search"
        onChange={(e) => {
          setPageNumber(1);
          handleSearch(e.target.value);
        }}
       
      />
    </form>
  );
};

export default SearchBar;
