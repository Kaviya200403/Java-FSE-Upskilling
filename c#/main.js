$(document).ready(() => {
  
  const events = ["Tech Meetup", "Workshop", "Concert"];
  events.forEach(e => {
    $("#eventSelect").append(`<option value="${e}">${e}</option>`);
  });

  $("#eventForm").submit(function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const event = $("#eventSelect").val();

    $.post("http://localhost:5000/api/register", {
      name, email, event
    }).done(data => {
      $("#confirmation").html(`<p>Thank you, ${name}, for registering for ${event}!</p>`);
    }).fail(() => {
      alert("Failed to register.");
    });
  });
});
