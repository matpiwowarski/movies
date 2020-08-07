import React, { Component } from 'react';
import Genres from './genres';
import Phrase from './phrase';

class SearchMovies extends Component {

    shoot() {
        alert("Great Shot!");
      }

    render() {
        return (
          <div>
            <div><Phrase /></div>
            <div><Genres /></div>
            <button onClick={this.shoot}>Take the shot!</button>
          </div>
        )
      }

}

export default SearchMovies