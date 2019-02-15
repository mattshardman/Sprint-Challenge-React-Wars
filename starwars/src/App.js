import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharactersList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nextPage: null,
      starWarsChars: [],
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        const { nextPage } = this.state;
        if (nextPage) {
          this.getCharacters(nextPage);
        }
      }
    });
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = (URL) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => res.json())
      .then((data) => {
        this.setState(state => ({
          nextPage: data.next,
          starWarsChars: [...state.starWarsChars, ...data.results],
        }));
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
          <div style={{ height: '30vh' }} />
          { starWarsChars
          && (
          <CharacterList
            starWarsChars={starWarsChars.slice(0, 10)}
          />
          )
        }
          { starWarsChars.length > 10
          && (
          <CharacterList
            starWarsChars={starWarsChars.slice(10, 20)}
          />
          )
        }
        </div>
        <div className="bg" />
      </div>
    );
  }
}

export default App;
