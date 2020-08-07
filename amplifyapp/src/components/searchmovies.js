import React, { Component } from 'react';
import Genres from './genres';
import Phrase from './phrase';

class SearchMovies extends Component {

    render() {
        return (
          <div>
            <div><Phrase updatePhrase={this.props.updatePhrase}/></div>
            <div><Genres /></div>
          </div>
        )
      }
}

export default SearchMovies