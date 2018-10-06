// Function to authenticate the user credentials start
var login = function() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(function() {

        // redirect to app page
        window.location.href = "./pages/app.html";

    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}
// Function to authenticate the user credentials end


// Function to register the user start
var register = function(username,password) {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    firebase.auth().createUserWithEmailAndPassword(email.value,password.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
    });
}
// Function to register the user end
