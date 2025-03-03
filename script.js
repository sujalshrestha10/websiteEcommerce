const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    img: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Product 2",
    price: 24.99,
    img: "https://images.pexels.com/photos/1460036/pexels-photo-1460036.jpeg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 29.99,
    img: "https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "Product 4",
    price: 14.99,
    img: " https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    id: 4,
    name: "Product 4",
    price: 14.99,
    img: "https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    id: 4,
    name: "Product 4",
    price: 14.99,
    img: "https://images.pexels.com/photos/14127005/pexels-photo-14127005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    id: 4,
    name: "Product 4",
    price: 14.99,
    img: "https://images.pexels.com/photos/989938/pexels-photo-989938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    id: 4,
    name: "Product 4",
    price: 14.99,
    img: "https://images.pexels.com/photos/3558802/pexels-photo-3558802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    id: 4,
    name: "Product 4",
    price: 14.99,
    img: "https://images.pexels.com/photos/1235692/pexels-photo-1235692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    id: 4,
    name: "Product 4",
    price: 14.99,
    img: " https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const productList = document.getElementById("product-list");
const cartIcon = document.getElementById("cart-icon");
const cartDropdown = document.getElementById("cart-dropdown");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

let cart = [];
let totalAmount = 0;

// Render Products
products.forEach((product) => {
  productList.innerHTML += `
        <div class="product">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
});

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  totalAmount += product.price;

  cartItemsList.innerHTML += `<li>${product.name} - $${product.price.toFixed(
    2
  )}</li>`;
  cartTotal.innerText = totalAmount.toFixed(2);
  cartCount.innerText = cart.length;
}

// Toggle Cart Dropdown
cartIcon.addEventListener("click", () => {
  cartDropdown.style.display =
    cartDropdown.style.display === "block" ? "none" : "block";
});
