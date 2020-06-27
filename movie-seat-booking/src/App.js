import React, { useState, useRef } from 'react';
import movieUtils from './utils/movies';
import Theater from './components/theater/Theater';
import Info from './components/Info/Info';

function App() {
  const [movies, setMovies] = useState(movieUtils.get());
  const [currentMovie, setCurrentMovie] = useState(0);
  const movieSelectRef = useRef(null);

  function chageMovieHandler(e) {
    setCurrentMovie(e.target.value);
  }

  function updateMovie(theaterSeats) {
    movies[currentMovie].theaterSeats = theaterSeats;
    setMovies(movies);
    movieUtils.update(movies);
  }

  return (
    <div className="App">
      <div className="movie-container">
        <label>Pick a movie:</label>
        <select
          id="movie"
          ref={movieSelectRef}
          onChange={chageMovieHandler}
          defaultValue="0"
        >
          {movies.map((movie, i) => (
            <option
              key={movie.id}
              value={i}
            >{`${movie.name} ($${movie.price})`}</option>
          ))}
        </select>
      </div>
      <Info />
      <Theater
        key={movies[currentMovie].id}
        seats={movies[currentMovie].seats}
        price={movies[currentMovie].price}
        theaterSeats={movies[currentMovie].theaterSeats}
        backgroundColor={movies[currentMovie].backgroundColor}
        name={movies[currentMovie].name}
        updateMovie={updateMovie}
      />
    </div>
  );
}

export default App;
