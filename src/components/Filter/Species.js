import React from "react";

const Species = ({ handleSpecie, setPageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  // we have created an array of names
  return (
    <div className="accordion-body d-flex flex-wrap">
      {species.map((specie, index) => {
        // we want to map through that array and
        // to create a button for each index.
        // the button has an event Onclick that will trigger a handleSpecie
        //that will modify setSpecie with the gender stablish in the button.
        // this will affect the url and the useEffect will he triggered rendering new information.
        return (
          <button
            key={index}
            onClick={() => {
              setPageNumber(1);
              handleSpecie(specie);
            }}
            className="btn btn-primary m-2"
          >
            {specie}
          </button>
        );
      })}
    </div>
  );
};

export default Species;
