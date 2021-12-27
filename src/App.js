import React, { useState } from 'react';
import SeccionGif from './components/SeccionGif';
import Buscador from './components/Buscador';
import { nanoid } from 'nanoid';

function App() {
  //State Global
  const [terminos, setTerminos] = useState(['Coding']);

  return (
    <div className="App">
      <h1 className="titulo-app">Encuentra un GIF</h1>
      <Buscador setTerminos={setTerminos} />
      {terminos.map((termino) => (
        <div className="contenido" key={nanoid()}>
          <h1 className="titulo-seccion">{termino}</h1>
          <SeccionGif key={nanoid()} termino={termino} />
        </div>
      ))}
    </div>
  );
}

export default App;
