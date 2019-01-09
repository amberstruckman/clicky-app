import React from "react";
// import CardBtn from "../CardBtn";
// import "./style.css";

function Card() {
  return (
    <div
      className="card"
      style={{
        backgroundImage: image ? `url()` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
     
      />
    </div>
  );
}

export default Card;
