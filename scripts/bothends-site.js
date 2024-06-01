const navmenu = document.querySelector('.navmenu');
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
	navmenu.classList.toggle('open');
	hamburger.classList.toggle('open');
});

const inventory = [
	{
	  productName: "Green Bay Packers",
      category: "Necktie",
	  price: 40,
      color: "green",
      imageUrl: "images/tie-green-bay.jpg"
    },
	{
	  productName: "Lavender Lane",
      category: "Necktie",
	  price: 30,
      color: "purple",
	  imageUrl: "images/tie-lavender.jpg"
    },
	{
	  productName: "Celebration Ave",
      category: "Necktie",
	  price: 35,
      color: "black",
	  imageUrl: "images/tie-other.jpg"
	},
	{
	  productName: "Purple Jungle",
      category: "Necktie",
	  price: 35,
      color: "purple",
	  imageUrl: "images/tie-purple.jpg"
    },
	{
	  productName: "Teal Tiger",
      category: "Necktie",
	  price: 30,
      color: "blue",
	  imageUrl: "images/tie-teal.jpg"
	},
	{
	  productName: "Pure White",
      category: "Necktie",
	  price: 35,
      color: "white",
	  imageUrl: "images/tie-white.jpg"
	},
	{
	  productName: "Yellow Stripe",
      category: "Necktie",
	  price: 30,
      color: "yellow",
	  imageUrl: "images/tie-yellow.jpg"
	},
	{
	  productName: "",
      category: "Socks",
  	  price: 20,
  	  imageUrl: ""
    },	
	{
      productName: "",
      category: "Socks",
      price: 20,
      imageUrl: ""
    },		
    {
      productName: "",
      category: "Socks",
      price: 20,
      imageUrl: ""
    },	
  ];

displayInventory(inventory);


const tiesPage = document.querySelector('#ties');
tiesPage.addEventListener("click", () => (
	displayInventory(inventory.filter(product => product.category == "Necktie")
)));

const socksPage = document.querySelector('#socks');
socksPage.addEventListener("click", () => (
	displayInventory(inventory.filter(product => product.category == "Socks"))
));

const setsPage = document.querySelector('#sets');
setsPage.addEventListener("click", () => (
	displayInventory(inventory.filter(product => product.category == "Gift Set"))
));

const redPage = document.querySelector('#red');
redPage.addEventListener("click", () => (
	displayInventory(inventory.filter(product => product.color == "red"))
));

const bluePage = document.querySelector('#blue');
bluePage.addEventListener("click", () => (
	displayInventory(inventory.filter(product => product.color == "blue"))
));

const blackPage = document.querySelector('#black');
blackPage.addEventListener("click", () => (
	displayInventory(inventory.filter(product => product.color == "black"))
));

const greenPage = document.querySelector('#green');
greenPage.addEventListener("click", () => (
	displayInventory(inventory.filter(product => product.color == "green"))
));

const whitePage = document.querySelector('#white');
whitePage.addEventListener("click", () => (
	displayInventory(inventory.filter(product => product.color == "white"))
));

const purplePage = document.querySelector('#purple');
purplePage.addEventListener("click", () => (
	displayInventory(inventory.filter(product => product.color == "purple"))
));

const yellowPage = document.querySelector('#yellow');
yellowPage.addEventListener("click", () => (
	displayInventory(inventory.filter(product => product.color == "yellow"))
));

const underPage = document.querySelector('#under');
underPage.addEventListener("click", () => (
	displayInventory(inventory.filter(product => product.price <= 20))
));

const thirtyPage = document.querySelector('#thirty');
thirtyPage.addEventListener("click", () => (
	displayInventory(inventory.filter(product => product.price > 20 < 30))
));

const fortyPage = document.querySelector('#forty');
fortyPage.addEventListener("click", () => (
	displayInventory(inventory.filter(product => product.price > 30 < 40))
));

const overPage = document.querySelector('#over');
overPage.addEventListener("click", () => (
	displayInventory(inventory.filter(product => product.price > 40))
));

const allPage = document.querySelector('#all');
allPage.addEventListener("click", () => (
	displayInventory(inventory)	
));

function displayInventory(productInfo) {

	document.querySelector(".container").innerHTML = "";
	productInfo.forEach(product => {

		let tile = document.createElement("section");
		let name = document.createElement("h3");
        let category = document.createElement("p");
		let price = document.createElement("p");
		let image = document.createElement("img");

		name.textContent = product.productName;
		category.innerHTML = `<p id="dedication">Category: ${product.category}</p>`;
		price.innerHTML = `<p id="size">Price: $${product.price}</p>`;
		image.setAttribute("src", product.imageUrl);
		image.setAttribute("alt", `${product.productName}`);
		image.setAttribute("loading", "lazy");
		

		tile.appendChild(name);
		tile.appendChild(price);
		tile.appendChild(image);

		document.querySelector(".container").appendChild(tile)
	});
}