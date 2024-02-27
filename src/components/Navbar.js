import React from "react";
import { NavLink } from "react-router-dom";
//NavLink works as a Link but it is refered to Navbars
import { useAppContext } from "../context/AppContext";
//we import useAppContext to be able to use the states and functions developped 
// in AppContext.js


const Navbar = () => {

  const { favoriteCount } = useAppContext();
  //we obtain favoriteCount from useAppContext
 
  return (
    <NavLink  className="navbar navbar-expand-lg bg-body-tertiary">
  <div  className="container-fluid">
    <NavLink   className="navbar-brand" to="/">Rick & Morty</NavLink >
    {/* NavLink that will take the use to / --> main page */}
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div  className="navbar-nav">
       <NavLink   className="nav-link active" aria-current="page" to="/favorites">Favorites<span> ...{favoriteCount}</span></NavLink >
       {/* NavLink that will take the use to / --> /favorites */}
       {/* favoriteCount is a value that will display the length of FavoriteList */}
      </div>
    </div>
  </div>
</NavLink >
  );
};

export default Navbar;
