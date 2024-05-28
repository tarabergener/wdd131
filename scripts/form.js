const products = [
    {
      id: fc-1888,
      name: "flux capacitor",
      avg-rating: 4.5
    },
    {
      id: fc-2050,
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: fs-1987,
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: ac-2000,
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: jj-1969,
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

const option = document.querySelector('.option')

products.forEach(function(product) {
  option.textContent(product.name);
});


const reviews = document.querySelector('.reviews');

let reviewsArray = Number(window.localStorage.getItem("reviews-ls"));

if (reviewsArray !== 0) {
  reviews.textContent = "Number of Reviews: " + reviewsArray;
}
else {
  reviews.textContent = "Yay! We got our first review!";
}

reviewsArray++;

localStorage.setItem("reviews-ls", reviewsArray);