import React from 'react';
import {FilmCard} from "../../types";

interface MovieCardFProps {
  movie: FilmCard;
  removeMovie: React.MouseEventHandler;
  onEdit: React.ChangeEventHandler<HTMLInputElement>;
}

const MovieCardF: React.FC<MovieCardFProps> = ({movie, removeMovie, onEdit}) => {
  return (
    <div className="d-flex justify-content-between">
      <input
        className="border-0 text-capitalize"
        type="text"
        value={movie.title}
        onChange={onEdit}/>
      <button
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