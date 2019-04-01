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
console.log("StudioID: "+studio.val());
console.log("Start: "+timeStarting);
console.log("Ending: "+timeEnding);
// Calling the newTime function and passing in the value of the name input
    newTime({
      timeStarting: timeStarting
      // .toISOString()
      ,
      timeEnding: timeEnding
      // .toISOString()
    });
  }

  // A function for creating an user. Calls getusers upon completion
  function newTime(userTime) {
    $.post("/api/time", userTime);
    console.log("Time posted");
  }

  // Function for creating a new list Option for property
  function createPropertyOption(propertyData,i) {
    // console.log("Inside Loop "+propertyData);

    var newOption = $("#studioList");
    newOption.data(propertyData);
    newOption.append("<option value="+i+">" + propertyData + "</option>");
    return newOption;
  }

  // Function for retrieving properties and getting them ready to be rendered to the page
  function getProperties() {
    $.get("/api/property", function(data) {
      var Properties={data};
      var optionsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        var fID = Properties.data[i].id;
        optionsToAdd.push(data[i].propertyAddStreet);
        createPropertyOption(optionsToAdd[i],fID);
      }
      // renderPropertyList(optionsToAdd);
      // nameInput.val("");
    });
  }

  // A function for rendering the list of properties to the page
  function renderpropertyList(options) {
    propertyList.children().not(":last").remove();
    propertyContainer.children(".alert").remove();
    if (options.length) {
      console.log(options);
      propertyList.prepend(options);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no properties
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an property before you can create a Post.");
    propertyContainer.append(alertDiv);
  }

getProperties()
});
