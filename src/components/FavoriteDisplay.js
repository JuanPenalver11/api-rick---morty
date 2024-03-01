
//FavortireDisplay component 
//this component will display the objects holded in favoriteList

import React from 'react';
import '../styles/FavoriteDisplay.css'


const FavoriteDisplay = ({ favoriteList, removeFavorite  }) => {
  // we obtain favoriteList and removeFavorite from main.js
  return (
    <div className="row justify-content-center" style={{position:'relative', top:'100px'}} >
      {favoriteList.length > 0 ? (
        // if favoriteList length is higher than 0,  map favoriteList and construct a div with assigned information.
        favoriteList.map(item => {
          let { image, name, id } = item;
          //  Information is obtained from the destructuration of item. 
          return (
            <div className="card-favorite me-5 my-3 col-sm-12 col-md-6 col-lg-6" key={id}>
              <img className="image-favorite" src={image} alt={name} />
              <h3 className="name-favorite">{name}</h3>
              <button onClick={() => {removeFavorite(id)}} className='btn-favorite'><i class="fa-solid fa-circle-xmark"></i></button>
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
