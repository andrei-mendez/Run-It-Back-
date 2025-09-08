function sayYes() {
  alert("💖 She said yes!!");
}

function sayNo() {
  alert("💔 At least I tried...");
}

// Timeline event data
const events = {
  1: {
    title: "Date 1 - Coffee Shop ☕",
    img: "images/coffee.jpg",
    desc: "Our very first date at the coffee shop. I was so nervous but it was amazing."
  },
  2: {
    title: "Date 2 - Movie Night 🎬",
    img: "images/movie.jpg",
    desc: "We watched that funny movie and couldn’t stop laughing."
  },
  3: {
    title: "Date 3 - Amusement Park 🎡",
    img: "images/park.jpg",
    desc: "The roller coasters, cotton candy, and your smile — unforgettable."
  },
  4: {
    title: "Date 4 - Beach Walk 🌊",
    img: "images/beach.jpg",
    desc: "Walking by the ocean, just talking about life."
  },
  5: {
    title: "Date 5 - Concert 🎶",
    img: "images/concert.jpg",
    desc: "Our favorite band live — I’ll never forget singing along with you."
  }
};

// Show modal with event data
function showEvent(num) {
  const modal = document.getElementById("eventModal");
  document.getElementById("eventTitle").innerText = events[num].title;
  document.getElementById("eventImage").src = events[num].img;
  document.getElementById("eventDescription").innerText = events[num].desc;
  modal.style.display = "flex";
}

// Close modal
function closeModal() {
  document.getElementById("eventModal").style.display = "none";
}
