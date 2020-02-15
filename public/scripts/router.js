/* TODO: ROUTER
At this moment there are only const for the client's routes */

const HOST_ADDRESS = "http://localhost/"; //Ip and port

// VIEW ROUTES
const LOGIN_PANEL_ROUTE = HOST_ADDRESS + "index.html";
const HOME_PANEL_ROUTE = HOST_ADDRESS + "views/home.html";
const ADD_ADMIN_PANEL_ROUTE = HOST_ADDRESS + "views/add-admin.html";
const ADD_PHONE_PANEL_ROUTE = HOST_ADDRESS + "views/add-phone.html";
const EDIT_PHONE_PANEL_ROUTE = HOST_ADDRESS + "views/edit-phone.html";

// END POINTS
const ADMINS_GET_ROUTE = HOST_ADDRESS + "admins/";
const ADMINS_POST_ROUTE = HOST_ADDRESS + "admins";
const ADMINS_GET_LIST_ROUTE = HOST_ADDRESS + "admins";
const ADMINS_DELETE_ROUTE = HOST_ADDRESS + "admins/";

const PHONES_GET_ROUTE = HOST_ADDRESS + "/phones/";
const PHONES_GET_LIST_ROUTE = HOST_ADDRESS + "/phones";
const PHONES_POST_ROUTE = HOST_ADDRESS + "/phones";
const PHONES_PUT_ROUTE = HOST_ADDRESS + "/phones";

const NOTIFICATION_POST_ROUTE = HOST_ADDRESS + "/notifications";


