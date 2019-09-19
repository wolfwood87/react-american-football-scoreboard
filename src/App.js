//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [hScore, setHscore] = useState(0);
  const [aScore, setAscore] = useState(0);
  const [hFoul, setHfoul] = useState(0);
  const [aFoul, setAfoul] = useState(0);
  const [quart, setQuart] = useState(1);

  let min = 0;
  let max = 10;
  //functions for changing scores
  
  const hGoal = () => {
    setHscore(hScore + 10);
  }

  const aGoal = () => {
    setAscore(aScore + 10);
  }

  const hCatchSnitch = () => {
    setHscore(hScore + 150);
    alert('Ravenclaw has won the Game!');
  }

  const aCatchSnitch = () => {
    setAscore(aScore + 150);
    alert('Slytherin has won the Game!');
  }

  const hLookSnitch = () => {
    let random = Math.floor(Math.random() * (max - min));
    random === 1 ? hCatchSnitch() : console.log(random + 'Snitch was not found');
  }

  const aLookSnitch = () => {
    let random = Math.floor(Math.random() * (max - min));
    random === 1 ? aCatchSnitch() : console.log(random + 'Snitch was not found');
  }

  const incHFoul = () => {
    setHfoul(hFoul + 1);
  }

  const incAFoul = () => {
    setAfoul(aFoul + 1);
  }

  const incQuart = () => {
    setQuart(quart + 1);
  }
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Ravenclaw</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{hScore}</div>
          </div>
          <div className="timer">00:00:00:03</div>
          <div className="away">
            <h2 className="away__name">Slytherin</h2>
            <div className="away__score">{aScore}</div>
          </div>
        </div>
        <BottomRow hFoul={hFoul} aFoul={aFoul} quart = {quart}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={hGoal}>Ravenclaw Score Goal</button>
          <button className="homeButtons__fieldGoal" onClick={hLookSnitch}>Ravenclaw look for Snitch</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={aGoal}>Slytherin Score Goal</button>
          <button className="awayButtons__fieldGoal" onClick={aLookSnitch}>Slytherin look for Snitch</button>
        </div>
        <div className="foulButtons">
          <button className="homeButtons__foul" onClick={incHFoul}>Ravenclaw Foul</button>
          <button className="awayButtons__foul" onClick={incAFoul}>Slytherin foul</button>
        </div>  
      </section>
      <div className="quartButton">
          <button className="awayButtons__touchdown" onClick={incQuart}>Next Quarter</button>
        </div>
    </div>
  );
}

export default App;
