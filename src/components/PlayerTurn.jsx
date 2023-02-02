import "../App.css";
import React from "react";
import classNames from "classnames";

function PlayerTurn({playerTurn}) {
  let playerOnClass = classNames(
    [`player--${playerTurn}`]
  )
  return (
    <div className="player-turn">
      <h2>Turno</h2>
      <h2 className={playerOnClass}>Jugador {playerTurn}</h2>
    </div>
  );
}

export default PlayerTurn;
