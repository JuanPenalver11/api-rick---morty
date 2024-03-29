// In App.js <Route path="/favorites" element={<Favorites />} /> 
// will take us here. 

import React from 'react'
import FavoriteDisplay from '../components/FavoriteDisplay'
// We import FavoriteDisplay component
import { useAppContext } from '../context/AppContext'
//We import useAppContext from AppContext to be able to use the functions we have developped. 
import '../styles/Favorites.css'

const Favorites = () => {

  const {favoriteList, removeFavorite} = useAppContext();
//we deconstruct useAppContext --> and we withdraw favoriteList (an array that holds favorites object more
//information in AppContext.js) and removeFavorite functions from AppContext.

//We pass favoriteList array and removeFavorite function as props through FavoriteDisplay component. 

  return (
  <div className="container-favorites text-center">
    
          <FavoriteDisplay favoriteList = {favoriteList} removeFavorite = {removeFavorite}/>
  
  </div>
  )
}

export default Favorites
