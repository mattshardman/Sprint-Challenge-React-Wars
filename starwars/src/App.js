import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharactersList';

const images = [
  'http://assets1.ignimgs.com/2018/02/21/lukeskywalker-1519252298974_1280w.jpg',
  'https://lumiere-a.akamaihd.net/v1/images/C-3PO-See-Threepio_68fe125c.jpeg?region=0%2C1%2C1408%2C792',
  'https://starwarsblog.starwars.com/wp-content/uploads/2018/08/star-wars-r2-d2-tall-image.jpg',
  'https://spacequotations.com/wp-content/uploads/2018/09/darth-vader-1140x666.jpg',
  'https://3.bp.blogspot.com/-FVMhBQoZ4K4/WjRrpr9Z3RI/AAAAAAAAA_4/2oQjJF56IEMNczqJuKIWwRyevFdgYFwZgCLcBGAs/s1600/Princess%2BLeia%2BStar%2BWars.jpg',
  'https://lumiere-a.akamaihd.net/v1/images/databank_owenlars_01_169_effce0f8.jpeg?region=0%2C0%2C1560%2C878&width=1536',
  'https://futureoftheforce.files.wordpress.com/2018/01/aunt-beru-header.jpg?w=1620',
  'https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666',
  'https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=960',
  'https://cdn3.movieweb.com/i/article/K4S89noF4xNnOGjM3xnSaywtOEFoOX/798:50/Obi-Wan-Kenobi-Movie-Star-Wars-Spinoff-Production.jpg',
];

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
            images={images}
            starWarsChars={starWarsChars.slice(0, 10)}
          />
          )
        }
          { starWarsChars.length > 10
          && (
          <CharacterList
            images={[]}
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
