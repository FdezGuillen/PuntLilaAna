window.onload = function () {
    initMenu();
    
    try {
        var phone = getUrlParameters();
        if (phoneTitle !== null)
            addPhoneToForm(phone[0], phone[1], phone[2]);
    } catch (error) {
        console.log(error);
    }

};

function getUrlParameters() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var phone = []
    phone.push(urlParams.get('key'));
    phone.push(urlParams.get('number'));
    phone.push(urlParams.get('desc'));
    return phone;
}
