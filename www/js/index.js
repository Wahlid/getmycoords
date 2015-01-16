document.addEventListener('deviceready', onDeviceReady, false);

var latlon;

function onDeviceReady() {

    alert(latlon);


    function disp(pos) {
        $('.lat-view').html(pos.coords.latitude);
        $('.long-view').html(pos.coords.longitude);
        latlon = pos.coords.latitude + "," + pos.coords.longitude;
        alert(latlon);
        showPosition();
    }

    $('#getIt').click(function () {
        navigator.geolocation.getCurrentPosition(disp);
    });

}


function showPosition(position) {

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";
            document.getElementById("
    mapholder ").innerHTML = " < img src = '" + img_url + "' > ";
        }