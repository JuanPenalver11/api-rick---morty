import React from "react";
import { useState , useEffect } from "react";

import Card from '../components/Card'
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Main = () => {

  const [fetchedData, setData] = useState([]);
  const [search, setSearch] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  

  let {info, results} = fetchedData;
 
 

  const URL_API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(()=>{
    async function getData(){
      try{
        const response = await fetch(URL_API);

        if(!response.ok){
          throw Error('Response not ok')
        }
        const data = await response.json();
        setData(data)
      }catch(error){
        console.log('Error', error)
      }
    }
    getData()
  },[URL_API]);

  const handleSearch = (e) =>{
    setSearch(e)
  }

  return (
    <div className="container">
      <SearchBar handleSearch = {handleSearch} setPageNumber = {setPageNumber} />
      <div className="row">
        <div className="col-3">
          filter
        </div>
        <div className="col-7">
          <div className="row justify-content-center">
            <Card results = { results } />
          </div>
        </div>
      </div>
      <Pagination setPageNumber = {setPageNumber} info = {info} />
    </div>
  );
};

export default Main;
