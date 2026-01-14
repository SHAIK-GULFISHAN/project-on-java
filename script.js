let users = {};
let cartTotal = 0;

// Show pages
function showRegister() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerBox").style.display = "block";
}

function showLogin() {
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}

// Register
function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    if (user === "" || pass === "") {
        alert("Fill all fields");
        return;
    }

    users[user] = pass;
    alert("Registration Successful");
    showLogin();
}

// Login
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (users[user] === pass) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("productBox").style.display = "block";
    } else {
        alert("Invalid Login");
    }
}

// Cart
function addToCart(price) {
    cartTotal += price;
    document.getElementById("total").innerText = cartTotal;
}

// Logout
function logout() {
    cartTotal = 0;
    document.getElementById("total").innerText = 0;
    document.getElementById("productBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}
