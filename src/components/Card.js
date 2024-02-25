import React from "react";
import { Link } from "react-router-dom";

const Card = ({ results }) => {
  if (!results) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {results.map((result) => {
        let { image, name, location, id } = result;
        return (
          <div className="col-4" key={id}>
            <Link className="card" style={{ width: "18rem" }}  to={`/details/${id}`}>
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
