import React from 'react';
import PropTypes from 'prop-types';
import Gif from './Gif';
/* import { obtenerGifs } from '../helpers/fetchApi'; */
import useFetchGifs from '../hooks/useFetchGifs';

const SeccionGif = ({ termino }) => {
	const { data: gifs, cargando } = useFetchGifs(termino);

	return (
		/*TODO: cambiar el key */
		<>
			{cargando && <p className='cargando'>Cargando...</p>}
			<section key={Math.random()} className='flex-container'>
				{gifs.map((gif) => (
					<Gif key={gif.id} gif={gif} termino={termino} />
				))}
			</section>
		</>
	);
};

SeccionGif.propTypes = {
	termino: PropTypes.string.isRequired
};

export default SeccionGif;
