import React from 'react';
import './CharacterCard.css';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img className="character-image" src={character.image} alt={character.name} />
      <div className="character-name">{character.name}</div>
      <div className="character-details">
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
