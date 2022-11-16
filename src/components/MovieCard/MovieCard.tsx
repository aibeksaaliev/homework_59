import React, {Component} from 'react';
import {FilmCard} from "../../types";

interface MovieCardProps {
  movie: FilmCard;
  removeMovie: (id: string) => void;
  onEdit: (id: string, value: string) => void;
}

class MovieCard extends Component<MovieCardProps> {
  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return e.target.value;
  }

  render() {
    return (
      <div className="d-flex justify-content-between">
        <input
          className="border-0 text-capitalize"
          type="text"
          defaultValue={this.props.movie.title}
          onChange={(e) => this.props.onEdit(this.props.movie.id, this.onInputChange(e))}/>
        <button onClick={() => this.props.removeMovie(this.props.movie.id)}>Delete</button>
      </div>
    );
  }
}

export default MovieCard;