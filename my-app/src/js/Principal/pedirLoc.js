function pedirLoc(){
    navigator.geolocation.getCurrentPosition(function(position) {
            
        var latitude   = position.coords.latitude;
        var longitude  = position.coords.longitude;

        console.log(latitude);
        console.log(longitude);
    });
}

export default pedirLoc;