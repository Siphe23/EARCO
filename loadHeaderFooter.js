// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // --- Inject header ---
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      updateHeaderForLogin(); // update links if logged in
    });

  // --- Inject footer ---
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
      updateFooterForLogin(); // update links if logged in
    });

  // --- Video play helper ---
  window.playVideo = function() {
    let video = document.getElementById("productVideo");
    if(video) video.play();
  }

  // --- Logout function ---
  window.logout = function() {
    localStorage.removeItem("loggedIn");
    location.href = "index.html";
  }

});

// --- Update header links when logged in ---
function updateHeaderForLogin() {
  const nav = document.getElementById("navMenu");
  if(nav && localStorage.getItem("loggedIn") === "true") {
    nav.innerHTML = `
      <li><a href="index.html">HOME</a></li>
      <li><a href="products.html">ALL PRODUCTS</a></li>
      <li><a href="contact.html">CONTACT</a></li>
      <li><a href="#" onclick="logout()">LOGOUT</a></li>
    `;
  }
}

// --- Update footer links when logged in ---
function updateFooterForLogin() {
  const footer = document.getElementById("footerLinks");
  if(footer && localStorage.getItem("loggedIn") === "true") {
    footer.innerHTML = `
      <a href="products.html">All Products</a>
      <a href="contact.html">Contact</a>
      <a href="#" onclick="logout()">Logout</a>
    `;
  }
}