document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {

    alert("ready!");

    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)

    function disp(pos) {
        $('.lat-view').html(pos.coords.latitude);
        $('.long-view').html(pos.coords.longitude);
    }

    $('#getIt').click(function () {
        navigator.geolocation.getCurrentPosition(disp);
    });





}