import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharactersList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starWarsChars: [],
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = (URL) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => res.json())
      .then((data) => {
        this.setState({ starWarsChars: data.results });
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  render() {
    const { starWarsChars } = this.state;
    return (
      <div className="App">

        <div className="content">
          <h1 className="Header">REACT WARS</h1>
          { starWarsChars
          && <CharacterList starWarsChars={starWarsChars} />
        }
        </div>
        <div className="bg" />
      </div>
    );
  }
}

export default App;
