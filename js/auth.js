var login = function() {
    var email = document.getElementById("name");
    var password = document.getElementById("pwd");

    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
    });

    window.location.href = "./index.html";
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