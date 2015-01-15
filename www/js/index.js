document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    
    alert("ready!");

    function disp(pos) {
        $('.lat-view').html(pos.coords.latitude);
        $('.long-view').html(pos.coords.longitude);
        drawMap(pos.coords.latitude, pos.coords.longitude);
    }

    $('#getIt').click(function() {
        navigator.geolocation.getCurrentPosition(disp);
    });

    function drawMap(var lat, var long) {
            var myLatlng = new google.maps.LatLng(lat, long);
            var mapOptions = {
                zoom: 4,
                center: myLatlng
            }
            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Hello World!'
            });
        }

       
}


