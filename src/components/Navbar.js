import React from "react";
import { NavLink } from "react-router-dom";
//NavLink works as a Link but it is refered to Navbars
import { useAppContext } from "../context/AppContext";
//we import useAppContext to be able to use the states and functions developped
// in AppContext.js
import "../styles/Navbar.css";
import gameIcon from "../images/game-console.png"
import favorite from "../images/folder.png"

const Navbar = () => {
  const { favoriteCount } = useAppContext();
  //we obtain favoriteCount from useAppContext

  return (
    <nav className="navbar navbar-expand-lg d-flex">
      <div className="container-fluid">
        <NavLink className="navbar-brand ms-3" to="/">
          Rick & Morty
        </NavLink>
        {/* NavLink that will take the use to / --> main page */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link me-lg-5" aria-current="page" to="/game">
              Game <span><img src={gameIcon} alt="gameIcon" style={{width:"30px"}} /></span>
            </NavLink>
            {/* NavLink that will take the use to / --> /favorites */}
            {/* favoriteCount is a value that will display the length of FavoriteList */}
            <NavLink className="nav-link" to="/favorites">
            <span>{favoriteCount}</span> {favoriteCount <= 1? "Favorite " : "Favorites "}
            <span><img src={favorite} alt="favoriteIcon" style={{width:"30px"}}/></span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
