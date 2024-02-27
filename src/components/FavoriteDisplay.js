
//FavortireDisplay component 
//this component will display the objects holded in favoriteList

import React from 'react';


const FavoriteDisplay = ({ favoriteList, removeFavorite  }) => {
  // we obtain favoriteList and removeFavorite from main.js
  return (
    <div className="row">
      {favoriteList.length > 0 ? (
        // if favoriteList length is higher than 0,  map favoriteList and construct a div with assigned information.
        favoriteList.map(item => {
          let { image, name, id } = item;
          //  Information is obtained from the destructuration of item. 
          return (
            <div className="col-12 d-flex" key={id}>
              <img src={image} alt={name} />
              <h3>{name}</h3>
              <button onClick={() => {removeFavorite(id)}}>Remove</button>
              {/* DIV has also a button, that has an onClick property. 
              The onClick holds an anonymous function that trigger the function removeFavorite to which we pass the 
               id of the element rendered. 
               if favorite length is 0 or lower then   <h1>Add some favorites</h1> will appear has a message. 
               */}
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
