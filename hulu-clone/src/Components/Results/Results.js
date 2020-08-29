import React, { useContext } from 'react';
import Card from '../Card/Card.js';
import './Results.css';
import { AppContext } from './../../AppContext';
import useFetch from '../../Hooks/useFetch';
import requests from '../../Api/requests.js';

const Results = () => {
  const { type } = useContext(AppContext);
  const { isLoading, data, error } = useFetch(requests[type]);
  if (error)
    return <code className="error">{JSON.stringify(error, null, 4)}</code>;
  return (
    <section className="results">
      {isLoading
        ? '...'
        : data?.results?.map((movie) => <Card movie={movie} key={movie.id} />)}
    </section>
  );
};

export default Results;
