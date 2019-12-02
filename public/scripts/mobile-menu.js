var dropdownContent;

window.onload = function(){
    dropdownContent = document.getElementById("myDropdown");
    dropdownContent.style.visibility = "hidden";
}

function showMenu(){
    dropdownContent.style.visibility = "visible";
}