import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import CardDetail from '../components/CardDetail'



const Details = () => {

  const [details, setDetails] = useState({});

  const {addFavorite, alreadyFav} = useAppContext();
  

  let { id } = useParams();

  const DETAILS_URL_API = `https://rickandmortyapi.com/api/character/${id}`

  useEffect(()=>{
    async function fetchDetails(){
      try{
        const response = await fetch(DETAILS_URL_API);
        if(!response.ok){
          throw Error ('Details no available')
        }
        const data = await response.json();
        setDetails(data)
      } catch(error){
        console.log('Error', error)
      }
    }
    fetchDetails()
  },[DETAILS_URL_API, id])


  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 d-flex justify-content-center">
          <CardDetail details = { details } addFavorite = { addFavorite } alreadyFav = {alreadyFav}/>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  )
}

export default Details
