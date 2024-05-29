import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import './CharacterCard.css'

function RickAndMortyCharacterCard({ ids }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCharacters = await Promise.all(
        ids.map(id => 
          fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
        )
      );
      setCharacters(fetchedCharacters);
    };

    fetchData();
  }, [ids]);

  return (
    <div className="characters-container">
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
          genre={character.gender}
          status={character.status}
        />
      ))}
    </div>
  );
}

export default RickAndMortyCharacterCard;
