import React, {useState} from 'react';
import {FilmCard} from "../../types";

interface MovieFormFProps {
  onSubmit: (newMovie: FilmCard) => void;
}

const MovieFormF: React.FC<MovieFormFProps> = ({onSubmit}) => {
  const [movie, setMovie] = useState<FilmCard>({
    id: "",
    title: ""
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovie(prevState => ({...prevState, id: Math.random().toString(), title: e.target.value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({...movie});
  };


  return (
    <form
      className="input-group mb-3"
      onSubmit={onFormSubmit}>
      <input
        type="text"
        id="title"
        name="title"
        value={movie.title}
        onChange={onInputChange}
        className="form-control"
        placeholder="Title of the film"/>
      <button
        className="btn btn-outline-secondary"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default MovieFormF;