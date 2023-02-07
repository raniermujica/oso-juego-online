import { useState } from "react";
import React from "react";
import "./App.css";
import Board from "./components/Board";
import Letter from "./components/Letter";
import winningPositions from "./utils/winningCode";
import ResetBtn from "./components/ResetBtn";
import PanelScore from "./components/PanelScore";
import PlayerTurn from "./components/PlayerTurn";
import osoLogo from "./assets/oso-logo.png";

function App() {
  const [turn, setTurn] = useState("");
  const [playerTurn, setPlayerTurn] = useState("1");
  const [squares, setSquares] = useState(Array(81).fill(null));
  const [pointPositions, setPointPositions] = useState(winningPositions);
  const [score, setScore] = useState({
    1: 0,
    2: 0,
  });

  const handleBtnS = () => {
    setTurn("S");
  };

  const handleBtnO = () => {
    setTurn("O");
  };

  const handleClick = (square) => {
    let newSquares = [...squares];
    if (turn === "S" || turn === "O") {
      newSquares.splice(square, 1, turn);
    }
    checkWinner(newSquares);
    setSquares(newSquares);
    setTurn("");

    if (turn === "S" || turn === "O") {
      setPlayerTurn(playerTurn === "1" ? "2" : "1");
    }
  };


  const checkWinner = (newSquares) => {
    let winningPoints = [...pointPositions]
    for (let i = 0; i < winningPoints.length; i++) {
      const [a, b, c] = winningPoints[i];
      if ( 
        (newSquares[a] &&
        newSquares[a] !== newSquares[b] &&
        newSquares[b] !== null &&
        newSquares[b] === "S" &&
        newSquares[a] === newSquares[c])
      ) {
        addPoint(playerTurn);
        setPointPositions(winningPoints.filter(winningCombination => winningCombination !== winningPoints[i]))
     } 
    }
  };

  const addPoint = (playerTurn) => {
    if (turn === "S" || turn === "O") {
      setScore({
        ...score,
        [playerTurn]: score[playerTurn] + 1,
      });
    }
  };

  const resetGame = () => {
    setTurn("");
    setSquares(Array(81).fill(null));
    setPointPositions(winningPositions);
    setPlayerTurn("1");
    setScore({
      1: 0,
      2: 0,
    });
  };

  return (
    <div className="screen">
      <br />
      <div className="container">
        <div id="left-screen">
          {<img src={osoLogo} alt="logo" width={170} />}
          <header>
            <PlayerTurn playerTurn={playerTurn} />
          </header>
        </div>
        <div id="game-board">
          <Board
            pointPositions={pointPositions}
            playerTurn={playerTurn}
            turn={turn}
            squares={squares}
            onClick={handleClick}
          />
        </div>
        <section id="principal-buttons">
          <Letter
            turn={turn}
            onClick={handleClick}
            handleBtnS={handleBtnS}
            handleBtnO={handleBtnO}
          />
          <ResetBtn resetGame={resetGame} />
        </section>
      </div>
      <section id="panel-score">
        <PanelScore score1={score[1]} score2={score[2]} />
      </section>
    </div>
  );
}

export default App;
