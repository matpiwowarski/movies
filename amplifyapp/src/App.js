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
  };

  updatePhrase = (e) => {
    this.setState({ phrase: e });
  };

  updateGenres = (e) => {
    this.setState({ genres: e.map((e) => e.value) });
  };

  search = () => {
    fetch(
      "https://li7tyqc3cj.execute-api.eu-central-1.amazonaws.com/movies/autocomplete?genres=" +
        this.state.genres.join() +
        "&phrase=" +
        this.state.phrase
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data });
      })
      .catch(console.log);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    <form>
                      <div className="form-label-group">// input email</div>

                      <div className="form-label-group">// input password</div>

                      <div className="custom-control custom-checkbox mb-3">
                        // checkbox
                      </div>
                      <button
                        className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                        type="submit"
                      >
                        Sign in
                      </button>
                      <div className="text-center">
                        <a className="small" href="#">
                          Forgot password?
                        </a>
                      </div>
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
