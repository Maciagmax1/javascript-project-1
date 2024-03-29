const cart = [];

const movieContainer = document.querySelector(".movie-container");

const snackContainer = document.querySelector(".snack-container");

const cartProducts = document.querySelector(".cart-products");

const productContainer = document.querySelector(".product-container");

const checkoutButton = document.querySelector(".checkout-button");

const cashBtn = document.querySelector(".cash-btn");

const cardBtn = document.querySelector(".card-btn");

const subtotalDisplay = document.querySelector(".subtotal");

const cashForm = document.querySelector(".cash");

const cardForm = document.querySelector(".credit");

const placeOrderBtns = document.querySelectorAll(".order-button");

const cashReceiptInfo = document.querySelectorAll(".cash-receipt-info");

const cardReceiptInfo = document.querySelectorAll(".card-receipt-info");

const receiptContainer = document.querySelector(".receipt-container");

const cashReceiptContainer = document.querySelector(".cash-receipt-container");

const cardReceiptContainer = document.querySelector(".card-receipt-container");

const cashDisplay = document.querySelector(".cash-off");

const cardDisplay = document.querySelector(".card-off");

let userInputAmountTendered = null;

// receipt variables
const cashSubTotal = document.querySelector(".cash-sub-total");

const cashTaxTotal = document.querySelector(".cash-tax-total");

const cashTotal = document.querySelector(".cash-total");

const cashTendered = document.querySelector(".cash-tendered");

const change = document.querySelector(".change");

const cardSubTotal = document.querySelector(".card-sub-total");

const cardTaxTotal = document.querySelector(".card-tax-total");

const cardTotal = document.querySelector(".card-total");

const calculateCartCosts = (itemsArray, taxPercentage) => {
  let subtotal = 0;
  let salesTax = 0;
  let total = 0;
  for (const item of itemsArray) {
    subtotal += item.price;
  }
  salesTax = Math.round(subtotal * taxPercentage * 100) / 100;
  total = subtotal + salesTax;
  return {
    subtotal: subtotal,
    salesTax: salesTax,
    total: total,
  };
};
const calculations = calculateCartCosts(cart, 0.06);

