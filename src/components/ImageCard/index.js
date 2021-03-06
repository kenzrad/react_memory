import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => props.handleImageClick(props.id, props.clickCheck)} id={props.id} alt={props.name} src={props.image}/>
      </div>
    </div>
  );
}

export default ImageCard;
