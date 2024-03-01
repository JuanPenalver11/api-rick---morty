import React, { useState, useEffect } from "react";
import ButtonsGame from "../components/ButtonsGame";
import "../styles/Game.css";
// import react, useState and useEffect
const Game = () => {
  const [fetchedData, setFetchedData] = useState([]);
  //fetchedData is an empty array updated by setFetcheData that will hold an object
  const [answer, setAnswer] = useState("");
  //answer is an empty string updated by setAnswer
  const [countPlayer, setCountPlayer] = useState(0);
  // countPlayer start at zero and will be updated by setCountPlayer function
  const [countComputer, setCountComputer] = useState(0);
  // countComputer start at zero and will be updated by setCountPlayer function

  let { image, status, name } = fetchedData;
  //we withdraw image, status and name from the object fetchedData

  const randomId = () => {
    //randomId function is a function that will create a random number up to 825
    // we have to add one in order to omit zero and to obtain the number 826
    const randomNumber = Math.floor(Math.random() * 826 + 1);
    const URL_GAME = `https://rickandmortyapi.com/api/character/${randomNumber}`;
    //we want our URL to generate a random character, hence we use template string to pass through
    // the random number produce
    fetchData(URL_GAME);
    //in order to be able to fetch the data from the url above created we pass the url
    // as an argument through out our fetchData function.
  };

  //fetchData fuction will be fetching information from the url above created.
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error("Details no available");
      }
      const data = await response.json();
      setFetchedData(data);
    } catch (Error) {
      console.log("Error", Error);
    }
  }

  // useEffect will manage the calls we will be making to the url.
  useEffect(() => {
    randomId();
  }, []);

  // Each handle is connected to one button element.
  //When the button is click this will send the status from the card generated though out
  // the handle function. If the status matches up with the button status, then the
  //setCountPlayer will be activated adding one point to the player marker and will
  // render "Great". If it doesn't match then the computer marker will get one point
  // and will render the real character's status.
  const handleAlive = (arg) => {
    if (arg === "Alive") {
      setAnswer("Great");
      setCountPlayer((prev) => prev + 1);
    } else {
      setAnswer(arg);
      setCountComputer((prev) => prev + 1);
    }
  };

  const handleDead = (arg) => {
    if (arg === "Dead") {
      setAnswer("Great");
      setCountPlayer((prev) => prev + 1);
    } else {
      setAnswer(arg);
      setCountComputer((prev) => prev + 1);
    }
  };

  const handleUnknown = (arg) => {
    if (arg === "unknown") {
      setAnswer("Great");
      setCountPlayer((prev) => prev + 1);
    } else {
      setAnswer(arg);
      setCountComputer((prev) => prev + 1);
    }
  };

  const stopGame = (arg) => {
    return arg !== "";
  };

  return (
    <div className="container-game">
      <div className="row">
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
          <div className="card-game">
          <span class="badge rounded-pill bg-danger computerCount fs-4">
          Computer count: {countComputer}
        </span>
        <span class="badge rounded-pill bg-success playerCount fs-4">
          Player count: {countPlayer}
        </span>
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-answer">
              {answer === "Great" ? (
                <i className="fa-regular fa-square-check"></i>
              ) : (
                <h5 className="answer text-center my-3 fs-2">{answer}</h5>
              )}
            </div>
            <div className="card-button">
              <ButtonsGame
                status={status}
                answer={answer}
                handleAlive={handleAlive}
                handleDead={handleDead}
                handleUnknown={handleUnknown}
                stopGame={stopGame}
                randomId={randomId}
                setAnswer={setAnswer}
              />
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Game;
