import React from 'react';

const FavoriteDisplay = ({ favoriteList, removeFavorite  }) => {
  return (
    <div className="row">
      {favoriteList.length > 0 ? (
        favoriteList.map(item => {
          let { image, name, id } = item;
          return (
            <div className="col-12 d-flex" key={id}>
              <img src={image} alt={name} />
              <h3>{name}</h3>
              <button onClick={() => {removeFavorite(id)}}>Remove</button>
            </div>
          );
        })
      ) : (
        <h1>Add some favorites</h1>
      )}
    </div>
  );
};

export default FavoriteDisplay;
