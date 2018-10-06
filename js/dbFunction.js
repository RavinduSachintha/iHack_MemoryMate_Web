
function addEvent(eventName, description, date, time, privacyType, schedule) {

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