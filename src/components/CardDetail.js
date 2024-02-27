import React from "react";

const CardDetail = ({details, addFavorite, alreadyFav }) => {
  //we obtain details, addFavorites and alreadyFav props from Details.js
  let {image, name, status, gender, id} = details;
  // we destructure details withdrawing the information we want from. 

  return (
    <div className="card" style={{width: "30rem"}}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {status}
        </p>
        <p className="card-text">
          {gender}
        </p>  
        <button onClick={()=>addFavorite(details)} disabled={alreadyFav(id)}> Add to Favorites</button>
        {/* we had to button that triggers addFavorite function which contains as an argument the details of the 
        object we like, to then be added to favorileList */}
        {/* button also has a disabled attribute that will disable the button if alreadyFav returns true. Which 
        means that that object is already part of the list */}
      </div>
    </div>
  );
};

export default CardDetail;
