import React from 'react';

const MovieFormF = () => {
  return (
    <form
      className="input-group mb-3">
      <input
        type="text"
        id="title"
        name="title"
        className="form-control"
        placeholder="Title of the film"/>
      <button
        className="btn btn-outline-secondary"
        type="submit">
        Add
      </button>
    </form>
  );
};

export default MovieFormF;