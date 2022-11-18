import React, {useState} from 'react';
import {FilmCard} from "../../types";

interface MovieFormFProps {
  onSubmit: (newMovie: FilmCard) => void;
}

const MovieFormF: React.FC<MovieFormFProps> = ({onSubmit}) => {
  const [movie, setMovie] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovie(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      title: movie,
    });
    setMovie('')
  };


  return (
    <form
      className="input-group mb-3"
      onSubmit={onFormSubmit}>
      <input
        type="text"
        id="title"
        name="title"
        value={movie}
        onChange={onInputChange}
        className="form-control"
        placeholder="Title of the film"/>
      <button
        className="btn btn-dark"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default MovieFormF;