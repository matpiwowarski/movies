import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
import Genres from './components/genres';
import Phrase from './components/phrase';

class App extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    fetch('https://li7tyqc3cj.execute-api.eu-central-1.amazonaws.com/movies/autocomplete?genres=1,3&phrase=the')
    .then(res => res.json())
    .then((data) => {
      this.setState({ movies: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        <h1>Search for movies</h1>
        <div><Phrase /></div>
        <div><Genres /></div>
        <div><Movies movies={this.state.movies}/></div>
      </div>
    )
  }
}

export default App;