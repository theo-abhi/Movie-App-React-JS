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

movie-react-project/ ├── public/ │ └── ... (public assets) ├── src/ │ ├── components/ │ │ └── MovieCard/ │ │ └── MovieCard.jsx // Component to display individual movie details │ ├── css/ │ │ └── Home.css // Styles for the Home page │ ├── pages/ │ │ └── Home.jsx // Main page component for searching and displaying movies │ ├── services/ │ │ └── api.js // Service for API calls (e.g., fetching movies) │ ├── App.js // Main application component (likely routes to Home) │ ├── index.js // Entry point of the React application │ └── ... (other files) ├── .gitignore ├── package.json └── README.md

## Key Components and Logic

### `src/pages/Home.jsx`

This is the primary component responsible for:

1.  **State Management:**

    - `searchTerm`: Stores the current value of the search input.
    - `movies`: An array to store the movie data fetched from the API.
    - `loading`: A boolean to indicate whether data is currently being fetched.
    - `error`: Stores error messages to be displayed to the user.

2.  **Data Fetching (`useEffect` hook):**

    - On initial component mount, it fetches a default list of movies (e.g., "avengers") using the `searchMovies` function from `src/services/api.js`.
    - It handles loading states and potential errors during this initial fetch.

3.  **Search Functionality (`handleSearch` function):**

    - Triggered when the search form is submitted.
    - Prevents submission if the search term is empty or if a request is already in progress.
    - Calls the `searchMovies` API with the `searchTerm`.
    - Updates the `movies` state with the search results.
    - Manages loading and error states during the search.
    - Clears the search input field after a successful search.

4.  **Rendering:**
    - Displays a search form with an input field and a submit button.
    - Shows an error message if the `error` state is set.
    - Displays a "Loading..." message when `loading` is true.
    - Renders a grid of `MovieCard` components if movies are successfully fetched and `loading` is false. Each `MovieCard` receives movie data as props.

### `src/components/MovieCard/MovieCard.jsx`

This component is responsible for displaying individual movie information, such as its poster, title, and year. It receives `movie` data as a prop from the `Home` component.

### `src/services/api.js`

This file likely contains the `searchMovies` function, which makes an HTTP request to an external movie API (e.g., OMDB API) to fetch movie data based on a query.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed on your machine.
- An API key for the movie database you intend to use (if required by `src/services/api.js`). You might need to configure this in `api.js` or as an environment variable.

### Installation

1.  **Clone the repository (if applicable):**

    ```bash
    git clone <repository-url>
    cd movie-react-project
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    This will typically open the application in your default web browser at `http://localhost:3000`.

## How it Works

1.  When the `Home` page loads, the `useEffect` hook triggers an initial API call to fetch movies with a default search term (e.g., "avengers").
2.  The fetched movies are stored in the `movies` state, and the page re-renders to display them using `MovieCard` components.
3.  The user can type a movie title into the search input and click the "Search" button.
4.  The `handleSearch` function is called, which prevents empty searches and multiple submissions.
5.  It makes an API call with the user's `searchTerm`.
6.  The `movies` state is updated with the new results, and the UI re-renders to show the new list of movies.
7.  Loading and error states are managed throughout these processes to provide feedback to the user.

## Customization

- **Styling:** Update styles in `src/css/Home.css` or component-specific CSS files.
- **Movie Card Display:** Modify `src/components/MovieCard/MovieCard.jsx` to change how individual movie details are presented.
