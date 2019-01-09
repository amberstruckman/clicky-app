import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        <h1>Clicky Game!</h1>
        <p> Click a picture to get started!</p>
        <p>Score: </p>
      </a>
    </nav>
  );
}

export default Nav;
