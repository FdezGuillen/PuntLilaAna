window.onload = function () {
    var phoneTitle = getUrlParameter();
    addPhoneToForm();
};

function getUrlParameter() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('key');
}
