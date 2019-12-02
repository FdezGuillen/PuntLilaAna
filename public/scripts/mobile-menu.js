var dropdownContent;
var visibleDropdown;

window.onload = function(){
    dropdownContent = document.getElementById("myDropdown");
    visibleDropdown = false;
    dropdownContent.style.visibility = "hidden";
}

function showMenu(){
    var menuButton = document.getElementById("menuButton");
    
    visibleDropdown = !visibleDropdown;
    if (visibleDropdown){
        dropdownContent.style.visibility = "visible";
        menuButton.className = "fa fa-times";
    }else{
         dropdownContent.style.visibility = "hidden";
        menuButton.className = "fa fa-bars";
    }
}