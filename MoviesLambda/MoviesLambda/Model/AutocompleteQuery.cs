using System;
using System.Collections.Generic;
using System.Text;

namespace MoviesLambda.Model
{
    public class AutocompleteQuery
    {
        public string Phrase { get; set; }
        public int[] Genres { get; set; }
    }
}
