const apiKey = 'enu9gijHelQ4kTUOfyZXFF1YScbEOS6W';

const obtenerGifs = async (categoria, limite) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${categoria}&limit=${limite}`;

  const res = await fetch(url);
  const { data } = await res.json();

  return data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));
};

export { obtenerGifs };
