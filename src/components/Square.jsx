import "../App.css"
import React from 'react';
import classNames from "classnames";
import Letter from "./Letter";

function Square({value, onClick, turn, winner}) {

const handleClick = () => {
   (turn !== null && value === null) && onClick();
}

let squareClass = classNames({
    square: true,
    [`square--${value}`]: value !== null,
    winner: winner,
});

    return(
        <div className={squareClass} onClick={() => handleClick()}>

        </div>
    )
}

export default Square;