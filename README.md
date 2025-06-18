# React Movie Search Application

This project is a simple React application that allows users to search for movies using an external API. It displays a list of movies based on a search term and provides a user-friendly interface for interaction.

## Features

- Search for movies by title.
- Displays movie cards with basic information (e.g., title, poster).
- Initial default search for "avengers" on page load.
- Loading state indication while fetching data.
- Error handling and display for API request failures or invalid input.

## Project Structure

The main component of this application is `Home.jsx`, located in `src/pages/`.

It serves as the entry point for the movie search functionality. The component manages the search input, handles API requests, and displays the results in a grid format.
It is responsible for rendering the search interface and managing the state of the application. The component uses the `useState` and `useEffect` hooks from React to handle state and side effects, respectively.
