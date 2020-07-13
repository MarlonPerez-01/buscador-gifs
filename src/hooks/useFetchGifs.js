import { useState, useEffect } from 'react';
import { obtenerGifs } from '../helpers/fetchApi';

const useFetchGifs = (termino) => {
	const [state, setState] = useState({
		data: [],
		cargando: true
	});

	useEffect(() => {
		obtenerGifs(termino, 20).then((data) =>
			setState({ data, cargando: false })
		);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [termino]);

	return state;
};

export default useFetchGifs;
