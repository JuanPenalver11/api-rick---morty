import React from 'react'

const Species = ({handleSpecie, setPageNumber}) => {
  let species = [ 'Human', 'Alien', 'Humanoid', 'Poopybutthole', 'Mythological', 'Unknown', 'Animal', 'Disease', 'Robot', 'Cronenberg', 'Planet']
  return (
    <div className="accordion-body">
    {species.map((specie) => {
      return (
        <button
          onClick={() => {
            setPageNumber(1);
            handleSpecie(specie);
          }}
        >
          {specie}
        </button>
      );
    })}
  </div>
  )
}

export default Species
