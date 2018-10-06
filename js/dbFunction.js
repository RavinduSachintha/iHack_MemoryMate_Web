// Get the Auth service for the default app
var defaultAuth = firebase.auth();

// Get a reference to the database service
var database = firebase.database();

function addEvent(userId, eventName, description, date, time, privacyType, schedule) {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            firebase.database().ref('events/' + user.uid).set({
                eventName: eventName,
                description: description,
                date : date,
                time : time,
                privacyType : privacyType,
                schedule : schedule
            });
        }
    });

    
}