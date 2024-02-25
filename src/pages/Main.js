import React from "react";
import { useState , useEffect } from "react";

import Card from '../components/Card'

const Main = () => {

  const [fetchedData, setData] = useState([]);

  let {info, results} = fetchedData;
 

  const URL_API = 'https://rickandmortyapi.com/api/character/?page=1';

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
  },[])

  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-7">
          <div className="row justify-content-center">
            <Card results = { results } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
