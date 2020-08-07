import React from 'react'
 
    const Genres = ['Horror', 'Adventure', 'Sci-fi', 'Thriller', 'Romance'];
 
    const Movies = ({ movies }) => {
      return (
        <div>
          <center><h3>Movie List</h3></center>
          {movies.map((movies) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{movies.Title}</h5>
                 {movies.Genres.map((genres) =>
                (<h6 class="card-subtitle mb-2 text-muted">{Genres[genres]}</h6>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    };
 
    export default Movies