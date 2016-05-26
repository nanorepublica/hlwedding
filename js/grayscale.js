/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

var mapStyles = [
{
"featureType": "administrative",
"elementType": "labels.text.fill",
"stylers": [
    {
        "color": "#444444"
    }
]
},
{
"featureType": "landscape",
"elementType": "all",
"stylers": [
    {
        "color": "#f2f2f2"
    }
]
},
{
"featureType": "landscape",
"elementType": "geometry.fill",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "landscape.man_made",
"elementType": "geometry.fill",
"stylers": [
    {
        "hue": "#ffd100"
    },
    {
        "saturation": "44"
    }
]
},
{
"featureType": "landscape.man_made",
"elementType": "geometry.stroke",
"stylers": [
    {
        "saturation": "-1"
    },
    {
        "hue": "#ff0000"
    }
]
},
{
"featureType": "landscape.natural",
"elementType": "geometry",
"stylers": [
    {
        "saturation": "-16"
    }
]
},
{
"featureType": "landscape.natural",
"elementType": "geometry.fill",
"stylers": [
    {
        "hue": "#ffd100"
    },
    {
        "saturation": "44"
    }
]
},
{
"featureType": "poi",
"elementType": "all",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "road",
"elementType": "all",
"stylers": [
    {
        "saturation": "-30"
    },
    {
        "lightness": "12"
    },
    {
        "hue": "#ff8e00"
    }
]
},
{
"featureType": "road.highway",
"elementType": "all",
"stylers": [
    {
        "visibility": "simplified"
    },
    {
        "saturation": "-26"
    }
]
},
{
"featureType": "road.arterial",
"elementType": "labels.icon",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "transit",
"elementType": "all",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "water",
"elementType": "all",
"stylers": [
    {
        "color": "#c0b78d"
    },
    {
        "visibility": "on"
    },
    {
        "saturation": "4"
    },
    {
        "lightness": "40"
    }
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
    {
        "hue": "#ffe300"
    }
]
},
{
"featureType": "water",
"elementType": "geometry.fill",
"stylers": [
    {
        "hue": "#ffe300"
    },
    {
        "saturation": "-3"
    },
    {
        "lightness": "-10"
    }
]
},
{
"featureType": "water",
"elementType": "labels",
"stylers": [
    {
        "hue": "#ff0000"
    },
    {
        "saturation": "-100"
    },
    {
        "lightness": "-5"
    }
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "water",
"elementType": "labels.text.stroke",
"stylers": [
    {
        "visibility": "off"
    }
]
}
]

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    nav_collapse()
});

$(document).ready(function() {
    nav_collapse()
})

function nav_collapse() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function() {
//     $('.navbar-toggle:visible').click();
// });

function update() {
    var units = countdown.YEARS | countdown.MONTHS | countdown.WEEKS | countdown.DAYS;
    countdown.setLabels(null, null, ' and ')
    // countdown.setLabels(null, null, '<br /> and ')
    var start = new Date(2016, 9, 1),
        ts = countdown(null, start, units);

    var counter = $('#countdown');

    counter.html(ts.toHTML(null, 'Now!'));

    requestAnimationFrame(update, counter.parentNode);
}

// Create a clone of the menu, right next to original.
$('#bunting').addClass('original')
          .clone()
          .insertAfter('#bunting')
          .addClass('cloned')
          .css('position','fixed')
          .css('top','0')
          .css('margin-top','0')
          .css('z-index','500')
          .removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {
    if ($('.original').length) {
      var orgElementPos = $('.original').offset();
      var navPos = $('nav').offset()
      var navHeight = $('nav').height()
      orgElementTop = orgElementPos.top - navHeight;

      if ($(window).scrollTop() >= (orgElementTop)) {
        // scrolled past the original position; now only show the cloned, sticky element.

        // Cloned element should always have same left position and width as original element.
        orgElement = $('.original');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        $('.cloned').css('left',leftOrgElement+'px').css('top',navHeight).css('width',widthOrgElement).show();
        $('.original').css('visibility','hidden');
      } else {
        // not scrolled past the menu; only show the original menu.
        $('.cloned').hide();
        $('.original').css('visibility','visible');
      }
    }
}


// Google Maps Scripts
// When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);

function init() {
    var path = window.location.pathname;
    if (path === '/') {
        inithome()
    } else if (path === '/sections/ceremony/') {
        initceremony()
    } else if (path === '/sections/reception/') {
        initreception()
    } // else if (path === '/rsvp/') {
        // initrsvp()
    // }
};


function inithome() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    if (window.screen.availWidth <= 1024) {
        var zoom = 13;
        var autoOpen = false;
    } else {
        var autoOpen = true;
        var zoom = 15;
    }
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        // zoom: 15,
        zoom: zoom,
        maxZoom: zoom,
        minZoom: zoom,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(52.2006602, 0.14),

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: mapStyles

    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    downingmarker(map, autoOpen);
    c3marker(map, autoOpen);
    update();
}

function initceremony() {
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        // zoom: 15,
        zoom: 14,
        minZoom: 13,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(52.200594, 0.156914),

        // Disables the default Google Maps UI components
        disableDefaultUI: false,
        scrollwheel: true,
        draggable: true,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: mapStyles

    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('c3map');
    var map = new google.maps.Map(mapElement, mapOptions);
    c3marker(map, true);
    // TODO: add parking markers

}

function initreception() {
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        // zoom: 15,
        zoom: 15,
        minZoom: 13,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(52.201469, 0.125178),

        // Disables the default Google Maps UI components
        disableDefaultUI: false,
        scrollwheel: true,
        draggable: true,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: mapStyles

    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('downingmap');
    var map = new google.maps.Map(mapElement, mapOptions);
    var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('downingpano'), {
              position:new google.maps.LatLng(52.201469, 0.125178),
              pov: {
                heading: 240,
                pitch: -10
              }
            });
        map.setStreetView(panorama);
    downingmarker(map, true);
    // TODO: add parking markers
}

function downingmarker(map, autoOpen) {
    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var downinginfo = '<strong>What:</strong> Reception & Evening Entertainment <br/>\
                        <strong>Where:</strong> Downing College on Regent Street.';

    var downingLatLng = new google.maps.LatLng(52.201469, 0.125178);
    var downingMarker = new google.maps.Marker({
        position: downingLatLng,
        map: map,
    });
    var downingInfoWindow = new google.maps.InfoWindow({
        content: downinginfo,
        maxWidth: 300,
        position: downingLatLng
    });
    if (autoOpen === true) {
        downingInfoWindow.open(map, downingMarker);
    }
    google.maps.event.addListener(downingMarker, 'click', function() {
        downingInfoWindow.open(map, downingMarker);
    });
}

function c3marker(map, autoOpen) {
    // var c3info = 'Ceremony @ New C3 Centre <br/>on Coldhams Lane';
    var c3info = '<strong>What:</strong> Wedding Ceremony <br/>\
    <strong>Where:</strong> New C3 Centre on Coldhams Lane';
    var c3LatLng = new google.maps.LatLng(52.200594, 0.156914);
    var c3Marker = new google.maps.Marker({
        position: c3LatLng,
        map: map,
    });
    var c3InfoWindow = new google.maps.InfoWindow({
        content: c3info,
        maxWidth: 300,
        position: c3LatLng
    });
    if (autoOpen === true) {
        c3InfoWindow.open(map, c3Marker);
    }

    google.maps.event.addListener(c3Marker, 'click', function() {
        c3InfoWindow.open(map, c3Marker);
    });
}
