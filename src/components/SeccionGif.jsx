import React from 'react';
import PropTypes from 'prop-types';
import Gif from './Gif';
import useFetchGifs from '../hooks/useFetchGifs';
import { nanoid } from 'nanoid';

const SeccionGif = ({ termino }) => {
  const { data: gifs, cargando } = useFetchGifs(termino);

  return (
    <>
      {cargando && <p className="cargando">Cargando...</p>}
      <section key={nanoid()} className="flex-container">
        {gifs.map((gif) => (
          <Gif key={gif.id} gif={gif} termino={termino} />
        ))}
      </section>
    </>
  );
};

SeccionGif.propTypes = {
  termino: PropTypes.string.isRequired,
};

export default SeccionGif;
