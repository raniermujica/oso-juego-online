import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [turn, setTurn] = useState("O");
  const [squares, setSquares] = useState(Array(81).fill(null));
  const [score, setScore] = useState({
    RED: 0,
    BLUE: 0,
  });

  return (
    <div className="container">
      <Board squares={squares} />
    </div>
  );
}

export default App;
