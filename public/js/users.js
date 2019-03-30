$(document).ready(function() {
  // Getting references to the name input and user container, as well as the table body
  var userName = $("#uname");
  var userPassword = $("#psw");
  var userPhone = $("#phone");
  var userEmail = $("#email");
  var userCC = $("#cc");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an user
  $(document).on("submit", "#user-form", registerUser);

  // A function to handle what happens when the form is submitted to create a new user
  function registerUser(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (
      !userName
        .val()
        .trim()
        .trim()
    ) {
      return;
    }
    // Calling the newUser function and passing in the value of the name input
    newUser({
      userName: userName.val().trim(),
      userPassword: userPassword.val().trim(),
      userPhone: userPhone.val().trim(),
      userEmail: userEmail.val().trim(),
      userCC: userCC.val().trim()
    });

    $("userPassword").val("");
    $("userPhone").val("");
    $("userEmail").val("");
    $("userCC").val("");
  }

  // A function for creating an user. Calls getusers upon completion
  function newUser(userInfo) {
    $.post("/api/users", userInfo);
  }
});
