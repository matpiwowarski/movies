import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import SearchMovies from "./components/searchmovies";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    movies: [],
    phrase: "",
    genres: [],
    isFetched: false,
  };

  updatePhrase = (e) => {
    this.setState({ phrase: e });
  };

  updateGenres = (e) => {
    this.setState({ genres: e.map((e) => e.value) });
  };

  search = (event) => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://li7tyqc3cj.execute-api.eu-central-1.amazonaws.com/movies/autocomplete?genres=" +
        this.state.genres.join() +
        "&phrase=" +
        this.state.phrase
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data });
      })
      .catch(console.log);

    this.setState({ isFetched: true });
    event.preventDefault();
  };

  render() {
    const isFetched = this.state.isFetched;
    let moviesPanel;
    if (isFetched) {
      moviesPanel = <Movies movies={this.state.movies} />;
    } else {
      moviesPanel = null;
    }

    return (
      <div className="container-fluid" style={{ backgroundColor: "#d92027" }}>
        <div className="row no-gutter">
          <div className="d-md-flex col-md-4 col-lg-6 bg-image justify-content-center">
            {moviesPanel}
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3
                      className="login-heading mb-4"
                      style={{ color: "#ff9234" }}
                    >
                      Find your favourite movies!
                    </h3>
                    <form>
                      <SearchMovies
                        updatePhrase={this.updatePhrase}
                        updateGenres={this.updateGenres}
                      />

                      <button
                        style={{
                          color: "#d92027",
                          backgroundColor: "#ffcd3c",
                          borderColor: "#ff9234",
                        }}
                        className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                        onClick={this.search}
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
