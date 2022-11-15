import React from 'react';
import Imagem from './foto.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={Imagem} className="foto" alt="Esquilo"/>
      <h1><strong>Jonathan Érik Nascimento da Silva</strong></h1>
    </div>
  );
}

export default App;
