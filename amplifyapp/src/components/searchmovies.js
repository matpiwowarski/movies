import React, { Component } from "react";
import Genres from "./genres";
import Phrase from "./phrase";

class SearchMovies extends Component {
  render() {
    return (
      <div>
        <div className="form-label-group">
          <Genres updateGenres={this.props.updateGenres} />
        </div>
        <div className="form-label-group">
          <Phrase updatePhrase={this.props.updatePhrase} />
        </div>
      </div>
    );
  }
}

export default SearchMovies;
