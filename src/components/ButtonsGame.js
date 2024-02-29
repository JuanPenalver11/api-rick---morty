import React from "react";

const ButtonsGame = ({
  status,
  answer,
  handleAlive,
  handleDead,
  handleUnknown,
  stopGame,
  randomId, 
  setAnswer
}) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-success fs-5"
        onClick={() => {
          handleAlive(status);
        }}
        disabled={stopGame(answer)}
      >
        Alive?
      </button>
      <button
        type="button"
        className="btn btn-danger fs-5"
        onClick={() => {
          handleDead(status);
        }}
        disabled={stopGame(answer)}
      >
        Dead?
      </button>
      <button
        type="button"
        className="btn btn-warning fs-5"
        onClick={() => {
          handleUnknown(status);
        }}
        disabled={stopGame(answer)}
      >
        Unknown?
      </button>
      <button
        type="button"
        className="btn btn-primary mt-3 fs-5" style={{width:"100%"}}
        onClick={() => {
          randomId();
          setAnswer("");
        }}
      >
        {/* this button will generate a new character and will set to an empty string the answer */}
        Generate Character
      </button>
    </>
  );
};

export default ButtonsGame;
