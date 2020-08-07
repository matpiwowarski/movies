import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
import SearchMovies from './components/searchmovies';

class App extends Component {
  
  state = {
    movies: [],
    phrase: "",
    genres: [1],
  }

  updatePhrase = (e) =>{
    this.setState({phrase: e })
  }

  search = () => {
    fetch('https://li7tyqc3cj.execute-api.eu-central-1.amazonaws.com/movies/autocomplete?genres=' + this.state.genres.join() 
    + '&phrase=' + this.state.phrase)
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
        <div><SearchMovies updatePhrase={this.updatePhrase}/></div>
        <button onClick={this.search}>Search</button>
        <div><Movies movies={this.state.movies}/></div>
      </div>
    )
  }
}

export default App;