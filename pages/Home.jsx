import "../css/Home.css";
import MovieCard from "../components/MovieCard/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies } from "../services/api"; // Assuming you have an API service to fetch movies

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await searchMovies("avengers"); // Default search term
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setError("Please enter a search term");
      return;
    }
    if (loading) return; // Prevent multiple submissions while loading
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchTerm);
      setMovies(searchResults);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
    setSearchTerm(""); // Clear the search input after submission
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            // movie.title.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
