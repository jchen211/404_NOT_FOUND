$(document).ready(function () {
  // Getting references to the name input and user container, as well as the table body
  var propertyType = $("#studioTypeList");
  var propertyAddNum = $("#streetAddressList");
  var propertyAddStreet = $("#streetAddressList");
  var propertyAddCity = $("#cityList");
  var propertyAddSate = $("#stateList");
  var propertyAddZIP = $("#zipList");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an user
  $(document).on("submit", "#submitListing", registerProperty);

  // A function to handle what happens when the form is submitted to create a new user
  function registerProperty(event) {
    event.preventDefault();
    // Calling the newProperty function and passing in the value of the name input
    newProperty({
      propertyType: propertyType.val().trim(),
      propertyAddNum: propertyAddNum.val().trim(),
      propertyAddStreet: propertyAddStreet.val().trim(),
      propertyAddCity: propertyAddCity.val().trim(),
      propertyAddSate: propertyAddSate.val().trim(),
      propertyAddZIP: propertyAddZIP.val().trim()
    });
  }

  // A function for creating an user. Calls getusers upon completion
  function newProperty(userProperty) {
    $.post("/api/property", userProperty)
  }
});