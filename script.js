const cart = [];

const movieContainer = document.querySelector(".movie-container");

const snackContainer = document.querySelector(".snack-container");

const movieArray = [
  //   {
  //     title: "Die Hard",
  //     year: 1988,
  //     price: 6.5,
  //     genre: "Action",
  //   },
  //   {
  //     title: "Matrix",
  //     year: 1999,
  //     price: 7.0,
  //     genre: "Action",
  //   },
  //   {
  //     title: "GhostBusters",
  //     year: 1984,
  //     price: 6.5,
  //     genre: "Comedy",
  //   },
  //   {
  //     title: "Monty Python and the Holy Grail",
  //     year: 1975,
  //     price: 6.0,
  //     genre: "Comedy",
  //   },
  //   {
  //     title: "Robocop",
  //     year: 1987,
  //     price: 6.5,
  //     genre: "Action",
  //   },
  //   {
  //     title: "Back to the Future",
  //     year: 1985,
  //     price: 6.5,
  //     genre: "Comedy",
  //   },
  //   {
  //     title: "Total Recall",
  //     year: 1990,
  //     price: 7.0,
  //     genre: "Sci-fi",
  //   },
  //   {
  //     title: "Plain Trains and Automobile",
  //     year: 1987,
  //     price: 6.5,
  //     genre: "Comedy",
  //   },
  //   {
  //     title: "First Blood",
  //     year: 1982,
  //     price: 6.5,
  //     genre: "Drama",
  //   },

  //   {
  //     title: "Independence Day",
  //     year: 1996,
  //     price: 7.0,
  //     genre: "Sci-fi",
  //     description:
  //   },
  {
    title: "The Breakfast Club",
    year: 1985,
    price: 6.5,
    genre: "Comedy",
    image: "assets/breakfastclub.png",
    description:
      "Five disparate high school students meet in Saturday detention, and discover they have a lot more in common than they thought.",
  },
  {
    title: "American Psycho",
    year: 2000,
    price: 7.5,
    genre: "Horror",
    image: "assets/americanpsycho.png",
    description:
      "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.",
  },
  {
    title: "Gladiator",
    year: 2000,
    price: 7.5,
    genre: "Drama",
    image: "assets/gladiator.png",
    description:
      "Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
  },
  {
    title: "Se7en",
    year: 1995,
    price: 7.0,
    genre: "Horror",
    image: "assets/se7en.png",
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
  },
  {
    title: "Alien",
    year: 1979,
    price: 6.0,
    genre: "Sci-fi",
    image: "assets/alien.png",
    description:
      "An isolated crew on a remote spaceship is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
  },
  {
    title: "Dirty Dancing",
    year: 1987,
    price: 6.5,
    genre: "Romance",
    image: "assets/dirty-dancing.png",
    description:
      "Expecting the usual tedium that accompanies a summer in the Catskills with her family, 17-year-old Frances 'Baby' Houseman is surprised to find herself stepping into the shoes of a professional hoofer—and unexpectedly falling in love.",
  },
  {
    title: "Grease",
    year: 1979,
    price: 6.0,
    genre: "Romance",
    image: "assets/grease.png",
    description:
      "Australian good girl Sandy and greaser Danny fell in love over the summer. But when they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance despite their eccentric friends?",
  },
  {
    title: "Jurrassic Park",
    year: 1993,
    price: 7.0,
    genre: "Sci-fi",
    image: "assets/jurassicpark.png",
    description:
      "A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. However, the park is anything but amusing as the security systems go off-line and the dinosaurs escape.",
  },
  {
    title: "Clueless",
    year: 1995,
    price: 6.0,
    genre: "Comedy",
    image: "assets/clueless.png",
    description:
      "Shallow, rich and socially successful Cher is at the top of her Beverly Hills high school's pecking scale.  Cher realizes that her disapproving ex-stepbrother was right about how misguided she was - and falls for him.",
  },
  {
    title: "Unbreakable",
    year: 2000,
    price: 6.0,
    genre: "Thriller",
    image: "assets/unbreakable.png",
    description:
      "A man learns something extraordinary about himself after a devastating accident.",
  },
];
const addMovie = (array, title, year, price, genre) => {
  const newMovie = {
    title,
    year,
    price,
    genre,
    description,
  };
  return array.push(newMovie);
};

console.log(movieArray);

