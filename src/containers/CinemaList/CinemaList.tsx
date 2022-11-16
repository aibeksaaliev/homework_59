import React, {Component} from 'react';
import './CinemaList.css';
import MovieForm from "../../components/MovieForm/MovieForm";
import MovieCard from "../../components/MovieCard/MovieCard";
import {FilmCard} from "../../types";

interface State {
  movies: FilmCard[];
}

class CinemaList extends Component<{}, State> {
  state: State = {
    movies: []
  };

  addMovie = (newMovie: FilmCard) => {
    this.setState({movies: [...this.state.movies, newMovie]})
  }

  render() {
    return (
      <div className="d-flex flex-column text-center">
        Cinema List
        <MovieForm onSubmit={this.addMovie}/>
        {this.state.movies.map(movie => {
          return <MovieCard key={movie.id} movie={movie}/>
        })}
      </div>
    );
  }
}

export default CinemaList;