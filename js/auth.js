// Function to authenticate the user credentials start
var login = function() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(function() {
        alert("Success login");
        window.location.href = "./app.html";

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


// var isSigned = function() {
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           // User is signed in.
//         } else {
//           // No user is signed in.
//         }
//     });
// }
