// Task 1: Basic Setup
console.log("Welcome to the Community Portal");
window.onload = () => alert("Page fully loaded");

// Task 2: Data Types & Operators
const events = [
  { name: "Music Fest", date: "2025-08-10", category: "Music", seats: 20 },
  { name: "Workshop on Baking", date: "2025-06-15", category: "Workshop", seats: 0 },
  { name: "Local Art Expo", date: "2025-09-01", category: "Art", seats: 15 },
];

// Task 5: Object with Constructor
class Event {
  constructor(name, date, category, seats) {
    this.name = name;
    this.date = date;
    this.category = category;
    this.seats = seats;
  }
}
Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const eventObjects = events.map(e => new Event(e.name, e.date, e.category, e.seats));

// Task 6: Array Methods
const musicEvents = events.filter(e => e.category === "Music");
const eventCards = events.map(e => `${e.name} on ${e.date}`);

// Task 4: Functions & Closures
function addEvent(event) {
  events.push(event);
}

function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (event && event.seats > 0) {
    event.seats--;
    console.log(`Registered for ${event.name}. Remaining seats: ${event.seats}`);
  } else {
    console.error("Event is full or not found");
  }
}

function filterEventsByCategory(category, callback) {
  const result = category === "All" ? events : events.filter(e => e.category === category);
  callback(result);
}

const registrationTracker = (() => {
  const counts = {};
  return (category) => {
    counts[category] = (counts[category] || 0) + 1;
    return counts[category];
  };
})();

// Task 7: DOM Manipulation
const eventsContainer = document.getElementById("eventsContainer");
function renderEvents(eventList) {
  eventsContainer.innerHTML = "";
  eventList.forEach(event => {
    if (new Date(event.date) > new Date() && event.seats > 0) {
      const card = document.createElement("div");
      card.textContent = `${event.name} - ${event.date} (${event.seats} seats)`;
      const btn = document.createElement("button");
      btn.textContent = "Register";
      btn.onclick = () => {
        try {
          registerUser(event.name);
          renderEvents(events);
        } catch (e) {
          console.error("Error during registration", e);
        }
      };
      card.appendChild(btn);
      eventsContainer.appendChild(card);
    }
  });
}

// Task 8: Event Handling
document.getElementById("categoryFilter").onchange = (e) => {
  filterEventsByCategory(e.target.value, renderEvents);
};

document.getElementById("search").addEventListener("keydown", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = events.filter(ev => ev.name.toLowerCase().includes(query));
  renderEvents(filtered);
});

// Task 10: Modern JS Features
const logEventDetails = ({ name, date }) => {
  console.log(`Event: ${name}, Date: ${date}`);
};
events.forEach(e => logEventDetails(e));

const clonedEvents = [...events];

// Task 9 & 12: Async JS & Fetch
async function fetchEvents() {
  try {
    document.body.insertAdjacentHTML("beforeend", "<p id='loading'>Loading...</p>");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("Fetched mock data", data);
  } catch (err) {
    console.error("Fetch error", err);
  } finally {
    document.getElementById("loading")?.remove();
  }
}
fetchEvents();

// Task 11: Forms
const form = document.getElementById("registrationForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const { name, email, eventSelect } = form.elements;
  if (!name.value || !email.value || !eventSelect.value) {
    alert("All fields are required");
    return;
  }

  // Task 12: AJAX POST Simulation
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        event: eventSelect.value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    setTimeout(() => {
      alert("Successfully registered!");
    }, 1000);
  } catch (error) {
    alert("Registration failed.");
  }
});

// Task 3: Loop and Conditionals
events.forEach(ev => {
  if (new Date(ev.date) > new Date() && ev.seats > 0) {
    console.log(`Upcoming Event: ${ev.name}`);
  }
});

// Task 13: Debugging
console.log("Form and fetch setup complete.");

// Task 14: jQuery + Framework Note
$('#eventSelect').append(events.map(e => `<option value="${e.name}">${e.name}</option>`));
$('#registerBtn').click(() => {
  $('#eventsContainer').fadeOut().fadeIn();
});
console.log("Framework tip: React improves state management and UI reactivity");

renderEvents(events);
