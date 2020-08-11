using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Amazon.Lambda.Core;
using MoviesLambda.Model;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace MoviesLambda
{
    public class Function
    {
        private readonly Movie[] moviesDatabase = new[]
        {
            new Movie { Title = "Moon", Genres = new[] { 6 } },
            new Movie { Title = "Pulp Fiction", Genres = new[] { 1, 3, 5 } },
            new Movie { Title = "Pirates of the Caribbean", Genres = new[] { 1 } },
            new Movie { Title = "The Lord of the Rings", Genres = new[] { 2, 3 } }
        };

        public List<Movie> MoviesAutocomplete(AutocompleteQuery input, ILambdaContext context)
        {
            if (string.IsNullOrWhiteSpace(input.Phrase))
            {
                return new List<Movie>();
            }

            var title = input.Phrase.ToLower().Trim();
            var foundMovies = this.moviesDatabase.Where(x => x.Title.ToLower().Contains(title));

            if (input.Genres?.Any() ?? false)
            {
                foundMovies =
                   foundMovies.Where(movie => input.Genres.Any(genre => movie.Genres.Contains(genre)));
            }

            return foundMovies.ToList();
        }
    }
}
