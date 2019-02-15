import React from 'react';
import './StarWars.css';

const person = {
  name: 'Biggs Darklighter',
  height: '183',
  mass: '84',
  hair_color: 'black',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '24BBY',
  gender: 'male',
  homeworld: 'https://swapi.co/api/planets/1/',
  films: ['https://swapi.co/api/films/1/'],
  species: ['https://swapi.co/api/species/1/'],
  vehicles: [],
  starships: ['https://swapi.co/api/starships/12/'],
  created: '2014-12-10T15:59:50.509000Z',
  edited: '2014-12-20T21:17:50.323000Z',
  url: 'https://swapi.co/api/people/9/',
};

class CharacterListItem extends React.Component {
  state = {
    hovered: false,
  }

  handleHover = () => {
    console.log('hovered');
    this.setState({ hovered: true });
  }

  handleEndHover = () => {
    console.log('hovered');
    this.setState({ hovered: false });
  }

  render() {
    const { hovered } = this.state;
    const { name, created, edited, films, species, vehicles, starships, ...charWithRemoved } = this.props.char; //eslint-disable-line
    const charArray = Object.entries(charWithRemoved);
    console.log(charArray);
    return (
      <div
        className={!hovered ? 'star-wars-card' : 'star-wars-card card-hovered'}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleEndHover}
      >
        <h4>{name}</h4>
        {hovered
        && (
        <div className="additional-info">
          { charArray.map(attribute => (
            <div>
              <strong>{attribute[0][0].toUpperCase()}
                {attribute[0].slice(1)}:
              </strong> {attribute[1].includes('https') ? <a href={attribute[1]}>{attribute[1]}</a> : attribute[1]}
            </div>


          )) }

          <div>
            { films.length ? <div><strong>Films:</strong> { films.map(each => <li><a href={each}>{each}</a></li>)}</div> : null }
            { species.length ? <div><strong>Species:</strong> { species.map(each => <li><a href={each}>{each}</a></li>)}</div> : null}
            { vehicles.length ? <div><strong>Vehicles:</strong>{ vehicles.map(each => <li><a href={each}>{each}</a></li>)}</div> : null}
            { starships.length ? <div><strong>Starships:</strong> { starships.map(each => <li><a href={each}>{each}</a></li>)}</div> : null}
          </div>
        </div>
        )
        }
      </div>
    );
  }
}

export default CharacterListItem;
