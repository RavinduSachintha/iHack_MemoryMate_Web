var login = function() {
    var name = document.getElementById("name");
    var pwd = document.getElementById("pwd");

    
    firebase.auth().createUserWithEmailAndPassword(name.value, pwd.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
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