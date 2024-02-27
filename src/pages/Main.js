
// this page renders more of our components.

import React from "react";
import { useState, useEffect } from "react";
// useState required.

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import FilterAccordion from "../components/Filter/FilterAccordion";
//components we'll use.

const Main = () => {

  const [fetchedData, setData] = useState([]);
  //useState related to useEffect. This useState is an empty array. It will hold the information obtain from the 
  // url below provided
  const [search, setSearch] = useState("");
  //this use state will work in partnership with SearchBar component. 
  // this useState will update setSearch and wil modify search that will also modify the url. 
  const [pageNumber, setPageNumber] = useState(1);
   //this use state will work in partnership with Pagination component. 
  // this useState will update setPageNumber and wil modify pageNumber that will also modify the url. 
  const [status, setStatus] = useState("");
   //this use state will work in partnership with FilterAccordion component. 
  // this useState will update setStatus and will modifys status that will also modify the url. 
  const [specie, setSpecie] = useState("");
   //this use state will work in partnership with FilterAccordion component. 
  // this useState will update setSpecie and will modifys specie that will also modify the url. 
  const [gender, setGender] = useState("");
   //this use state will work in partnership with FilterAccordion component. 
  // this useState will update setGender and will modifys gender that will also modify the url. 

  let { info, results } = fetchedData;

  //from fetchData we will obtain two objects info and results. 
  // it is important to destructure fechedData to then have an easier access to the information

  const URL_API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&gender=${gender}&species=${specie}&status=${status}`;

  //url writen  with template literal as page, name, gender, species and status will be modified. 
  useEffect(() => {
    //Asyncrhonous function that will get the data from the url above. 
    async function getData() {
      try {
        const response = await fetch(URL_API);

        if (!response.ok) {
          throw Error("Response not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("Error", error);
      }
    }
    getData();
  }, [URL_API]);
  // this useEffect will be called everytime the url is modified. 

  // handlers that will be managing the state of our functions passed through 
  //  different components. 

  const handleSearch = (e) => {
    setSearch(e);
  };

  const handleGender = (e) => {
    setGender(e);
  };

  const handleSpecie = (e) => {
    setSpecie(e);
  };

  const handleStatus = (e) => {
    setStatus(e);
  };

  return (
    // addind our components to the main page
    <div className="container">
      <SearchBar handleSearch={handleSearch} setPageNumber={setPageNumber} />
      <div className="row">
        <div className="col-3">
          <FilterAccordion
            handleGender={handleGender}
            handleSpecie={handleSpecie}
            handleStatus={handleStatus}
            setPageNumber={setPageNumber}
          />
        </div>
        <div className="col-7">
          <div className="row justify-content-center">
            <Card results={results} />
          </div>
        </div>
      </div>
      <Pagination
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        info={info}
      />
    </div>
  );
};

export default Main;
