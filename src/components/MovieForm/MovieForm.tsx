import React, {Component} from 'react';
import {FilmCard} from "../../types";

interface MovieFormProps {
  onSubmit: (newMovie: FilmCard) => void;
}


class MovieForm extends Component<MovieFormProps> {
  state: FilmCard = {
    id: "",
    title: ""
  };

  onInputChange (e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    this.setState(prevState => ({...prevState, title: value, id: Math.random().toString()}));
  }

  onFormSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.onSubmit(
      {id: this.state.id, title: this.state.title}
    )
    this.setState({id: "", title: ""});
  }

  render() {
    return (
      <form
        className="input-group mb-3"
        onSubmit={(e) => this.onFormSubmit(e)}>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => this.onInputChange(e)}
          value={this.state.title}
          className="form-control"
          placeholder="Title of the film"/>
        <button
          className="btn btn-outline-secondary"
          type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default MovieForm;