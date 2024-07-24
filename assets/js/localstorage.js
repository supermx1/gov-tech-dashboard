$(document).ready(function () {
    function init() {
         if (localStorage["rsurname"]) {
            $('#rsurname').val(localStorage["rsurname"]);
        }
        if (localStorage["rfullname"]) {
            $('#rfullname').val(localStorage["rfullname"]);
        }
		
        if (localStorage["dob"]) {
            $('#dob').val(localStorage["dob"]);
        }
		
        if (localStorage["village"]) {
            $('#village').val(localStorage["village"]);
        }
		
	    if (localStorage["rphonenumber"]) {
            $('#rphonenumber').val(localStorage["rphonenumber"]);
        }
		
		if (localStorage["altphonenumber"]) {
            $('#altphonenumber').val(localStorage["altphonenumber"]);
        }
		
		if (localStorage["emailaddress"]) {
            $('#emailaddress').val(localStorage["emailaddress"]);
        }
	    if (localStorage["houseno"]) {
            $('#houseno').val(localStorage["houseno"]);
        }
		if (localStorage["street"]) {
            $('#street').val(localStorage["street"]);
        }
		
		if (localStorage["state"]) {
            $('#state').val(localStorage["state"]);
        }
	    if (localStorage["city"]) {
            $('#city').val(localStorage["city"]);
        }		
		if (localStorage["zipcode"]) {
            $('#zipcode').val(localStorage["zipcode"]);
        }	
		if (localStorage["long"]) {
            $('#long').val(localStorage["long"]);
        }			
	    if (localStorage["lat"]) {
            $('#lat').val(localStorage["lat"]);
        }
	    if (localStorage["duration"]) {
            $('#duration').val(localStorage["duration"]);
        }
        if (localStorage["firstwitnessname"]) {
            $('#firstwitnessname').val(localStorage["firstwitnessname"]);
        }
        if (localStorage["firstwitnessphone"]) {
            $('#firstwitnessphone').val(localStorage["firstwitnessphone"]);
        }
        if (localStorage["secondwitnessname"]) {
            $('#secondwitnessname').val(localStorage["secondwitnessname"]);
        }
        if (localStorage["secondwitnessphone"]) {
            $('#secondwitnessphone').val(localStorage["secondwitnessphone"]);
        }

		
		
    }
    init();
});

$('.stored').keyup(function () {
    localStorage[$(this).attr('name')] = $(this).val();
});

$('#addaddress').submit(function() {
    localStorage.clear();
});