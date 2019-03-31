$(document).ready(function() {
  // Getting references to the name input and user container, as well as the table body
  var studio = $("#studioList");
  var timeMonth = $("#startMonth");
  var timeDay = $("#startDay");
  var starting = $("#startList");
  var ending = $("#endList");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an user
  $(document).on("submit", "#time-form", registerTime);

  // A function to handle what happens when the form is submitted to create a new user
  function registerTime(event) {
    event.preventDefault();
// making a timedate var
var timeStarting = new Date(Date.UTC(2019,timeMonth.val(), timeDay.val(), starting.val()));
var timeEnding = new Date(Date.UTC(2019,timeMonth.val(), timeDay.val(), ending.val()));
console.log("Start: "+timeStarting);
console.log("Ending: "+timeEnding);
// Calling the newTime function and passing in the value of the name input
    newTime({
      timeStarting: timeStarting.toISOString(),
      timeEnding: timeEnding.toISOString()
    });
  }

  // A function for creating an user. Calls getusers upon completion
  function newTime(userTime) {
    $.post("/api/time", userTime);
    console.log("Time posted");
  }
});
