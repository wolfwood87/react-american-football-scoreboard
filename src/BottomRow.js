import React from "react";
import "./App.css";


const BottomRow = (props) => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Home Fouls</h3>
        <div className="down__value">{props.hFoul}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">4</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Away Fouls</h3>
        <div className="toGo__value">{props.aFoul}</div>
      </div>
    </div>
  );
};

export default BottomRow;
