import React from 'react';
import './Card.css';
const BSAE_URL = 'https://image.tmdb.org/t/p/original/';

const Card = ({ movie }) => {
  const imageUrl = `${BSAE_URL}${movie.backdrop_path || movie.poster_path}`;

  return (
    <div className="card">
      <img
        src={imageUrl}
        alt={movie.title || movie.original_name}
        loading="lazy"
      />
      <p className="overview">{movie.overview}</p>
      <h2>{movie.title || movie.original_name}</h2>
      <p className="card__stats">
        {movie.release_date}{' '}
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="thumb-up w-6 h-6"
        >
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
        </svg>
        {movie.vote_count}
      </p>
    </div>
  );
};

export default Card;
