import React, {Component} from 'react';

class MovieCard extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between">
        <input className="border-0 text-capitalize" type="text" value="test"/>
        <button>Delete</button>
      </div>
    );
  }
}

export default MovieCard;