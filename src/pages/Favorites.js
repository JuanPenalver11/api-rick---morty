import React from 'react'
import FavoriteDisplay from '../components/FavoriteDisplay'
import { useAppContext } from '../context/AppContext'

const Favorites = () => {

  const {favoriteList, removeFavorite} = useAppContext();


  return (
  <div className="container">
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <FavoriteDisplay favoriteList = {favoriteList} removeFavorite = {removeFavorite}/>
      </div>
      <div className="col-3"></div>
    </div>
  </div>
  )
}

export default Favorites
