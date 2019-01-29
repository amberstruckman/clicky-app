import React, { Component } from "react";
import Header from "./Header";
import Container from "./Container";
import PhotoGrid from "./PhotoGrid";
import Footer from "./Footer";
import pokemonData from "./Pokemon";

class PokemonClickyApp extends Component {
  state = {
    data: pokemonData,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ data: this.mixPokemon(this.state.data) });
  }

  correctGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({
      data: this.mixPokemon(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  wrongGuess = data => {
    this.setState({
      data: this.resetPokemon(data),
      score: 0
    });
  };

  resetPokemon = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.mixPokemon(resetData);
  };

  mixPokemon = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.correctGuess(newData)
      : this.wrongGuess(newData);
  };

  render() {
    let index = 0;
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore} />
        
        <Container>
          {this.state.data.map(item => (
            <PhotoGrid
              key={item.id}
              id={item.id}
              shake={!this.state.score && this.state.topScore}
              handleClick={this.handleItemClick}
              image={item.image}
              index={index++}
            />
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default PokemonClickyApp;