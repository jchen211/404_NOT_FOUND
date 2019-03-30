$(document).ready(function() {  
   
    // booking container holds users reservations and listings
    var bookContainer = $(".bookingcontainer");
    
    // Click event for cancel a booking
    $(document).on("click", "button.delete", handlePostDelete);
  
    //variable to hold reservations
    var reserve;
    //variable to hold listings
    var listing;


    // InitializeRows handles appending all of our constructed post HTML inside blogContainer
    function reserveRows() {
        bookContainer.empty();
    var addReserve = [];
    
    for (var i = 0; i < reserve.length; i++) {
      addReserve.push(createReserveRow(reserve[i]));
    }
    blogContainer.append(addReserve);
    };

    function listingRows() {
        bookContainer.empty();
    var addListing = [];
    
    for (var i = 0; i < listing.length; i++) {
      addListing.push(createListingRow(listing[i]));
    }
    blogContainer.append(addReserve);
    };

    // add reserve to HTML ? ? ?
    function createReserveRow(reserve) {
        $(".card-text").text("User: " + reserve.User.userName);
        $(".card-text").text("User: " + reserve.Property.proprtyType);
        $(".card-text").text("User: " + reserve.Property.proprtyAddStreet);
        $(".card-text").text("User: " + reserve.Property.proprtyAddCity + reserve.Property.proprtyAddState + reserve.Property.proprtyAddZip);
    }

    // add listing to HTML ? ? ?
    function createListRow(listing) {
        $(".card-text").text("User: " + listing.User.userName);
        $(".card-text").text("User: " + listing.Property.proprtyType);
        $(".card-text").text("User: " + listing.Property.proprtyAddStreet);
        $(".card-text").text("User: " + listing.Property.proprtyAddCity + reserve.Property.proprtyAddState + reserve.Property.proprtyAddZip);
        $(".card-text").text("User: " + listing.Property.propertyAmenities);
    }

  // API call to delete listing
  function deleteListing(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/property/" + id
    })
      .then(function() {
        getresults(postCategorySelect.val());
      });
  }



    // update reserve from reserved to free
    function cancelReserve() {
        var currentReserve = $(this)
          .parent()
          .parent()
          .data("reserve");
        updateReserve(currentReserve.id);
      }





//end of document.ready
}