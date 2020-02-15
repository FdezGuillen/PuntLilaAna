var dropdownContent;
var visibleDropdown;

function initMenu() {
    dropdownContent = document.getElementById("myDropdown");
    visibleDropdown = false;
    dropdownContent.style.visibility = "hidden";
}

function showMenu() {
    console.log("hola");
    var menuButton = document.getElementById("menuButton");

    visibleDropdown = !visibleDropdown;
    if (visibleDropdown) {
        dropdownContent.style.visibility = "visible";
        menuButton.className = "fa fa-times";
    } else {
        dropdownContent.style.visibility = "hidden";
        menuButton.className = "fa fa-bars";
    }
}
