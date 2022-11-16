import React, {Component} from 'react';
import './CinemaList.css';
import MovieForm from "../../components/MovieForm/MovieForm";
import MovieCard from "../../components/MovieCard/MovieCard";

class CinemaList extends Component {
  render() {
    return (
      <div className="d-flex flex-column text-center">
        Cinema List
        <MovieForm/>
        <MovieCard/>
      </div>
    );
  }
}

export default CinemaList;