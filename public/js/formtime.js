$(document).ready(function() {
  // Getting references to the name input and user container, as well as the table body
  // var studio = $("#studioList");
  // var timeMonth = $("#timeMonth");
  // var timeDay = $("#timeDay");
  var timeStarting = $("#timeStarting");
  var timeEnding = $("#timeEnding");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an user
  $(document).on("submit", "#time-form", registerTime);

  // A function to handle what happens when the form is submitted to create a new user
  function registerTime(event) {
    event.preventDefault();
    console.log("here");

    // timeStarting = DateTime.local(2019, timeMonth, timeDay, timeStarting, 00).toString();
    // console.log(timeStarting);
    // Calling the newTime function and passing in the value of the name input
    newTime({
      // timeMonth: timeMonth,
      // timeDay: timeDay,
      timeStarting: timeStarting.val(),
      timeEnding: timeEnding.val()
    });
  }

  // A function for creating an user. Calls getusers upon completion
  function newTime(userTime) {
    $.post("/api/time", userTime);
    console.log("Time posted");
  }
});
