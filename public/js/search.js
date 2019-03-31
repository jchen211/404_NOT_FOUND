$(document).ready(function () {
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
    console.log(
      propertyType.val(),
      propertyAddCity.val().trim(),
      propertyAddSate.val(),
      propertyAddZIP.val().trim(),
      starting.val(),
      ending.val());
    // Calling the searchDB function and passing in the value of the name input
    searchProp({
      propertyType: propertyType.val()
    });
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
  }

  // Function for creating a new list Card for property
  function createResultCard(data) {
    console.log("Inside Loop " + data.id+data.propertyType+data.propertyAddCity+data.propertyAddStreet+data.propertyAddZIP);

    var newCard = $("#resultsCard");
    newCard.data(data);
    newCard.append("<div value=" + data.id + "><strong>Studio Address: </strong>"+ data.propertyAddStreet + "<br><br><button type='button' class='bookButton' data-toggle='modal' data-target='#exampleModalCenter'>Book Studio!</button></div>");
    // newCard.append("<div value=" + i + ">" + data.propertyType + "</div>");
    // newCard.append("<div value=" + i + ">" + data.propertyType + "</div>");
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

  // A function for creating an user. Calls getusers upon completion
  function searchProp(searchInfo) {
    // console.log(searchInfo);
    $.get("/api/property/:id", searchInfo, function (res) {
      var data = {};
      for (var i = 0; i < res.length; i++) {
        console.log(res[i]);
        // CardsToAdd.push(res[i]);
        // console.log(CardsToAdd);
        data = res[i];
        createResultCard(data);
      }
    })
  }
});