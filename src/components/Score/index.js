import React from "react";
import "./style.css";

function Score(props) {
  return <p className="score">Score: {props.score} Top Score: {props.topScore}</p>;
}

export default Score;
