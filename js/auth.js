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

var register = function(username,password) {
    
    firebase.auth().createUserWithEmailAndPassword(username,password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
    });


}

// var isSigned = function() {
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           // User is signed in.
//         } else {
//           // No user is signed in.
//         }
//     });
// }
