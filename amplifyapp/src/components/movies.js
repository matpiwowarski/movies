import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Genres = [
  "Horror",
  "Adventure",
  "Sci-fi",
  "Thriller",
  "Romance",
  "Drama",
];

const Movies = ({ movies }) => {
  return (
    <div>
      <center>
        <h2
          style={{
            color: "#ff9234",
            backgroundColor: "#d92027",
            margin: 10,
            borderColor: "#35d0ba",
          }}
          className="rounded-pill movie-label login-heading mb-4"
        >
          Movie list:
        </h2>
      </center>
      {movies.map((movies) => (
        <div
          class="card-color"
          style={{
            margin: 10,
          }}
        >
          <div class="card-body">
            <h5 class="card-title" style={{ color: "#ff9234" }}>
              {movies.Title}
            </h5>
            {movies.Genres.map((genres) => (
              <h6 class="card-subtitle mb-2" style={{ color: "#ffcd3c" }}>
                {Genres[genres - 1]}
              </h6>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
