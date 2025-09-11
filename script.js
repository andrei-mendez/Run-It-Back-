// ===== events data (mapped to the filenames you supplied) =====
const events = {
  1:  { title: "Whiskey Dicks",            img: "images/1.PNG",        desc: "The very first time we hung out — Whiskey Dicks night ❤️" },
  2:  { title: "Your Birthday Party",      img: "images/2.JPG",        desc: "Celebrating your birthday with laughs, music, and friends 🎉" },
  3:  { title: "Pickleball + Whiskeys",    img: "images/IMG_1711.jpg", desc: "Played pickleball then headed back for round two!" },
  4:  { title: "Squid Game Watch Party",   img: "images/3.jpg",        desc: "Snacks, games, and way too much laughter at the watch party." },
  5:  { title: "Two Man in the Backyard",  img: "images/IMG_2193.jpg", desc: "Hanging out with Alan & Paris in the backyard jamming." },
  6:  { title: "Whiskeys Again lol",       img: "images/4.jpg",        desc: "Because one Whiskey Dicks night wasn’t enough." },
  7:  { title: "Fourth of July Fireworks", img: "images/5.JPG",        desc: "Lit up the night sky together on the 4th ❤️" },
  8:  { title: "Sleepover at Yours?",      img: "images/IMG_2194.jpg", desc: "The night we stayed up way too late just talking." },
  9:  { title: "First Date & Kiss",        img: "images/6.JPG",        desc: "Our first real date — and the kiss I’ll never forget." },
  10: { title: "Spikeball + Lottery",       img: "images/7.jpg",        desc: "Fun games and silly scratch-offs that made us laugh." },
  11: { title: "Second Date",              img: "images/8.jpg",        desc: "A night that made things feel even more real." },
  12: { title: "Third Date (video)",       img: "images/11.MOV",       desc: "Driving, music, and endless conversations." },
  13: { title: "Vegas Day 1",              img: "images/9.JPG",        desc: "First day in Vegas, so much excitement and energy." },
  14: { title: "Day Club / Diplo",         img: "images/SAM_1634.JPG", desc: "Pool parties, dancing, and living it up in Vegas." },
  15: { title: "Marshmello",               img: "images/10.jpg",       desc: "That night Marshmello’s set had us both hyped." },
  16: { title: "Zedd + Saying Goodbye",    img: "images/12.jpg",       desc: "Bittersweet — ending with Zedd and a tough goodbye." }
};

// ===== helper to detect video files =====
function isVideoFile(path) {
  if (!path) return false;
  const ext = path.split('.').pop().toLowerCase();
  return ['mp4','webm','ogg','mov','m4v'].includes(ext);
}

// ===== show modal for event id =====
function showEvent(id) {
  const event = events[id];
  if (!event) return;

  const modal = document.getElementById("eventModal");
  const titleEl = document.getElementById("eventTitle");
  const descEl  = document.getElementById("eventDescription");

  if (titleEl) titleEl.innerText = event.title || "";
  if (descEl)  descEl.innerText  = event.desc  || "";

  // ensure modal-content exists
  const content = modal.querySelector(".modal-content");

  // create media-wrapper if it doesn't exist
  let mediaWrapper = content.querySelector(".media-wrapper");
  if (!mediaWrapper) {
    mediaWrapper = document.createElement("div");
    mediaWrapper.className = "media-wrapper";
    const descNode = content.querySelector("#eventDescription");
    if (descNode) content.insertBefore(mediaWrapper, descNode);
    else content.appendChild(mediaWrapper);
  }

  // clear previous media
  mediaWrapper.innerHTML = "";

  // inject appropriate media element
  if (event.img && isVideoFile(event.img)) {
    const video = document.createElement("video");
    video.src = event.img;
    video.controls = true;
    video.playsInline = true;
    video.autoplay = false;
    video.setAttribute("preload", "metadata");
    video.style.maxWidth = "100%";
    video.style.maxHeight = "80vh";
    mediaWrapper.appendChild(video);
  } else if (event.img) {
    const img = document.createElement("img");
    img.src = event.img;
    img.alt = event.title || "Event";
    img.loading = "lazy";
    img.onerror = () => { console.warn("Modal image failed to load:", event.img); img.style.display = "none"; };
    mediaWrapper.appendChild(img);
  }

  // show modal
  if (modal) {
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
  }
}

// ===== hide modal =====
function closeModal() {
  const modal = document.getElementById("eventModal");
  if (!modal) return;
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

// Close modal when clicking outside modal-content
window.addEventListener("click", (e) => {
  const modal = document.getElementById("eventModal");
  if (!modal) return;
  if (e.target === modal) closeModal();
});

// ===== timeline line updater =====
function updateTimelineLine() {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;

  // create line element if missing
  let line = timeline.querySelector('.timeline-line');
  if (!line) {
    line = document.createElement('div');
    line.className = 'timeline-line';
    // put it at the very start of timeline so it sits behind items
    timeline.insertBefore(line, timeline.firstChild);
  }

  // Use the full scrollHeight (content height) so the line reaches last item
  const fullHeight = timeline.scrollHeight;
  line.style.height = fullHeight + 'px';

  // Also ensure the line's left position is centered if layout changes
  // (CSS handles left:50% but set as inline for safety on some browsers)
  line.style.left = '50%';
  line.style.transform = 'translateX(-50%)';
  line.style.top = '0';
}

// run updater when DOM ready, on resize and when images load
document.addEventListener('DOMContentLoaded', () => {
  // initial hide modal
  const m = document.getElementById("eventModal");
  if (m) { m.style.display = "none"; m.setAttribute("aria-hidden", "true"); }

  // update the line initially (may be small until images load)
  updateTimelineLine();

  // when any timeline image loads or errors, recalc line (images affect content height)
  const timelineImgs = document.querySelectorAll('.timeline img');
  timelineImgs.forEach(img => {
    img.addEventListener('load', updateTimelineLine);
    img.addEventListener('error', updateTimelineLine);
  });

  // also update after a short delay (useful if images cached but rendering delayed)
  setTimeout(updateTimelineLine, 250);
});

// update on window resize (recalculate)
window.addEventListener('resize', () => {
  // small delay to allow layout to settle
  clearTimeout(window._timelineResizeTimer);
  window._timelineResizeTimer = setTimeout(updateTimelineLine, 120);
});

// keyboard ESC to close modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Circle thumbnail fallback: hide <img> and set parent .circle background if needed
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".timeline-item .circle img").forEach(img => {
    // If already loaded and good, nothing to do
    if (img.complete && img.naturalWidth > 0) return;

    img.addEventListener("error", () => {
      const parent = img.closest(".circle");
      if (!parent) return;
      img.style.display = "none";
      const src = img.getAttribute("src");
      if (src) {
        parent.style.backgroundImage = `url("${src}")`;
        parent.style.backgroundSize = "cover";
        parent.style.backgroundPosition = "center";
      } else {
        parent.style.backgroundColor = "#666";
      }
      // After fallback, update line in case layout changed
      updateTimelineLine();
    });

    img.addEventListener("load", () => {
      img.style.display = "";
      updateTimelineLine();
    });

    if (img.complete && img.naturalWidth === 0) {
      img.dispatchEvent(new Event("error"));
    }
  });
});

// optional helpers used on other pages
function sayYes() { window.location.href = "final.html"; }
function sayNo()  { window.location.href = "index.html"; }