movieArray.forEach((item) => {
  const newMovie = document.createElement("div");
  newMovie.classList.add("movie");
  const newMovieTitle = document.createElement("p");
  newMovieTitle.classList.add("title");
  newMovieTitle.textContent = item.title;
  const newMovieYear = document.createElement("p");
  newMovieYear.classList.add("year");
  newMovieYear.textContent = item.year;
  const newMoviePrice = document.createElement("p");
  newMoviePrice.classList.add("movie-price");
  newMoviePrice.textContent = `$${item.price}`;
  const newMovieGenre = document.createElement("p");
  newMovieGenre.classList.add("genre");
  newMovieGenre.textContent = item.genre;
  const newMovieDescription = document.createElement("p");
  newMovieDescription.classList.add("movie-description");
  newMovieDescription.textContent = item.description;
  const newMovieImage = document.createElement("img");
  newMovieImage.src = item.image;
  const newMovieButton = document.createElement("button");
  newMovieButton.classList.add("movie-button");
  newMovie.append(
    newMovieTitle,
    newMovieYear,
    newMoviePrice,
    newMovieGenre,
    newMovieDescription,
    newMovieImage,
    newMovieButton
  );
  movieContainer.append(newMovie);
});

const snackArray = [
  {
    brand: "Gushers",
    price: 2.75,
    calories: 240,
    image: "assets/gushers.png",
    description:
      "Fruits? Nah, spoil yourself with some Gushers, and let the taste of fruit explode in your mouth!",
  },
  {
    brand: "Warheads Sour Candy",
    price: 1.5,
    calories: 50,
    image: "assets/warheads.png",
    description:
      "Best paired with our comedies, Warheads will bring the joy and delight to your laughter-filled movie experience.  ",
  },
  {
    brand: "Big League Chew",
    price: 1.75,
    calories: 50,
    image: "assets/bigleague.png",
    description:
      "Enjoy the 1980s with the classic, flavorful bubble gum bursting with an array of flavors.",
  },
  {
    brand: "FunDip",
    price: 2.0,
    calories: 92,
    image: "assets/fundip.png",
    description: "The most complicated way to ingest sugar imaginable.",
  },
  {
    brand: "Gobstoppers",
    price: 2.25,
    calories: 120,
    image: "assets/gobstopper.png",
    description: "A rainbow of flavor that lasts forever and ever.",
  },
];
//   {
//     brand: "Kettlecorn",
//     price: 2.25,
//     calories:
//   },
//   {
//     brand: "Voodoo Chips",
//     price: 2.25,
//     calories:
//   },
//   {
//     brand: "Funyons",
//     price: 2.25,
//     calories:
//   },
//   {
//     brand: "Kit-Kat",
//     price: 2.25,
//     calories:
//   },
//   {
//     brand: "Doritos",
//     price: 2.25,
//     calories:
//   },
// ];

snackArray.forEach((item) => {
  const newSnack = document.createElement("div");
  newSnack.classList.add("snack");
  const newSnackBrand = document.createElement("p");
  newSnackBrand.classList.add("brand");
  newSnackBrand.textContent = item.brand;
  const newSnackPrice = document.createElement("p");
  newSnackPrice.classList.add("snack-price");
  newSnackPrice.textContent = `$${item.price}`;
  const newSnackCalories = document.createElement("p");
  newSnackCalories.classList.add("calories");
  newSnackCalories.textContent = item.calories;
  const newSnackDescription = document.createElement("p");
  newSnackDescription.classList.add("snack-description");
  newSnackDescription.textContent = item.description;
  const newSnackImage = document.createElement("img");
  newSnackImage.src = item.image;
  const newSnackButton = document.createElement("button");
  newSnackButton.classList.add("snack-button");
  newSnack.append(
    newSnackBrand,
    newSnackPrice,
    newSnackCalories,
    newSnackDescription,
    newSnackImage,
    newSnackButton
  );
  snackContainer.append(newSnack);
});

const addSnack = (array, brand, price, calories, description) => {
  const newSnack = {
    brand,
    price,
    calories,
    description,
  };
  return array.push(newSnack);
};

// Able to calculate subtotal, sales tax, and total
// Function takes an array of snack/movies objects and tax percentage of 0.06, or whatever we choose.
//
//Give the subtotal, sales tax, and the total.
//add to HTML (<p class="subTotal"></p>), creat a class for each, then document.querySelector(".salesText").textContent = calculations.salesText

// Cart Modal Appears
const calculateCartCosts = (itemsArray, taxPercentage) => {
  let subtotal = 0;
  let salesTax = 0;
  let total = 0;
  for (const item of itemsArray) {
    subtotal += item.price;
  }
  salesTax = Math.round(subtotal * taxPercentage * 100) / 100;
  total = subtotal + salesTax;
  return { subtotal: subtotal, salesTax: salesTax, total: total };
};
const calculations = calculateCartCosts(snackArray, 0.06);
console.log(calculations.subtotal);
