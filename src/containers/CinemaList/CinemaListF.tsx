import React, {useEffect, useState} from 'react';
import {FilmCard} from "../../types";
import MovieFormF from "../../components/MovieForm/MovieFormF";
import MovieCardF from "../../components/MovieCard/MovieCardF";

const CinemaListF = () => {

  const getLocal = () => {
    const moviesFromLocal = localStorage.getItem("Movies List");
    const array: FilmCard[] = moviesFromLocal ? JSON.parse(moviesFromLocal) : [];
    return array;
  }

  const [movies, setMovies] = useState(getLocal());

  useEffect(() => {
    localStorage.setItem("Movies List", JSON.stringify(movies));
  }, [movies]);


  const addMovie = (newMovie: FilmCard) => setMovies((prevState: FilmCard[]) => ([...prevState, newMovie]));

  const deleteMovie = (id: string) => {
    setMovies((prev: FilmCard[]) => prev.filter((item) => item.id !== id));
  };

  const editMovie = (id: string, e: string) => {
    setMovies((prev: FilmCard[]) => prev.map((item) => item.id === id ? {
        ...item,
        title: e
      } : item
    ));
  };

  return (
    <div className="d-flex flex-column text-center p-3">
      <span className="text-uppercase mb-2">Cinema List (Function)</span>
      <MovieFormF onSubmit={addMovie}/>
      {movies.map((movie: FilmCard) => {
        return (
          <MovieCardF
            key={movie.id}
            movie={movie}
            removeMovie={() => deleteMovie(movie.id)}
            onEdit={(e: React.ChangeEvent<HTMLInputElement>) => editMovie(movie.id, e.target.value)}
          />
        )
      })}
    </div>
  );
};

export default React.memo(CinemaListF);