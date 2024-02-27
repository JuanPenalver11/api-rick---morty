import React from "react";

const Gender = ({ handleGender, setPageNumber }) => {
  let genders = ["Female", "Male", "Genderless", "Unknown"];
  return (
    <div className="accordion-body">
      {genders.map((gender) => {
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
