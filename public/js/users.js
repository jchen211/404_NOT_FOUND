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
  
  //atmpt to login
  // $(document).on("submit", "#loggingIn", loginUser);


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
  } 

  // A function for creating an user. Calls getusers upon completion
  function newUser(userInfo) {
    $.post("/api/users", userInfo);

    // resets form and closes modal
    $("#user-form").each(function() {
      this.reset();
    })

    $(".modal").modal("hide");
  }

// atmpt login ==========================
// var eMail = $("#login-email");
// var psw = $("#ogin-psw");
  // function loginUser() {
    // $.get("/login", function(userInfo){ 
    //   if (userInfo === eMail && psw) {
    //     res.redirect("./search"); 
    //   } else {
    //     req.flash("Incorrect email or password")
    //   }
    // })
  // }
// ======================================


});
