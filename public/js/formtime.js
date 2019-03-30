$(document).ready(function() {
  // Getting references to the name input and user container, as well as the table body
  var studio = $("#studioList");
  var timeMonth = $("#timeMonth");
  var timeDay = $("#timeDay");
  var starting = $("#timeStarting");
  var ending = $("#timeEnding");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an user
  $(document).on("submit", "#time-form", registerTime);

  // A function to handle what happens when the form is submitted to create a new user
  function registerTime(event) {
    event.preventDefault();
    console.log(starting.val());

    console.log(2019, timeMonth.val(), timeDay.val(), starting.val(), 00);
// making a timedate var
    var timeStarting = DateTime.local(2019, timeMonth, timeDay, starting, 00).toString();
    var timeEnding = DateTime.local(2019, timeMonth, timeDay, ending, 00).toString();
    console.log("Start: "+timeStarting);
    console.log("Start: "+timeStarting);
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
