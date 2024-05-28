import React from 'react';

function Tarjeta(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
      <h1>{props.title}</h1>
      <img src={props.url} alt={`Foto de ${props.title}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <div>
        <p><b>Género:</b> {props.genre}</p>
        <p><b>Estado:</b> {props.status}</p>
      </div>
    </div>
  );
}

export default Tarjeta;
