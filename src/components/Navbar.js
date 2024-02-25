import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <NavLink  className="navbar navbar-expand-lg bg-body-tertiary">
  <div  className="container-fluid">
    <NavLink   className="navbar-brand" to="/">Rick & Morty</NavLink >
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div  className="navbar-nav">
        <NavLink   className="nav-link active" aria-current="page" to="/favorites">Favorites</NavLink >
      </div>
    </div>
  </div>
</NavLink >
  );
};

export default Navbar;