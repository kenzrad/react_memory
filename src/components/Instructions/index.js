import React from "react";
import "./style.css";

function Instructions(props) {
  return <p className="instructions">{props.children}</p>;
}

export default Instructions;
