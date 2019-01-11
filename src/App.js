import React, { Component } from 'react';
// import Table from './Table';
// import Form from './Form';
import Nav from './Nav'
import Footer from './Footer'
import PhotoGrid from './PhotoGrid'

class App extends Component {
    // state = {
    //     characters: []
    // };

    // removeCharacter = index => {
    //     const { characters } = this.state;
    
    //     this.setState({
    //         characters: characters.filter((character, i) => { 
    //             return i !== index;
    //         })
    //     });
    // }

    // handleSubmit = character => {
    //     this.setState({characters: [...this.state.characters, character]});
    // }

    render() {
        // const { characters } = this.state;
        
        return (
            <div className="container">
                <Nav />
                
                <PhotoGrid />
                <Footer />
            </div>
        );
    }
}

export default App;
