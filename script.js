const movieArray = [
  {
    title: "Die Hard",
    year: 1988,
    price: 6.5,
    genre: "Action",
  },
  {
    title: "Matrix",
    year: 1999,
    price: 7.0,
    genre: "Action",
  },
  {
    title: "GhostBusters",
    year: 1984,
    price: 6.5,
    genre: "Comedy",
  },
  {
    title: "Monty Python and the Holy Grail",
    year: 1975,
    price: 6.0,
    genre: "Comedy",
  },
  {
    title: "Robocop",
    year: 1987,
    price: 6.5,
    genre: "Action",
  },
  {
    title: "Back to the Future",
    year: 1985,
    price: 6.5,
    genre: "Comedy",
  },
  {
    title: "Total Recall",
    year: 1990,
    price: 7.0,
    genre: "Sci-fi",
  },
  {
    title: "Plain Trains and Automobile",
    year: 1987,
    price: 6.5,
    genre: "Comedy",
  },
  {
    title: "First Blood",
    year: 1982,
    price: 6.5,
    genre: "Drama",
  },
  {
    title: "The Breakfast Club",
    year: 1985,
    price: 6.5,
    genre: "Comedy",
  },
  {
    title: "Independence Day",
    year: 1996,
    price: 7.0,
    genre: "Sci-fi",
  },
  {
    title: "American Psycho",
    year: 2000,
    price: 7.5,
    genre: "Horror",
  },
  {
    title: "Gladiator",
    year: 2000,
    price: 7.5,
    genre: "Drama",
  },
  {
    title: "Se7en",
    year: 1995,
    price: 7.0,
    genre: "Horror",
  },
  {
    title: "Alien",
    year: 1979,
    price: 6.0,
    genre: "Sci-fi",
  },
  {
    title: "Dirty Dancing",
    year: 1987,
    price: 6.5,
    genre: "Romance",
  },
  {
    title: "Grease",
    year: 1979,
    price: 6.0,
    genre: "Romance",
  },
  {
    title: "Jurrassic Park",
    year: 1993,
    price: 7.0,
    genre: "Sci-fi",
  },
  {
    title: "Clueless",
    year: 1995,
    price: 6.0,
    genre: "Comedy",
  },
  {
    title: "Unbreakable",
    year: 2000,
    price: 6.0,
    genre: "Thriller",
  },
];
const addMovie = (array, title, year, price, genre) => {
  const newMovie = {
    title,
    year,
    price,
    genre,
  };
  return array.push(newMovie);
};

const snackArray = [];
