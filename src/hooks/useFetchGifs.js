import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { obtenerGifs } from '../helpers/fetchApi';

const useFetchGifs = (termino) => {
  const [state, setState] = useState({
    data: [],
    cargando: true,
  });

  useEffect(() => {
    obtenerGifs(termino, 20).then((data) =>
      setState({ data, cargando: false })
    );
  }, [termino]);

  return state;
};

useFetchGifs.propTypes = {
  termino: PropTypes.string.isRequired,
};

export default useFetchGifs;
