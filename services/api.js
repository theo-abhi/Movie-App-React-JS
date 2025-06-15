const API_KEY = "d495b7b7";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  );
  //http://www.omdbapi.com/?apikey=d495b7b7&s=avenger

  const data = await response.json();
  console.log(data.Search);
  return data.Search;
};
