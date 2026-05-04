
// Navbar scroll effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Initialize map
const map = L.map('map').setView([26.7570, 94.2030], 9);

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Locations
const locations = [
  { lat: 27.4728, lng: 94.9110, title: "Dibrugarh, Chowkidenghee", img: "/images/Dibrugarh 1.jpg" },
  { lat: 27.4955, lng: 94.9035, title: "Dibrugarh, Market", img: "/images/Dibrugarh 2.webp" },
  

  { lat: 26.7570, lng: 94.2030, title: "Jorhat, Main Town", img: "/images/Jorhat 1.webp" },
  { lat: 26.7805, lng: 94.2152, title: "Jorhat, Market", img: "/images/Jorhat 2.jpg" },

  { lat: 27.1875, lng: 94.9155, title: "Moran, Highway", img: "/images/moran 1.jpg" },

  { lat: 27.2504, lng: 94.7802, title: "ABC Road", img: "/images/Board 1.jpg" },
  { lat: 27.4958, lng: 94.9501, title: "DOG Town", img: "/images/Board 2.avif" },
  { lat: 27.3001, lng: 94.7203, title: "EkanBerh", img: "/images/Board 3.webp" }
];

// Card reference
const infoCard = document.getElementById("infoCard");

// Add markers
locations.forEach(loc => {
  const marker = L.marker([loc.lat, loc.lng]).addTo(map);

  marker.on('click', () => {
    document.getElementById("cardTitle").innerText = loc.title;
    document.getElementById("cardImg").src = loc.img;
    infoCard.style.display = "block";
  });
});

// Booking modal
function openBooking() {
  document.getElementById("bookingModal").style.display = "flex";
}

function closeBooking() {
  document.getElementById("bookingModal").style.display = "none";
}



// MODAL

const range = document.getElementById("daysRange");
const input = document.getElementById("daysInput");
const price = document.getElementById("price");

const ratePerDay = 2000;

// Sync range → input
range.oninput = () => {
  input.value = range.value;
  updatePrice();
};

// Sync input → range
input.oninput = () => {
  range.value = input.value;
  updatePrice();
};

// Price calculation
function updatePrice() {
  price.innerText = range.value * ratePerDay;
}

// Initialize
updatePrice();