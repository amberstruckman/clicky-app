import React from "react";
import ReactDOM from "react-dom";
import PokemonClickyApp from "./PokemonClickyApp";
import "./pokestyle.css";
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(<PokemonClickyApp />, document.getElementById("root"));
registerServiceWorker();
