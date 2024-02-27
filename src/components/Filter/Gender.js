import React from "react";

const Gender = ({ handleGender, setPageNumber }) => {
  let genders = ["Female", "Male", "Genderless", "Unknown"];
  // we have created an array of names 
  return (
    <div className="accordion-body">
      {genders.map((gender) => {
        // we want to map through that array and 
        // to create a button for each index. 
        // the button has an event Onclick that will trigger a handleGender
        //that will modify setGender with the gender stablish in the button. 
        // this will affect the url and the useEffect will he triggered rendering new information. 
        return (
          <button
            onClick={() => {
              setPageNumber(1);
              handleGender(gender);
            }}
          >
            {gender}
          </button>
        );
      })}
    </div>
  );
};

export default Gender;
