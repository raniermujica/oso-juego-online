import Square from "./Square";
import React from 'react';
import "../App.css"


function Board({squares, onClick, turn, pointPositions, playerTurn}) {

  const createSquares = values => (
      values.map(value => (
          <Square 
          playerTurn={playerTurn}
          turn={turn}
          onClick={() => onClick(value)}
          value={squares[value]}
          key={`squares_${value}`}
          />
      ))
  )
  
  return (
      <div className="board">
  <div className="row">
      {createSquares([0,1,2,3,4,5,6,7,8])}
  </div>
  <div className="row">
  {createSquares([9,10,11,12,13,14,15,16,17])}
  </div>
  <div className="row">
  {createSquares([18,19,20,21,22,23,24,25,26])}
  </div>
  <div className="row">
  {createSquares([27,28,29,30,31,32,33,34,35])}
  </div>
  <div className="row">
  {createSquares([36,37,38,39,40,41,42,43,44])}
  </div>
  <div className="row">
  {createSquares([45,46,47,48,49,50,51,52,53])}
  </div>
  <div className="row">
  {createSquares([54,55,56,57,58,59,60,61,62])}
  </div>
  <div className="row">
  {createSquares([63,64,65,66,67,68,69,70,71])}
  </div>
  <div className="row">
  {createSquares([72,73,74,75,76,77,78,79,80])}
  </div>
      </div>
  );
  }
  
  export default Board;