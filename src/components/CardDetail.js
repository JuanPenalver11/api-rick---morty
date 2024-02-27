import React from "react";

const CardDetail = ({details, addFavorite, alreadyFav }) => {
  
  let {image, name, status, gender, id} = details;

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
      </div>
    </div>
  );
};

export default CardDetail;
