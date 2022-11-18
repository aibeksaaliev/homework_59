import React, {Component} from 'react';
import {FilmCard} from "../../types";

interface MovieCardProps {
  movie: FilmCard;
  removeMovie: (id: string) => void;
  onEdit: (id: string, value: string) => void;
}

class MovieCard extends Component<MovieCardProps> {

  shouldComponentUpdate(nextProps: Readonly<MovieCardProps>): boolean {
    return nextProps.movie.title !== this.props.movie.title;
  }

  render() {
    return (
      <div className="d-flex justify-content-between mb-2">
        <input
          className="text-capitalize form-control"
          type="text"
          value={this.props.movie.title}
          onChange={(e) => this.props.onEdit(this.props.movie.id, e.target.value)}/>
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.removeMovie(this.props.movie.id)}>Delete</button>
      </div>
    );
  }
}

export default MovieCard;