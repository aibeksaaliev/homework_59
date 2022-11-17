import React, {Component} from 'react';
import {FilmCard} from "../../types";

interface MovieCardProps {
  movie: FilmCard;
  removeMovie: (id: string) => void;
  onEdit: (id: string, value: string) => void;
}

interface State {
  movie: FilmCard
}

class MovieCard extends Component<MovieCardProps, State> {
  state: State = {
    movie: {
      id: this.props.movie.id,
      title: this.props.movie.title
    }
  }

  shouldComponentUpdate(nextProps: Readonly<MovieCardProps>, nextState: Readonly<State>): boolean {
    return nextProps.movie.title !== nextState.movie.title;
  }


  render() {
    return (
      <div className="d-flex justify-content-between">
        <input
          className="border-0 text-capitalize"
          type="text"
          value={this.props.movie.title}
          onChange={(e) => this.props.onEdit(this.props.movie.id, e.target.value)}/>
        <button onClick={() => this.props.removeMovie(this.props.movie.id)}>Delete</button>
      </div>
    );
  }
}

export default MovieCard;