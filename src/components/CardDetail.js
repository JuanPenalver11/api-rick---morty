import React from "react";
import '../styles/CardDetails.css'

const CardDetail = ({ details, addFavorite, alreadyFav }) => {
  //we obtain details, addFavorites and alreadyFav props from Details.js
  let { image, name, status, gender, id } = details;
  // we destructure details withdrawing the information we want from.
  console.log(details);

 
  
  return (
    <div className="container-cardDetails">
    
      <div className="card-details">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          {status === 'Alive'? <span class="badge badge-pill" style={{backgroundColor:'green'}}>{status}</span> :
          status === 'Dead' ? <span class="badge badge-pill" style={{backgroundColor:'red'}}>{status}</span> : 
          <span class="badge badge-pill" style={{backgroundColor:'orange', color:'black'}}>{status}</span>}
          
          <p className="card-text">{gender}</p>
          <button 
            onClick={() => addFavorite(details)}
            disabled={alreadyFav(id)}
            type="button" 
            className="btn btn-primary btnDetails">
            {" "}
            Add to Favorites
          </button>
          {/* we had to button that triggers addFavorite function which contains as an argument the details of the 
        object we like, to then be added to favorileList */}
          {/* button also has a disabled attribute that will disable the button if alreadyFav returns true. Which 
        means that that object is already part of the list */}
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
