import React from 'react';
import PropTypes from 'prop-types';
import CharacterListItem from './CharacterListItem';
import './StarWars.css';

function CharacterList({ starWarsChars, images }) {
  return (
    <section className="star-wars-list">
      <div className="star-wars-list-wrapper">
        { starWarsChars.map((char, i) => <CharacterListItem char={char} image={images[i]} />) }
      </div>
    </section>
  );
}

CharacterList.propTypes = {
  starWarsChars: PropTypes.array.isRequired, // eslint-disable-line
};

export default CharacterList;
