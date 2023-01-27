import React from "react";
import "../App.css";
import classNames from "classnames";

function Letter({handleBtnS, handleBtnO}) {


  return (
    <div>
      <button className="turnBtn" onClick={() => handleBtnS()}>S</button>
      <button className="turnBtn" onClick={() => handleBtnO()}>O</button>
    </div>
  );
}

export default Letter;
