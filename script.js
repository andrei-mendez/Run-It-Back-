const events = {
  1: {
    title: "Whiskey Dicks",
    img: "images/1.PNG",
    desc: "The very first time we hung out — Whiskey Dicks night ❤️"
  },
  2: {
    title: "Your Birthday Party",
    img: "images/2.JPG",
    desc: "Celebrating your birthday with laughs, music, and friends 🎉"
  },
  3: {
    title: "Pickleball + Whiskeys Again",
    img: "images/IMG_1711.jpg",
    desc: "Played pickleball then headed back to Whiskeys for round two!"
  },
  4: {
    title: "Squid Game Watch Party",
    img: "images/3.jpg",
    desc: "Snacks, games, and way too much laughter at the watch party."
  },
  5: {
    title: "Two Man in the Backyard",
    img: "images/IMG_2193.jpg",
    desc: "Hanging out with Alan & Paris in the backyard jamming."
  },
  6: {
    title: "Whiskeys Again lol",
    img: "images/4.jpg",
    desc: "Because one Whiskey Dicks night wasn’t enough."
  },
  7: {
    title: "Fourth of July Fireworks",
    img: "images/5.JPG",
    desc: "Lit up the night sky together on the 4th ❤️"
  },
  8: {
    title: "Sleepover at Yours???",
    img: "images/IMG_2194.jpg",
    desc: "The night we stayed up way too late just talking."
  },
  9: {
    title: "First Date & Kiss",
    img: "images/6.JPG",
    desc: "Our first real date — and the kiss I’ll never forget."
  },
  10: {
    title: "Spikeball + Lottery Tickets",
    img: "images/7.jpg",
    desc: "Fun games and silly scratch-offs that made us laugh."
  },
  11: {
    title: "Second Date",
    img: "images/8.jpg",
    desc: "A night that made things feel even more real."
  },
  12: {
    title: "Third Date",
    img: "images/11.MOV",
    desc: "Driving, music, and endless conversations."
  },
  13: {
    title: "Vegas Day 1",
    img: "images/9.JPG",
    desc: "First day in Vegas, so much excitement and energy."
  },
  14: {
    title: "Day Club / Diplo",
    img: "images/SAM_1634.JPG",
    desc: "Pool parties, dancing, and living it up in Vegas."
  },
  15: {
    title: "Marshmello",
    img: "images/10.jpg",
    desc: "That night Marshmello’s set had us both hyped."
  },
  16: {
    title: "Zedd + Saying Goodbye",
    img: "images/12.jpg",
    desc: "Bittersweet — ending with Zedd and a tough goodbye."
  }
};

function showEvent(id) {
  const event = events[id];
  if (!event) return;

  document.getElementById("eventTitle").innerText = event.title;
  document.getElementById("eventImage").src = event.img;
  document.getElementById("eventDescription").innerText = event.desc;

  document.getElementById("eventModal").style.display = "flex"; // show modal
}

function closeModal() {
  document.getElementById("eventModal").style.display = "none"; // hide modal
}

// Close modal when clicking outside content
window.onclick = function(e) {
  const modal = document.getElementById("eventModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// Ensure modal is hidden on page load
window.onload = function() {
  document.getElementById("eventModal").style.display = "none";
};
