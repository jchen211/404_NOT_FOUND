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

  var listings;
  getProperty();

  function getProperty() {
    $.get("/api/property", function(data) {
      listings = data;
      console.log(listings);

      for (var i = 0; i < listings.length; i++) {
        console.log(listings[i]);

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

  }
  // function initializeProps() {
  //   listingContainer.empty();
  //   var postsToAdd = [];
  //   for (var j = 0; j < listings.length; j++) {
  //     console.log(listings[j]);
  //     postsToAdd.push(createResultCard(listings));
  //   }
  //   listingContainer.append(postsToAdd);
  // }

  
  
  // Function for creating a new list Card for property
    function createResultCard(listings) {
    console.log("Inside Loop " + listings.propertyType+listings.propertyAddCity+listings.propertyAddStreet+listings.propertyAddZIP);
      console.log(listings);
    // var newCard =
    // $("#resultsCard").html("<div value=" + data.id + "><strong>Studio Address: </strong>"+ data.propertyAddStreet + "<br><br><button type='button' class='bookButton' data-toggle='modal' data-target='#exampleModalCenter'>Book Studio!</button></div>");
    // newCard;
    // newCard.append("<div value=" + i + ">" + data.propertyType + "</div>");
    // newCard.append("<div value=" + i + ">" + data.propertyType + "</div>");
    // return newCard;
    var formattedDate = new Date(data.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");

    var newCard = $("<div>");
    newCard.addClass("card");

    var newCardHeading = $("<div>");
    newCardHeading.addClass("card-header");

    var reserveBtn = $("<button>");
    reserveBtn.text("Reserve");
    reserveBtn.addClass("reserve btn btn-info");

    var newTitle = $("<h2>");
    var newDate = $("<small>");

    var newCardProp = $("<h5>");
    newCardProp.text("Written by: " + listings.propertyType);
    
    var newCardBody = $("<div>");
    newCardBody.addClass("card-body");
    var newBody = $("<p>");
    newTitle.text(data.propertyType + " ");
    newBody.text(data.propertyAddStreet);
    newDate.text(formattedDate);
 
    newTitle.append(newDate);

    newCardHeading.append(reserveBtn);
    newCardHeading.append(newTitle);
    newCardHeading.append(newCardProp);

    newCardBody.append(newBody);

    newCard.append(newCardHeading);
    newCard.append(newCardBody);
    newCard.data("data", data);

    return newCard;
  }
  
  // Function for retrieving properties and getting them ready to be rendered to the page
  // function searchResults() {
  //   $.get("/api/property", function(data) {
  //     var Properties={data};
  //     var CardsToAdd = [];
  //     for (var i = 0; i < data.length; i++) {
  //       var fID = Properties.data[i].id;
  //       CardsToAdd.push(data[i].propertyAddStreet);
  //       createResultCard(CardsToAdd[i],fID);
  // }
  // renderPropertyList(CardsToAdd);
  // nameInput.val("");
  // });
  // }

  // // A function for creating an user. Calls getusers upon completion
  // function searchProp(searchInfo) {
  //   // console.log(searchInfo);
  //   $.get("/api/property/:id", searchInfo, function (res) {
  //     var data = {};
  //     for (var i = 0; i < res.length; i++) {
  //       console.log(res[i]);
  //       // CardsToAdd.push(res[i]);
  //       // console.log(CardsToAdd);
  //       data = res[i];
  //       createResultCard(data);
  //       // document.write(createResultCard(data));
  //     }
  //   })
  // }
});