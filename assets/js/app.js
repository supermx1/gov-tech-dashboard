// Add toggle button to table
$('#toggler').on('click', function(){
  $("th,td").removeAttr("style");        
});

// Adding Quill Text Editor


// Adding a Next & Prev button to navigate tab
 $('.nextbtn').click(function(){
  $('.nav-tabs > .nav-item > .active').parent().next('li').find('a').trigger('click');
});

  $('.prevbtn').click(function(){
  $('.nav-tabs > .nav-item > .active').parent().prev('li').find('a').trigger('click');
});


//Navigate to Tab using URL
$(function(){
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  $('.nav-tabs a').click(function (e) {
    $(this).tab('show');
    var scrollmem = $('body').scrollTop();
    window.location.hash = this.hash;
    $('html,body').scrollTop(scrollmem);
  });
});



//Focus on Username Field on Icon Click - Login Page
usernameFocus = function getFocus() {           
  document.getElementById("email").focus();
}

//Focus on Password Field on Icon Click - Login Page
passwordFocus = function getFocus() {           
  document.getElementById("password").focus();
}

//Focus on Email Field on Icon Click - Forgot Password Page
emailFocus = function getFocus() {
    document.getElementById("emailforgot").focus();
}

//Focus on Auth Field on Icon Click - Forgot Password Page
authFocus = function getFocus() {
    document.getElementById("auth").focus();
}


// Get GPS  Location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// Insert GPS  Location into Input Fields
function showPosition(position) {
  document.getElementById("long").value = ""+position.coords.longitude+"";
  document.getElementById("lat").value = ""+position.coords.latitude+"";


}
// Show error if GPS does not work
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}

// Add Drag and Drop file upload
var $fileInput = $('.file-input');
var $droparea = $('.file-drop-area');

// highlight drag area
$fileInput.on('dragenter focus click', function() {
  $droparea.addClass('is-active');
});

// back to normal state
$fileInput.on('dragleave blur drop', function() {
  $droparea.removeClass('is-active');
});

// change inner text
$fileInput.on('change', function() {
  var filesCount = $(this)[0].files.length;
  var $textContainer = $(this).prev();

  if (filesCount === 1) {
    // if single file is selected, show file name
    var fileName = $(this).val().split('\\').pop();
    $textContainer.text(fileName);
  } else {
    // otherwise show number of files
    $textContainer.text(filesCount + ' files selected');
  }
});

// Initialize Select2
$(document).ready(function() {
    $('.select').select2();
});


// Datatables
$(document).ready(function() {
    $('#table3').DataTable( 
        {
        dom: 'Bfrtip',
        buttons: [
            'colvis', 'pageLength', {
                extend: 'copyHtml5',
                exportOptions: {
                    columns: ':visible'
                }
            },
            {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: ':visible'
                }
            },
            {
                extend: 'pdfHtml5',
                exportOptions: {
                    columns: ':visible'
                }
            }
        ],
        paging: true,
        colReorder: true,
        order: [ [ 0, "asc" ] ],
        "columnDefs": [
            {
                "targets": [ 3 ],
                "visible": false,
                "searchable": true
            },
            {
                "targets": [ 4 ],
                "visible": false,
                "searchable": true
            }
        ],
        responsive: true,
        responsive: {
        breakpoints: [
            { name: 'desktop', width: Infinity },
            { name: 'tablet',  width: 1024 },
            { name: 'fablet',  width: 768 },
            { name: 'phone',   width: 480 }
        ]
    }
    } );
} );

$(document).ready(function() {
    $('#table0').DataTable();
} );



// Custom Search Table
var table = $('#table2').DataTable(
{
        dom: 'Bfrtip',
        buttons: [
            'colvis', 'pageLength', {
                extend: 'copyHtml5',
                exportOptions: {
                    columns: ':visible'
                }
            },
            {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: ':visible'
                }
            },
            {
                extend: 'pdfHtml5',
                exportOptions: {
                    columns: ':visible'
                }
            }
        ],
        paging: true,
        colReorder: true,
        order: [ [ 0, "asc" ] ],
        responsive: true,
        columnDefs: [ {
            className: 'control',
            orderable: false,
            targets:   0
        } ]
        
    }
);
// Enable search on input field
$('#search').on( 'keyup', function () {
    table.search( this.value ).draw();
} );

//Hide and Reveal Password Script
$(".reveal").on('click',function() {
    var $pwd = $(".pwd");
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
    } else {
        $pwd.attr('type', 'password');
    }
});




// Initialize Date and Time
function DateAndTime() {
	var dt = new Date();

	var Hours = dt.getHours();
	var Min = dt.getMinutes();
	var Sec = dt.getSeconds();
	// var MilliSec = dt.getMilliseconds();  + MilliSec + "MilliSec " (for milliseconds).

	//strings
	var days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];

	//strings
	var months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	// var localTime = dt.getLocaleTimeString();
	// var localDate = dt.getLocaleDateString();

	if (Min < 10) {
		Min === "0" + Min;
	} //displays two digits even Min less than 10

	if (Sec < 10) {
		Sec === "0" + Sec;
	} //displays two digits even Sec less than 10

	var suffix = "AM"; //cunverting 24Hours to 12Hours with AM & PM suffix
	if (Hours >= 12) {
		suffix = "PM";
		Hours = Hours - 12;
	}
	if (Hours === 0) {
		Hours = 12;
	}

	// document.getElementById("time").innerHTML = localTime;

	document.getElementById("date").innerHTML =
		days[dt.getDay()] +
		", " +
		dt.getDate() +
		" " +
		months[dt.getMonth()] +
		" " +
		dt.getFullYear();
}

new DateAndTime();
setInterval("DateAndTime()", 1000);