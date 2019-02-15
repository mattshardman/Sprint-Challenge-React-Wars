import React from 'react';
import CharacterListItem from './CharacterListItem';

function CharacterList({ starwarsChars }) {
  console.log(starwarsChars);
  return (
    <section>
      { starwarsChars.map(char => <CharacterListItem char={char} />) }
    </section>
  );
}

export default CharacterList;
