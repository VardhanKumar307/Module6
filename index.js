function getInfo() {
    const locationName = document.getElementById("location");
    const accessToken = document.getElementById("token");

fetch('http://api.weatherstack.com/current?access_key='+accessToken.value+'&query='+locationName.value+'')
.then(response => response.json())
// .then(data => console.log(data))
.then(data => {
    document.getElementById("locations").innerHTML = "Location: " + String(data.location.name);
    document.getElementById("Lat").innerHTML = "Lat: " + Number(data.location.lat);
    document.getElementById("Lon").innerHTML = "Lon: " + Number(data.location.lon);
    document.getElementById("TimeZone").innerHTML = "Time Zone: " + String(data.location.timezone_id);
    document.getElementById("WindSpeed").innerHTML = "Wind Speed: " + Number(data.current.wind_speed);
    document.getElementById("Pressure").innerHTML = "Pressure: " + Number(data.current.pressure);
    document.getElementById("Humidity").innerHTML = "Humidity: " + Number(data.current.humidity);
    document.getElementById("WindDirection").innerHTML = "Wind Direction: " + String(data.current.wind_dir);
    document.getElementById("UVIndex").innerHTML = "UV Index: " + Number(data.current.uv_index);
    document.getElementById("FeelsLike").innerHTML = "Feels Like: " + Number(data.current.feelslike);

})

.catch(err => alert("Something went wrong"))
}
