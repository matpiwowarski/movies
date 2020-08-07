import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
import Genres from './components/genres';

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
        <div><Genres /></div>
        <div><Movies movies={this.state.movies}/></div>
      </div>
    )
  }
}

export default App;