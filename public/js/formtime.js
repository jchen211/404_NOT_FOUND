$(document).ready(function () {
  // Getting references to the name input and user container, as well as the table body
  var timeStarting = $("#timeStarting");
  var timeEnding = $("#timeEnding");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an user
  $(document).on("submit", "#submitTime", registerTime);

  // A function to handle what happens when the form is submitted to create a new user
  function registerTime(event) {
    event.preventDefault();
    // Calling the newTime function and passing in the value of the name input
    newTime({
      timeStarting: timeStarting,
      timeEnding: timeEnding
    });
  }

  // A function for creating an user. Calls getusers upon completion
  function newTime(userTimes) {
    $.post("/api/time", userTimes)
  }
});