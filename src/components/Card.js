import React from "react";
import { Link } from "react-router-dom";
//Link is an attrinute from react-router-drom
// that allow the user to navigate to different pages.
import '../styles/Card.css'

const Card = ({ results }) => {
  //result is obtained and shared though Main.js
  if (!results) {
    return <h2 className="loading">Loading...</h2>;
  }
  // if there is no result then return Loading
  return (
    <>
      {/* if there is a result then map though result and return the following div wiht the 
    information display in such a manner. */}
      {results.map((result) => {
        let { image, name, location, id } = result;
        // we destructure result to withdraw the information we want.
        return (
          <div className="col-4 mb-3">
            {/* key is very important */}
           
              <Link
                className="card"
                to={`/details/${id}`} key={id}
              >
                {/* Link will allow the user to go to details/id when clicking on the card */}
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{location.name}</p>
                </div>
              </Link>
            </div>
        );
      })}
    </>
  );
};

export default Card;
