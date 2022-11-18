import React from 'react';
import {FilmCard} from "../../types";

interface MovieCardFProps {
  movie: FilmCard;
  removeMovie: React.MouseEventHandler;
  onEdit: React.ChangeEventHandler<HTMLInputElement>;
}

const MovieCardF: React.FC<MovieCardFProps> = ({movie, removeMovie, onEdit}) => {
  return (
    <div className="d-flex justify-content-between mb-2">
      <input
        className="text-capitalize form-control"
        type="text"
        value={movie.title}
        onChange={onEdit}/>
      <button
        className="btn btn-dark"
        onClick={removeMovie}
      >
        Delete
      </button>
    </div>
  );
};

const compareProps = (prevProps: MovieCardFProps, nextProps: MovieCardFProps) => {
  return prevProps.movie.title === nextProps.movie.title;
}

export default React.memo(MovieCardF, compareProps);