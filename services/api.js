const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key
// Make sure to keep your API key secure and not expose it in public repositories
// You can get an API key from https://www.omdbapi.com/apikey.aspx

const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data.Search);
  return data.Search;
};
