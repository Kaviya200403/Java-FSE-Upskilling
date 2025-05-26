
console.log("Welcome to the Community Portal");
window.onload = () => alert("Page fully loaded");


const events = [
  { name: "Music Night", date: "2025-07-01", category: "Music", seats: 10 },
  { name: "Baking Workshop", date: "2025-06-15", category: "Workshop", seats: 0 },
  { name: "Painting Class", date: "2025-08-20", category: "Art", seats: 5 },
];

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

const musicOnly = events.filter(e => e.category === "Music");
const formatted = events.map(e => `Event: ${e.name}`);

const tracker = (() => {
  const count = {};
  return (cat) => {
    count[cat] = (count[cat] || 0) + 1;
    return count[cat];
  };
})();


function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (event && event.seats > 0) {
    event.seats--;
    tracker(event.category);
    alert(`Registered for ${event.name}`);
    renderEvents(events);
  } else {
    alert("Event full or not found");
  }
}


function renderEvents(list) {
  const container = $("#eventsContainer");
  container.empty();
  list.forEach(event => {
    if (new Date(event.date) > new Date() && event.seats > 0) {
      const card = $(`
        <div>
          <strong>${event.name}</strong> - ${event.date} (${event.seats} seats)
          <button class='registerBtn'>Register</button>
        </div>
      `);
      card.find('.registerBtn').click(() => registerUser(event.name));
      container.append(card);
    }
  });
}


$("#search").on("keydown", () => {
  const val = $("#search").val().toLowerCase();
  const filtered = events.filter(ev => ev.name.toLowerCase().includes(val));
  renderEvents(filtered);
});
$("#categoryFilter").on("change", function () {
  const cat = this.value;
  const filtered = cat === "All" ? events : events.filter(e => e.category === cat);
  renderEvents(filtered);
});


async function mockFetch() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log("Mock API loaded", data.slice(0, 1));
  } catch (err) {
    console.error("Error loading API", err);
  }
}
mockFetch();

$(document).ready(() => {
  
  console.log($("#hello").text());

  
  $("h1").text("Welcome to the Event Portal");
  $("#hideP").click(() => $("p").eq(1).hide());

 
  $("#toggleBoxes").click(() => $(".box").toggle());
  $("#slideBoxes").click(() => $(".box").slideUp().delay(1000).slideDown());

  
  $("#taskForm").submit(function (e) {
    e.preventDefault();
    const val = $("#taskInput").val();
    if (val) {
      $("#taskList").append(`<li>${val}</li>`);
      $("#taskInput").val('');
    }
  });
  $("#clearTasks").click(() => $("#taskList").empty());

  $("#colorBtn").click(() => $("#colorBox").css("background-color", "red"));
  $("#colorBox").dblclick(() => $("#colorBox").css("background-color", "white"));

  
  $("#hoverDiv")
    .mouseenter(() => $("#hoverDiv").css("background", "lightblue"))
    .mouseleave(() => $("#hoverDiv").css("background", ""))
    .click(() => alert("Clicked!"))
    .dblclick(() => alert("Double Clicked!"));
  $("#keypressInput").keypress(() => alert("Key pressed"));

  renderEvents(events);
});
