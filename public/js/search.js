$(document).ready(function () {
  // Getting references to the name input and user container, as well as the table body
  // var propertyType = $("#studioSearch");
  // var propertyAddCity = $("#citySearch");
  // var propertyAddSate = $("#stateSearch");
  // var propertyAddZIP = $("#zipSearch");
  // // var timeMonth = $("#startMonth");
  // // var timeDay = $("#startDay");
  // var starting = $("#startSearch");
  // var ending = $("#endSearch");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an user
  // $(document).on("submit", "#search-form", searchDB);

  // A function to handle what happens when the form is submitted to create a new user
  // function searchDB(event) {
  //   event.preventDefault();
  //   console.log(
  //     propertyType.val(),
  //     propertyAddCity.val().trim(),
  //     propertyAddSate.val(),
  //     propertyAddZIP.val().trim(),
  //     starting.val(),
  //     ending.val());
  //   // Calling the searchDB function and passing in the value of the name input
  //   searchProp({
  //     propertyType: propertyType.val()
  //   });
    // ,
    //   propertyAddCity: propertyAddCity.val().trim(),
    //   propertyAddSate: propertyAddSate.val(),
    //   propertyAddZIP: propertyAddZIP.val().trim(),
    //   starting: starting.val(),
    //   ending: ending.val()
    // });


    // $("userPassword").val("");
    // $("userPhone").val("");
    // $("userEmail").val("");
    // $("userCC").val("");
  // }

  var listingContainer = $("#cardContainer");

  // handle the reserveBtn
  $(document).on("click", "button.reserve", reserveListing);


  var listings;

// gets all property listings
    $.get("/api/property", function(data) {
      listings = data;
      console.log(listings);

      for (var i = 0; i < listings.length; i++) {
        console.log(listings[i]);

        //adding a timestamp
        // var formattedDate = new Date(data.createdAt);
        // formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");

        var newCard = $("<div>");
        newCard.addClass("card");

        var newCardHeading = $("<div>");
        newCardHeading.addClass("card-header");
        newCard.append(newCardHeading);

        var cardTitle = $("<h4>");
        cardTitle.text("Listing #" + listings[i].id);
        newCardHeading.append(cardTitle);

        var cardBody = $("<div>");
        cardBody.addClass("card-body");
        newCard.append(cardBody);

        var newType = $("<p>");
        newType.addClass("propInfo");
        newType.text("Property Type: " + listings[i].propertyType);
        cardBody.append(newType);

        var newAddress = $("<p>");
        newAddress.addClass("propInfo");
        newAddress.text("Address: " + listings[i].propertyAddStreet);
        cardBody.append(newAddress);

        var newCity = $("<p>");
        newCity.addClass("propInfo");
        newCity.text(listings[i].propertyAddCity + ", " + listings[i].propertyAddZIP);
        cardBody.append(newCity);

        var reserveBtn = $("<button>");
        reserveBtn.addClass("reserve btn btn-info");
        reserveBtn.text("Reserve Now");
        newCard.append(reserveBtn);

        listingContainer.append(newCard);
      }
    });


  function reserveListing() {
    $(".modal").modal("show");
    cancelReservation();
  } 

  function cancelReservation() {
    $("button.reserve").text("cancel");
  }
});