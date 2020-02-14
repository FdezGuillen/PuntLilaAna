window.onload = function () {
    initMenu();
    console.log("aaaaaa");
    try {
        var phoneTitle = getUrlParameter();
        console.log(phoneTitle);
        if (phoneTitle !== null)
            addPhoneToForm(phoneTitle);
    } catch (error) {
        console.log(error);
    }

};

function getUrlParameter() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('key');
}