const movieArray = [
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
    title: "Dirty Dancing",
    year: 1987,
    price: 6.5,
    genre: "Romance",
    image: "assets/dirty-dancing.png",
    description:
      "Expecting the usual tedium that accompanies a summer in the Catskills with her family, 17-year-old Frances 'Baby' Houseman is surprised to find herself stepping into the shoes of a professional hoofer—and unexpectedly falling in love.",
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

const snackArray = [
  {
    title: "Gushers",
    price: 2.75,
    calories: "240 calories",
    image: "assets/gushers.png",
    description:
      "Fruits? Nah, spoil yourself with some Gushers, and let the taste of fruit explode in your mouth!",
  },
  {
    title: "Warheads Sour Candy",
    price: 1.5,
    calories: "50 calories",
    image: "assets/warheads.png",
    description:
      "Best paired with our comedies, Warheads will bring the joy and delight to your laughter-filled movie experience.  ",
  },
  {
    title: "Big League Chew",
    price: 1.75,
    calories: "50 calories",
    image: "assets/bigleague.png",
    description:
      "Enjoy the 1980s with the classic, flavorful bubble gum bursting with an array of flavors.",
  },
  {
    title: "FunDip",
    price: 2.0,
    calories: "92 calories",
    image: "assets/fundip.png",
    description: "The most complicated way to ingest sugar imaginable.",
  },
  {
    title: "Gobstoppers",
    price: 2.25,
    calories: "120 calories",
    image: "assets/gobstopper.png",
    description: "A rainbow of flavor that lasts forever and ever.",
  },
];

// console.log(movieArray);

// displays movies on menu
movieArray.forEach((item, index) => {
  cartProducts.innerHTML = "";
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
  // newMovieButton.classList.add("movie-button", "add-to-cart");
  newMovieButton.setAttribute("data-category", "movie");
  newMovieButton.setAttribute("data-index", index);
  newMovieButton.innerText = "ADD TO CART";

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

productContainer.addEventListener("click", (e) => {
  if (e.target.getAttribute("data-category") === "movie") {
    const index = e.target.getAttribute("data-index");
    cart.push(movieArray[index]);
  } else if (e.target.getAttribute("data-category") === "snack") {
    const index = e.target.getAttribute("data-index");
    cart.push(snackArray[index]);
  }
});

// displays snacks on the menu
snackArray.forEach((item, index) => {
  const newSnack = document.createElement("div");
  newSnack.classList.add("snack");
  const newSnackTitle = document.createElement("p");
  newSnackTitle.classList.add("title");
  newSnackTitle.textContent = item.title;
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
  // newSnackButton.classList.add("snack-button", "add-to-cart");
  newSnackButton.setAttribute("data-category", "snack");
  newSnackButton.setAttribute("data-index", index);
  newSnackButton.innerText = "ADD TO CART";
  newSnack.append(
    newSnackTitle,
    newSnackPrice,
    newSnackCalories,
    newSnackDescription,
    newSnackImage,
    newSnackButton
  );
  snackContainer.append(newSnack);
});

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

const addSnack = (array, title, price, calories, description) => {
  const newSnack = {
    title,
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
//add to HTML (<p class="subTotal"></p>), create a class for each, then document.querySelector(".salesText").textContent = calculations.salesText

// Cart Modal Appears

// Calculations should be a result of calculateCartCosts function.
//May want to add prompt, but works well.

const processCashPayment = (amountTendered, calculations) => {
  return Math.round((amountTendered - calculations.total) * 100) / 100;
};
processCashPayment(40, calculations);
console.log(processCashPayment(40, calculations));

//code for modal functionality, powered by w3schools
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let sum = 0;
let total = null;
let taxAmount = sum * 0.06;
let changeValue = 0;
const printCart = () => {
  cartProducts.innerHTML = "";
  sum = 0;
  total = null;
  taxAmount = sum * 0.06;
  cart.forEach((item, index) => {
    sum += item.price;
    const productImage = document.createElement("img");
    productImage.src = item.image;
    productImage.style.height = "50px";
    productImage.style.width = "auto";
    const details = `${item.title} - $${item.price}`;
    const detailParagraph = document.createElement("p");
    detailParagraph.innerText = details;
    const product = document.createElement("div");
    product.className = "cart-product";
    const newCartButton = document.createElement("button");
    newCartButton.classList.add("remove-item");
    newCartButton.textContent = "Remove from cart";
    product.setAttribute("data-index", index);
    product.append(productImage);
    product.append(detailParagraph);
    product.append(newCartButton);
    cartProducts.append(product);
  });
  total = Math.round((sum + sum * 0.06) * 100) / 100;
  taxAmount = Math.round(sum * 0.06 * 100) / 100;
  subtotalDisplay.textContent = `Subtotal: $${sum}`;
  cashSubTotal.textContent = `Subtotal: $${sum}`;
  cashTaxTotal.textContent = `Tax: $${taxAmount}`;
  cashTotal.textContent = `Total: $${total}`;
  cashTendered.textContent = `Cash Tendered: $${userInputAmountTendered}`;
  change.textContent = `Change: $${changeValue}`;
  cardTaxTotal.textContent = `Tax: $${taxAmount}`;
  cardSubTotal.textContent = `Subtotal: $${sum}`;
  cardTotal.textContent = `Total: $${total}`;
};
// When the user clicks the button, open the modal

btn.addEventListener("click", (e) => {
  modal.style.display = "block";
  printCart();
});

cartProducts.addEventListener("click", (e) => {
  cartProducts.innerHTML = "";
  if (e.target.classList.contains("remove-item")) {
    const index = e.target.parentNode.getAttribute("data-index");
    cart.splice(index, 1);
    printCart();
  }
});

checkoutButton.addEventListener("click", (e) => {
  e.preventDefault;
  cardBtn.style.display = "block";
  cashBtn.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

cashBtn.addEventListener("click", (e) => {
  if ((cardForm.style.display = "none")) {
    cashForm.style.display = "block";
    cardBtn.style.display = "none";
    cashBtn.style.display = "none";
  }
});

cardBtn.addEventListener("click", (e) => {
  if ((cashForm.style.display = "none")) {
    cardForm.style.display = "block";
    cardBtn.style.display = "none";
    cashBtn.style.display = "none";
  }
});

cashForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userInputAmountTendered = document.querySelector("#amount-tendered").value;
  changeValue = Math.round((userInputAmountTendered - total) * 100) / 100;
  cashDisplay.style.display = "block";
  cashForm.style.display = "none";
  checkoutButton.style.display = "none";
  printCart();
});

cardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  cardDisplay.style.display = "block";
  cardForm.style.display = "none";
  checkoutButton.style.display = "none";
  printCart();
});
