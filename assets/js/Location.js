function getLocation() {

    if (navigator.geolocation) {
        // timeout at 60000 milliseconds (60 seconds)
        var options = { timeout: 60000 };
        navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
    } else {
        console.log("Sorry, browser does not support geolocation!");
    }
}

function errorHandler(err) {
    if (err.code == 1) {
        console.log("Error: Access is denied!");
    } else if (err.code == 2) {
        console.log("Error: Position is unavailable!");
    } else {
        console.log("Error");
    }
}

function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var latlng = new google.maps.LatLng(lat, lng);

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var location = [];
            jQuery.each(results[0].address_components, function(index, item) {
                if (jQuery.inArray("route", item.types) == -1 &&
                    jQuery.inArray("street_number", item.types) == -1 &&
                    jQuery.inArray("sublocality_level_1", item.types) == -1 &&
                    jQuery.inArray("neighborhood", item.types) == -1 &&
                    jQuery.inArray("locality", item.types) == -1 &&
                    jQuery.inArray("administrative_area_level_2", item.types) == -1) {
                    location.push(item.long_name);

                }
                if (jQuery.inArray("administrative_area_level_1", item.types) == 0) {
                    $.post('api/ip_session', { city: item.long_name });
                }
            });
            location = location.join(", ");
            $('.info').html("Bạn đang ở: " + location);
        }
    });
}
$(document).ready(function() {
    $('#custom-search-input button').click(function() {
        var search_term = $('#custom-search-input .searchTerm').val();
        $.get('api/query/' + encodeURIComponent(search_term), function(data) {
            $('div.result').html(data);
        });
    });
    $('#custom-search-input .searchTerm').keypress(function(event) {

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            var search_term = $('#custom-search-input .searchTerm').val();
            $.get('api/query/' + encodeURIComponent(search_term), function(data) {
                $('div.result').html(data);
            });
        }
        event.stopPropagation();
    });
});
if (getLocation()) {
    var current_location = getLocation();
    //                jQuery('#location').val(current_location.location);
    //                jQuery('#location_lat').val(current_location.lat);
    //                jQuery('#location_lng').val(current_location.lng);
    //                jQuery('#location_name').val(current_location.location);
} else {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            //console.log(position);
        });
    }
}