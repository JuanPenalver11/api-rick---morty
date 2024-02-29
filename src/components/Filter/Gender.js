import React from "react";

const Gender = ({ handleGender, setPageNumber }) => {
  let genders = ["Female", "Male", "Genderless", "Unknown"];
  // we have created an array of names
  return (
    <div className="accordion-body d-flex flex-wrap">
      {genders.map((gender, index) => {
        // we want to map through that array and
        // to create a button for each index.
        // the button has an event Onclick that will trigger a handleGender
        //that will modify setGender with the gender stablish in the button.
        // this will affect the url and the useEffect will he triggered rendering new information.
        return (
          <button
            key={index}
            onClick={() => {
              setPageNumber(1);
              handleGender(gender);
            }}
            className="btn btn-primary m-2"
          >
            {gender}
          </button>
        );
      })}
    </div>
  );
};

export default Gender;
