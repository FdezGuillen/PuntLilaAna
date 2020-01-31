function getToken() {
    var auth2 = gapi.auth2.getAuthInstance();
    if (auth2.isSignedIn.get())
        return auth2.currentUser.get().getAuthResponse().id_token;
}

function emptyPhonesList() {
    document.getElementById("phoneTable").innerHTML =
        `<tr>
            <th>Títol</th>
            <th>Número</th>
            <th>Descripció</th>
            <th>Accions</th>
        </tr>`;
}

function addPhoneToForm(phone) {
    var phone = JSON.parse(phone);
}

function getPhoneByTitle(phoneTitle) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            addPhoneToForm(xhttp.responseText);
        }
    };
    var token = getToken();
    console.log(token);
    xhttp.open("GET", "http://localhost:5000/phones/" + phoneTitle, true);
    xhttp.setRequestHeader("Authorization", token);
    xhttp.send();
}

function getPhones() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            addPhonesToList(xhttp.responseText);
        }
    };
    var token = getToken();
    console.log(token);
    xhttp.open("GET", "http://localhost:5000/phones", true);
    xhttp.setRequestHeader("Authorization", token);
    xhttp.send();
}

function addPhonesToList(phones) {
    var phoneList = JSON.parse(phones);
    console.log("aaaaa" + phones);
    var phoneTable = document.getElementById("phoneTable");
    Object.keys(phoneList).forEach(e => {
        var row = document.createElement("tr");

        var titleCell = document.createElement("td");
        titleCell.appendChild(document.createTextNode(e));

        var numberCell = document.createElement("td");
        numberCell.appendChild(document.createTextNode(phoneList[e].number));

        var descriptionCell = document.createElement("td");
        descriptionCell.appendChild(document.createTextNode(phoneList[e].description));

        var actionsCell = document.createElement("td");
        var editAction = document.createElement("i");
        editAction.className = "fa fa-edit";
        editAction.style.fontSize = "26px";
        editAction.onclick = function () {
            window.location.href = "http://localhost:8080/views/add-phone.html" + '?key=' + e;
        };

        var delAction = document.createElement("i");
        delAction.className = "fa fa-minus-circle";
        delAction.style.fontSize = "26px";
        delAction.onclick = function () {
            alertDelete(e);
        };

        actionsCell.appendChild(editAction);
        actionsCell.appendChild(delAction);

        row.appendChild(titleCell);
        row.appendChild(numberCell);
        row.appendChild(descriptionCell);
        row.appendChild(actionsCell);
        phoneTable.appendChild(row);
    });
}


function postPhone() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 201) {
                alert("Telèfon agregat amb èxit");
                window.location.href = "http://localhost:8080/views/home.html";
            } else {
                alert("Error");
            }
        }

    };
    var token = getToken();
    var objectToSend = {
        "phone_title": document.getElementById("phoneTitle").value,
        "description": document.getElementById("phoneDesc").value,
        "number": document.getElementById("phoneNumber").value
    };

    xhttp.open("POST", "http://localhost:5000/phones", true);
    xhttp.setRequestHeader("Authorization", token);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.send(JSON.stringify(objectToSend));
}

function alertDelete(phoneTitle) {
    var c = confirm("Segur que vols llevar el telèfon " + phoneTitle + "?");
    if (c) {
        deletePhone(phoneTitle);
    }
}

function deletePhone(phoneTitle) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                alert("Telèfon eliminat amb èxit");
                emptyPhonesList();
                getPhones();
            }
        }

    };
    var token = getToken();

    xhttp.open("DELETE", "http://localhost:5000/phones/" + phoneTitle, true);
    xhttp.setRequestHeader("Authorization", token);
    xhttp.send();
}

function editPhone() {

}
