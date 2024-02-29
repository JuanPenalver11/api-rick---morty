import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import CardDetail from '../components/CardDetail'

// import useState, useEffect to be able to modify the state of our app
// and also to be able to fetch information from an APIs

//import useParams to be able to use the id passed from Card.js 
//<Link className="card" style={{ width: "18rem" }}  to={`/details/${id}`}>
//and use that id to modify our URL 

//useAppContext to be able to have access to the states and functionbs created in AppContext.js



const Details = () => {

  const [details, setDetails] = useState({});

  //use state object that will obtain the information from the useEffect. 
  //setDetails will updated details object everytime the id from the Url is modified. 
  //Remember that that id is link to Card.js 

  const {addFavorite, alreadyFav} = useAppContext();
  
  //useAppContext will allow us to have access to addFavorite and alreadyFav functions.

  let { id } = useParams();

  //id destructured from useParams()

  const DETAILS_URL_API = `https://rickandmortyapi.com/api/character/${id}`

  //Url  that will provide us with the character informatuion depending on their id. 
  //Remeber each object has an id that is unique. 

  useEffect(()=>{
    //asynchronous function that has for aim to fetch data from the url above. 
    // asynchronous fucntion will allow our app to run other functions at the same withou crashing. 
    async function fetchDetails(){
      try{
        // we say try this response
        // fetch data from the url and wait to have all the information before providing it back to us. 
        //if there is no reponse then thow an error. 
        const response = await fetch(DETAILS_URL_API);
        if(!response.ok){
          throw Error ('Details no available')
        }
        // nonetheless, if there ain't errors then transform response into a language that my app can read
        // wait until all the information is translated and then pass it through setDetails. 
        const data = await response.json();
        setDetails(data)
      } catch(error){
        console.log('Error', error)
      }
      // if there is an eror then show it in the console
    }
    fetchDetails()
    // we have to call the function for her to do her work.
  },[DETAILS_URL_API, id])
  //useEffect will run eveytime the url is modified or the id is modified


  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 d-flex justify-content-center">
          <CardDetail details = { details } addFavorite = { addFavorite } alreadyFav = {alreadyFav}/>
          {/* we add CardDetail to our html and we pass as props: details, addFavorite and adrealdyFav functions 
          so we can use them in CardDetail.js component */}
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  )
}

export default Details
