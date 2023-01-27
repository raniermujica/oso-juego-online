import { useState } from "react";
import React from "react";
import "./App.css";
import Board from "./components/Board";
import Letter from "./components/Letter";
import winningPositions from "./utils/winningCode";
import ResetBtn from "./components/ResetBtn";
import PanelScore from "./components/PanelScore";
import PlayerTurn from "./components/PlayerTurn";

function App() {
  const [turn, setTurn] = useState("");
  const [playerTurn, setPlayerTurn] = useState("1");
  const [squares, setSquares] = useState(Array(81).fill(null));
  const [pointPositions, setPointPositions] = useState([]);
  const [score, setScore] = useState({
    1: 0,
    2: 0,
  });

  const checkWinner = newSquares => {
    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (
        newSquares[a] &&
        newSquares[a] !== newSquares[b] &&
        newSquares[a] === newSquares[c]
      ) {
        // addPoint(newSquares[a], winningPositions[i]);
        setScore({
          ...score,
          score: score + 1,
        });
        return;
      }
    }
    if (!newSquares.includes(null)) {
      // endGame(null, Array.from(Array(81).keys()));
      return;
    }
    setTurn(turn === "1" ? "2" : "1");
  };

  const handleClick = (square) => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkWinner(newSquares);
  };

  const handleBtnS = () => {
    setTurn("1");
  };

  const handleBtnO = () => {
    setTurn("2");
  };

  const resetGame = () => {
    setTurn("");
    setSquares(Array(81).fill(null));
    setPointPositions([]);
    setScore({
      1:0, 
      2:0
    });
  };

  const addPoint = (result, winningPositions) => {
    // setTurn(turn === "1" ? "1" : "2")
    if (result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      });
    }
    setPointPositions(winningPositions);
  };

  return (
    <div className="screen">
      <br />
      <div className="container">
        <header>
          <PlayerTurn />
        </header>
        <div id="game-board">
          <Board
            pointPositions={pointPositions}
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
