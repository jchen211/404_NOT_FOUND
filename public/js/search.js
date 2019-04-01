$(document).ready(function () {
  // Getting references to the name input and user container, as well as the table body
  var propertyType = $("#studioSearch");
  // var propertyAddCity = $("#citySearch");
  // var propertyAddSate = $("#stateSearch");
  // var propertyAddZIP = $("#zipSearch");
  // // var timeMonth = $("#startMonth");
  // // var timeDay = $("#startDay");
  // var starting = $("#startSearch");
  // var ending = $("#endSearch");

  // Adding event listeners to the form to create a new object, and the button to delete
  // an user
  $(document).on("submit", "#search-form", searchDB);
  
  var listingContainer = $("#cardContainer");

  // A function to handle what happens when the form is submitted to create a new user
  function searchDB(event) {
    event.preventDefault();

    // Calling the searchDB function and passing in the value of the name input
    searchProp({
      propertyType: propertyType.val()
    });
  }
  // A function to update the propertyTaken to true
  // function updateDB(data) {
  //   console.log(data);
  //   $.put("/api/property/:id", data, function (res) {console.log(res);});
  // }

  // A function for creating an user. Calls getusers upon completion
  function searchProp(searchInfo) {
    $.get("/api/property/:id", searchInfo, function (res) {

      for (var i = 0; i < res.length; i++) {

        var newCard = $("<div>");
        newCard.addClass("card");
        newCard.val(res[i].id);

        var newCardHeading = $("<div>");
        newCardHeading.addClass("card-header");
        newCard.append(newCardHeading);

        var cardTitle = $("<h4>");
        cardTitle.text("Listing #" + res[i].id);
        newCardHeading.append(cardTitle);

        var cardBody = $("<div>");
        cardBody.addClass("card-body");
        newCard.append(cardBody);

        var newType = $("<p>");
        newType.addClass("propInfo");
        newType.text("Property Type: " + res[i].propertyType);
        cardBody.append(newType);

        var newAddress = $("<p>");
        newAddress.addClass("propInfo");
        newAddress.text("Address: " + res[i].propertyAddStreet);
        cardBody.append(newAddress);

        var newCity = $("<p>");
        newCity.addClass("propInfo");
        newCity.text(res[i].propertyAddCity + ", " + res[i].propertyAddZIP);
        cardBody.append(newCity);

        var newAmenities = $("<p>");
        newAmenities.addClass("propInfo");
        newAmenities.text("Description: " + res[i].propertyAmenities);
        cardBody.append(newAmenities);

        var reserveBtn = $("<button>");
        reserveBtn.addClass("reserve");
        reserveBtn.text("Reserve Now");
        reserveBtn.val(res[i].id);
        newCard.append(reserveBtn);

        listingContainer.prepend(newCard);
      }
    })
  };


  // handle the reserveBtn
  $(document).on("click", "button.reserve", reserveListing);

  function reserveListing(event) {
    var pID = $(this).val();
    console.log(pID);
    $(".modal").modal("show");
    cancelReservation(pID);
  }

  function cancelReservation(data) {
    // updateDB({
    //   propertyID: data
    // });
    $("button.reserve").text("cancel");
  }
});