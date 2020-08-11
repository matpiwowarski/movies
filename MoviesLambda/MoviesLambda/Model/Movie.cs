using System;
using System.Collections.Generic;
using System.Text;

namespace MoviesLambda.Model
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int[] Genres { get; set; }
    }
}
