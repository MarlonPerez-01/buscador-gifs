import React from 'react';
import PropTypes from 'prop-types';

const Gif = ({ gif, termino }) => {
  let { title, url } = gif;
  title.trim() === '' && (title = `Gif de ${termino}`);

  return (
    <div className="gif-container">
      <img src={url} alt={title} />
      <p className="gif-titulo">{title}</p>
    </div>
  );
};

Gif.propTypes = {
  gif: PropTypes.object.isRequired,
};

export default Gif;
