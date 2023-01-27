import "../App.css"
import React from 'react';

function ResetBtn({resetGame}) {


    return(
        <div>
            <button id="reset-btn" onClick={() => resetGame()}>Reset</button>
        </div>

    )
}

export default ResetBtn;