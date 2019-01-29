import React from "react";

function Masthead(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        <h1>Clicky Game!</h1>
        <p> Click a picture to get started!</p>
        <p className="score">Score: <em>{props.score}</em></p>
        <p className="score">Top Score: <strong>{props.topScore}</strong></p>
      </a>
    </nav>
  );
}

export default Masthead;
