import React, { useState } from 'react';
import SeccionGif from './components/SeccionGif';
import Buscador from './components/Buscador';

function App() {
	//State Global
	const [terminos, setTerminos] = useState(['Gif']);

	return (
		<div className='App'>
			<h1 className='titulo-app'>Encuentra un GIF</h1>
			<Buscador setTerminos={setTerminos} />
			{terminos.map((termino) => (
				<div
					className='contenido'
					/* evitando que se duplique la llave si se realiza la misma busqueda de un termino */
					key={termino + (Math.random() * 100000).toFixed(0)}
				>
					<h1 className='titulo-seccion'>{termino}</h1>
					<SeccionGif
						/* evitando que se duplique la llave si se realiza la misma busqueda de un termino */
						key={termino + (Math.random() * 100000).toFixed(0)}
						termino={termino}
					/>
				</div>
			))}
		</div>
	);
}

export default App;
