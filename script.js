const events = {
  1: {
    title: "Coffee Shop ☕",
    img: "images/coffee.jpg",
    desc: "Our very first coffee shop date ❤️"
  },
  2: {
    title: "Movie Night 🎬",
    img: "images/movie.jpg",
    desc: "We laughed and ate too much popcorn 🍿"
  },
  3: {
    title: "Amusement Park 🎡",
    img: "images/park.jpg",
    desc: "That roller coaster was unforgettable!"
  },
  4: {
    title: "Beach Walk 🌊",
    img: "images/beach.jpg",
    desc: "Peaceful evening by the ocean."
  },
  5: {
    title: "Concert 🎶",
    img: "images/concert.jpg",
    desc: "Danced the night away to our favorite songs 🎤"
  }
};

function showEvent(id) {
  const event = events[id];
  if (!event) return;

  document.getElementById("eventTitle").innerText = event.title;
  document.getElementById("eventImage").src = event.img;
  document.getElementById("eventDescription").innerText = event.desc;

  document.getElementById("eventModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("eventModal").style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function(e) {
  const modal = document.getElementById("eventModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
