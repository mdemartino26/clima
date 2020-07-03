if ("geolocation" in navigator) {
    console.log('Geolocalizacion disponible');

    navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        document.getElementById('latitud').textContent = lat.toFixed(2);
        const lng = position.coords.longitude;
        document.getElementById('longitud').textContent = lng.toFixed(2);
        const weather_api = fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+lng+"&appid=0cc0aa93a7dff5d1bebefc67587b8cff&units=metric")
            .then(function (resp) { return resp.json() }) // Convert data to json
            .then(function (data) {
                console.log(data);
                
                main = data['main'];
                temperature = main['temp'];
                console.log(temperature)
                sys = data['sys'];
                country=sys['country'];
                console.log(country)
                document.getElementById('pais').textContent = country;
                document.getElementById('temperatura').textContent = temperature;


            })
            .catch(function () {
                // catch any errors
            });
    })
       

} else {
    console.log('perdón pero no puedo geolocalizarte')
}


