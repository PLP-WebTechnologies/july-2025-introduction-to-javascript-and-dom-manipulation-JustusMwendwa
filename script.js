// ------------------ Part 1: Variables & Conditionals ------------------
let userName = prompt("Enter your name:");
let userAge = parseInt(prompt("Enter your age:"));

if (userAge >= 18) {
  document.getElementById("welcomeMessage").innerText = 
    `Welcome ${userName}, you are old enough to register!`;
} else {
  document.getElementById("welcomeMessage").innerText = 
    `Hi ${userName}, you must be 18+ to register.`;
}

// Discount Example
let purchaseAmount = parseFloat(prompt("Enter your purchase amount:"));
if (purchaseAmount >= 1000) {
  document.getElementById("discountMessage").innerText = 
    `Congrats! You get a 10% discount on KES ${purchaseAmount}.`;
} else {
  document.getElementById("discountMessage").innerText = 
    `Spend at least 1000 KES to earn a discount.`;
}

// ------------------ Part 2: Functions ------------------
function calculateBill() {
  let food = 500;
  let drinks = 200;
  let total = food + drinks;
  document.getElementById("billResult").innerText = 
    `Restaurant Bill: Food = ${food}, Drinks = ${drinks}, Total = ${total}`;
}

function formatName() {
  let rawName = prompt("Enter your full name in lowercase:");
  let formatted = rawName.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  document.getElementById("nameResult").innerText = 
    `Formatted Name: ${formatted}`;
}

// ------------------ Part 3: Loops ------------------
let movies = ["Inception", "Avengers", "Black Panther", "Titanic", "The Batman"];
for (let i = 0; i < movies.length; i++) {
  let li = document.createElement("li");
  li.innerText = movies[i];
  document.getElementById("movieList").appendChild(li);
}

let cartItems = ["Laptop", "Phone", "Headphones", "Keyboard"];
cartItems.forEach(item => {
  let li = document.createElement("li");
  li.innerText = item;
  document.getElementById("cartList").appendChild(li);
});

// ------------------ Part 4: DOM Manipulation ------------------
// 1. Change background color randomly
document.getElementById("colorBtn").addEventListener("click", function() {
  let colors = ["#e74c3c", "#2ecc71", "#9b59b6", "#f1c40f"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// 2. Toggle visibility of secret message
document.getElementById("hideBtn").addEventListener("click", function() {
  let secret = document.getElementById("secret");
  secret.style.display = (secret.style.display === "none") ? "block" : "none";
});

// 3. Add new tasks dynamically
document.getElementById("addTaskBtn").addEventListener("click", function() {
  let newTask = prompt("Enter a new task:");
  if (newTask) {
    let li = document.createElement("li");
    li.innerText = newTask;
    document.getElementById("taskList").appendChild(li);
  }
});
