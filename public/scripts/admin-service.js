function getToken() {
    var auth2 = gapi.auth2.getAuthInstance();
    if (auth2.isSignedIn.get())
        return auth2.currentUser.get().getAuthResponse().id_token;
}

function emptyAdminsList() {
    document.getElementById("adminTable").innerHTML =
        `<tr>
            <th>Nom d'usuari</th>
            <th>Accions</th>
        </tr>`;
}

function getAdmins() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            addAdminsToList(xhttp.responseText);
        }
    };
    var token = getToken();
    xhttp.open("GET", "http://localhost:5000/admins", true);
    xhttp.setRequestHeader("Authorization", token);
    xhttp.send();
}

function addAdminsToList(admins) {
    var adminList = JSON.parse(admins);
    var adminTable = document.getElementById("adminTable");
    Object.keys(adminList).forEach(e => {
        var row = document.createElement("tr");
        var emailCell = document.createElement("td");
        emailCell.appendChild(document.createTextNode(adminList[e].admin_email));
        var actionsCell = document.createElement("td");

        var delAction = document.createElement("i");
        delAction.className = "fa fa-minus-circle";
        delAction.style.fontSize = "26px";
        delAction.onclick = function () {
            alertDelete(adminList[e].admin_email);
        };

        actionsCell.appendChild(delAction);

        row.appendChild(emailCell);
        row.appendChild(actionsCell);
        adminTable.appendChild(row);
    });
}

function postAdmin() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 201) {
                alert("Administrador agregat amb èxit");
                window.location.href = "http://localhost:8080/views/home.html";
            } else {
                alert("Error");
            }
        }

    };
    var token = getToken();
    var objectToSend = '{"email":"' + document.getElementById("added-admin-email").value + '"}';

    xhttp.open("POST", "http://localhost:5000/admins", true);
    xhttp.setRequestHeader("Authorization", token);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.send(objectToSend);
}

function alertDelete(email) {
    var c = confirm("Segur que vols llevar permisos d'administrador a l'email " + email + "?");
    if (c) {
        deleteAdmin(email);
    }
}

function deleteAdmin(email) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                alert("Administrador eliminat amb èxit");
                emptyAdminsList();
                getAdmins();
            }
        }

    };
    var token = getToken();

    xhttp.open("DELETE", "http://localhost:5000/admins/" + email, true);
    xhttp.setRequestHeader("Authorization", token);
    xhttp.send();
}
