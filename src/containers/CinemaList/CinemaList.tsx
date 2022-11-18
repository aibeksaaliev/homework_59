import React, {Component} from 'react';
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
    const copyMovies = [...this.state.movies];
    const index = this.state.movies.findIndex(item => item.id === id);
    copyMovies.splice(index, 1);
    this.setState({movies: copyMovies});
  };

  editMovie = (id: string, value: string) => {
    const copyMovies = [...this.state.movies];
    const index = this.state.movies.findIndex(item => item.id === id);
    const copyMovie = {...this.state.movies[index]};
    copyMovie.title = value;
    copyMovies[index] = copyMovie;
    this.setState({movies: copyMovies});
  }


  render() {
    return (
      <div className="d-flex flex-column text-center p-3">
        <span className="text-uppercase mb-2">Cinema List (Class)</span>
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