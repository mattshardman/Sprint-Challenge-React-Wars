import React from 'react';
import './StarWars.css';


class CharacterListItem extends React.Component {
  state = {
    hovered: false,
  }

  handleHover = () => {
    this.setState({ hovered: true });
  }

  handleEndHover = () => {
    this.setState({ hovered: false });
  }

  render() {
    const { hovered } = this.state;
    const { image, char } = this.props;
    const {
      name, created, edited, films, species, vehicles, starships, ...charWithRemoved
    } = char;
    const charArray = Object.entries(charWithRemoved);
    console.log(image);
    return (
      <div
        style={{
          background: image ? `url("${image}")` : 'linear-gradient(170deg, #484848 5%, #000 50%)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',

        }}
        className={!hovered ? 'star-wars-card' : 'star-wars-card card-hovered'}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleEndHover}
      >
        <h4>{name}</h4>
        {hovered
        && (
        <div className="additional-info">
          { charArray.map(attribute => (
            <div key={attribute[0]}>
              <strong>{attribute[0][0].toUpperCase()}
                {attribute[0].slice(1)}:
              </strong> {attribute[1].includes('https') ? <a href={attribute[1]}>{attribute[1]}</a> : attribute[1]}
            </div>


          )) }

          <div>
            <div><strong>{name}</strong> has been in: {films.length}</div>
            { films.length
              ? <div><strong>Films:</strong> { films.map(each => <li><a href={each}>{each}</a></li>)}</div>
              : null
              }
            { species.length
              ? <div><strong>Species:</strong> { species.map(each => <li><a href={each}>{each}</a></li>)}</div>
              : null
              }
            { vehicles.length
              ? <div><strong>Vehicles:</strong>{ vehicles.map(each => <li><a href={each}>{each}</a></li>)}</div>
              : null
              }
            { starships.length
              ? <div><strong>Starships:</strong> { starships.map(each => <li><a href={each}>{each}</a></li>)}</div>
              : null
              }
          </div>
        </div>
        )
        }
      </div>
    );
  }
}

export default CharacterListItem;
