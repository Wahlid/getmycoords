document.addEventListener('deviceready', onDeviceReady, false);



function onDeviceReady() {



    function disp(pos) {
        $('.lat-view').html(pos.coords.latitude);
        $('.long-view').html(pos.coords.longitude);
        var latlon = pos.coords.latitude + "," + pos.coords.longitude;
        alert(latlon);
    }

    $('#getIt').click(function () {
        navigator.geolocation.getCurrentPosition(disp);
    });

}

