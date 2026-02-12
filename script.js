// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  if (!name || price <= 0) {
    alert("Invalid product data!");
    return;
  }

  cart.push({
    name: name,
    price: price
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  const msg = document.getElementById("message");
  if (msg) {
    msg.textContent = name + " added to cart successfully!";
    msg.style.color = "green";
  }
}


//  DISPLAY CART

function displayCart() {
  const cartList = document.getElementById("cart");
  const totalElement = document.getElementById("total");

  if (!cartList || !totalElement) return;

  cartList.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty</li>";
    totalElement.textContent = "Total: $0";
    return;
  }

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    cartList.appendChild(li);
    total += item.price;
  });

  totalElement.textContent = "Total: $" + total;
}


//  CLEAR CART

function clearCart() {
  if (cart.length === 0) {
    alert("Cart is already empty");
    return;
  }

  cart = [];
  localStorage.removeItem("cart");
  displayCart();
}

  // CONTACT FORM VALIDATION

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg").value.trim();
  const feedback = document.getElementById("formMsg");

  if (name === "" || email === "" || msg === "") {
    feedback.textContent = "All fields are required!";
    feedback.style.color = "red";
    return false;
  }

  if (!email.includes("@")) {
    feedback.textContent = "Please enter a valid email!";
    feedback.style.color = "red";
    return false;
  }

  feedback.textContent = "Message sent successfully!";
  feedback.style.color = "green";

  return false;
}


  //  RUN ON PAGE LOAD
displayCart();
