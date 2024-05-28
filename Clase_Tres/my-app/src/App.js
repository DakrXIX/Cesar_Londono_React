import React from 'react';
import CharacterCard from './components/CharacterCard.js';

function App() {
  const characters = [
    { title: 'Sasaki Kojirō', url: 'https://64.media.tumblr.com/1b483d7b5cea88496036ff0a64358a2f/tumblr_ppnrouCkdy1vl2kroo1_500.jpg', genre: 'Masculino', status: 'Vivo' },
    { title: 'Ito Ittosai', url: 'https://www.skullknight.net/griffith/itohand.jpg', genre: 'Masculino', status: 'Vivo' },
    { title: 'Miyamoto Musashi', url: 'https://ih1.redbubble.net/image.1521638696.3118/flat,750x1000,075,f.jpg', genre: 'Masculino', status: 'Vivo' }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      {characters.map((character, index) => (
        <CharacterCard
          key={index}
          title={character.title}
          url={character.url}
          genre={character.genre}
          status={character.status}
        />
      ))}
    </div>
  );
}

export default App;
