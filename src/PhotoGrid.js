import React from "react";

function PhotoGrid(props) {
    return (
      <div key={props.name + props.index} 
        onClick={() => props.handleClick(props.id)}
        className={`click-item${props.shake ? " shake" : ""}`}>
             {/* <h1>{props.name}</h1> */}
             <img aria-label="click item" 
             src={props.image} 
             alt={`Click on ${props.name}`} />
             
         </div>
    );
  }
  
  export default PhotoGrid;