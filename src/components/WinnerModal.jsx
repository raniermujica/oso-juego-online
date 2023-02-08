import "../App.css";
import React from "react";

function WinnerModal({children}) {

return (
    <>
    {/* <overlay className="overlay-background"> */}
        <div>
            {children}
        </div>
    {/* </overlay> */}
    </>
)};

export default WinnerModal;