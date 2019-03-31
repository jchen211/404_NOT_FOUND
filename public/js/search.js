$(document).ready(function() {
  // Getting references to the name input and user container, as well as the table body
  var propertyType = $("#studioSearch");
  var propertyAddCity = $("#citySearch");
  var propertyAddSate = $("#stateSearch");
  var propertyAddZIP = $("#zipSearch");
  // var timeMonth = $("#startMonth");
  // var timeDay = $("#startDay");
  var starting = $("#startSearch");
  var ending = $("#endSearch");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an user
  $(document).on("submit", "#search-form", searchDB);

  // A function to handle what happens when the form is submitted to create a new user
  function searchDB(event) {
    event.preventDefault();
    console.log("here");
    console.log(      
      propertyType.val(),
      propertyAddCity.val().trim(),
      propertyAddSate.val(),
      propertyAddZIP.val().trim(),
      starting.val(),
      ending.val());
    // Calling the searchDB function and passing in the value of the name input
    searchingDB({
      propertyType: propertyType.val(),
      propertyAddCity: propertyAddCity.val().trim(),
      propertyAddSate: propertyAddSate.val(),
      propertyAddZIP: propertyAddZIP.val().trim(),
      starting: starting.val(),
      ending: ending.val()
    });

    // $("userPassword").val("");
    // $("userPhone").val("");
    // $("userEmail").val("");
    // $("userCC").val("");
  }

  // A function for creating an user. Calls getusers upon completion
  function searchingDB(searchInfo) {
    $.get("/api/time", searchInfo);
  }
});
