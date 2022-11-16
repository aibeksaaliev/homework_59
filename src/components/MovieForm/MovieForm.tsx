import React, {Component} from 'react';

class MovieForm extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title of the film"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"/>
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2">
            Add
          </button>
      </div>
    );
  }
}

export default MovieForm;