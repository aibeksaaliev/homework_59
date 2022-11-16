import React, {Component} from 'react';
import {FilmCard} from "../../types";

interface MovieCardProps {
  movie: FilmCard;
}

class MovieCard extends Component<MovieCardProps> {
  render() {
    return (
      <div className="d-flex justify-content-between">
        <input className="border-0 text-capitalize" type="text" defaultValue={this.props.movie.title}/>
        <button>Delete</button>
      </div>
    );
  }
}

export default MovieCard;