function getToken() {
    var auth2 = gapi.auth2.getAuthInstance();
    if (auth2.isSignedIn.get())
        return auth2.currentUser.get().getAuthResponse().id_token;
}

function postMessage() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status = 206) {
                alert("Missatge enviat amb èxit");
                document.getElementById("messageTitle").value = "";
                document.getElementById("messageBody").value = "";
            } else {
                alert("Error");
            }
        }

    };
    var token = getToken();
    var objectToSend = {
        "title": document.getElementById("messageTitle").value,
        "body": document.getElementById("messageBody").value,
    };

    xhttp.open("POST", NOTIFICATION_POST_ROUTE, true);
    xhttp.setRequestHeader("Authorization", token);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.send(JSON.stringify(objectToSend));
}
