$(document).ready(() => {
  const mockEvents = [
    { id: 1, title: "Tech Innovators Meetup", date: "2025-06-10", city: "New York" },
    { id: 2, title: "AI & ML Conference", date: "2025-05-15", city: "Chicago" },
    { id: 3, title: "Frontend Bootcamp", date: "2025-07-01", city: "Los Angeles" }
  ];

  function renderEvents(events) {
    $("#eventsContainer").empty();
    events.forEach(e => {
      $("#eventsContainer").append(`
        <div>
          <h3>${e.title}</h3>
          <p>${e.city} - ${e.date}</p>
        </div>
      `);
      $("select[name='event']").append(`<option value="${e.id}">${e.title}</option>`);
    });
  }

  renderEvents(mockEvents);

  $("#registrationForm").submit(function (e) {
    e.preventDefault();
    const name = $(this).find("input[name='name']").val();
    $("#confirmation").text(`Thank you for registering, ${name}!`);
    this.reset();
  });

  $("#feedbackForm").submit(function (e) {
    e.preventDefault();
    const rating = $(this).find("input[name='rating']").val();
    alert(`Feedback submitted with rating: ${rating}`);
    this.reset();
  });
});
