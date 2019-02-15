import React from 'react';
import PropTypes from 'prop-types';
import CharacterListItem from './CharacterListItem';
import './StarWars.css';

function CharacterList({ starWarsChars }) {
  return (
    <section className="star-wars-list">
      <div className="star-wars-list-wrapper">
        { starWarsChars.map(char => <CharacterListItem char={char} />) }
      </div>
    </section>
  );
}

CharacterList.propTypes = {
  starWarsChars: PropTypes.array.isRequired, // eslint-disable-line
};

export default CharacterList;
