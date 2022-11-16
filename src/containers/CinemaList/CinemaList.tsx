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

  deleteMovie = (id: string) => {
    const moviesCopy = {...this.state};
    moviesCopy.movies.map(movie => {
      if (id === movie.id) {
        const index: number = moviesCopy.movies.indexOf(movie);
        moviesCopy.movies.splice(index, 1);
      }
      return moviesCopy;
    });
    this.setState(moviesCopy);
  };

  editMovie = (id: string, value: string) => {
    const moviesCopy = {...this.state};
    moviesCopy.movies.map(movie => {
      if (id === movie.id) {
        movie.title = value;
      }
      return moviesCopy;
    });
    this.setState(moviesCopy);
  }

  render() {
    return (
      <div className="d-flex flex-column text-center">
        Cinema List
        <MovieForm onSubmit={this.addMovie}/>
        {this.state.movies.map(movie => {
          return <MovieCard
            key={movie.id}
            movie={movie}
            removeMovie={this.deleteMovie}
            onEdit={this.editMovie}/>
        })}
      </div>
    );
  }
}

export default CinemaList;