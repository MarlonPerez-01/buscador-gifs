import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Buscador = ({ setTerminos }) => {
  const [busqueda, setBusqueda] = useState('');
  const [error, setError] = useState(false);

  //Obteniendo termino de busqueda
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  //Enviando termino de busqueda
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!busqueda) {
      setError(true);
      return;
    }

    setError(false);
    setTerminos((termino) => [busqueda, ...termino]);
    setBusqueda('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-buscar">
        <input
          type="text"
          onChange={handleChange}
          value={busqueda}
          className="txt-busqueda"
          placeholder="Ej. Hola"
        />
        <input type="submit" value="Buscar" className="btn-buscar" />
      </form>
      {error ? (
        <p className="error">No se ha ingresado un término de busqueda</p>
      ) : null}
    </div>
  );
};

Buscador.propTypes = {
  setTerminos: PropTypes.func.isRequired,
};

export default Buscador;
