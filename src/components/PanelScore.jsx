import "../App.css"
import React from 'react';

function PanelScore({score1, score2}) {


    return(
        <div className="score-board">
            <div>Score {score1}</div>
            <div>Score {score2}</div>
        </div>
    )
}

export default PanelScore;