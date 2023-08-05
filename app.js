// var API_KEY = "c56a2006fe9ded964db1f076a7bc7ce0";
// var city = 'karachi';
// var countryCode = '+92';
// var stateCode = 'PK-SD';
// var API = `https://api.openweathermap.org/data/2.5/weather?q=${city},${stateCode},${countryCode}&appid=${API_KEY}`;

// fetch(API)
//     .then(response => response.json())
//     .then(data => {

//         console.log(data);

//     })
//     .catch(error => {

//         console.error("Error fetching data: ", error);

//     });






var formId = document.getElementById('form-id1');

var inpId = document.getElementById('inp-id1-for-input');

var searchInpId = document.getElementById('inp-id2-for-search');

var locationEnterByUser = document.getElementById('h2-id2-for-location-enter-by-user');

var weatherQuality = document.getElementById('b-id1-for-weather-quality');

var temprature = document.getElementById('p-id1-for-temprature');

var minTemp = document.getElementById('b-id2-for-mintemp');
var minTempValue = document.getElementById('b-id3-for-mintemp-value');

var maxTemp = document.getElementById('b-id4-for-maxtemp');
var maxTempValue = document.getElementById('b-id5-for-maxtemp-value');

var img = document.getElementById('img-tag1');


searchInpId.addEventListener('click', clickFunction);

function clickFunction() {


    if (inpId.value == "") {

        alert("Please fill out the input field");
        inpId.focus();

    } else {


        var API_KEY = "c56a2006fe9ded964db1f076a7bc7ce0";
        var city = inpId.value;
        console.log(city);
        var countryCode = '+92';
        var API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

        fetch(API)
            .then(response => response.json())
            .then(data => {

                console.log(data);

                if (data.cod == '404') {

                    locationEnterByUser.innerText = data.cod + ' ' + data.message;
                    img.removeAttribute('src');



                    weatherQuality.innerText = "";
                    temprature.innerText = "";

                    minTempValue.innerText = "";
                    maxTempValue.innerText = "";



                } else {

                    if (data.sys.country == null) {

                        locationEnterByUser.innerText = data.name;

                    } else {

                        locationEnterByUser.innerText = data.sys.country + ' ' + data.name;

                    };

                };

                if (data.weather[0].description == 'smoke') {

                    img.setAttribute('src', './smokeImage.jpg');

                } else if (data.weather[0].description == 'broken clouds') {

                    img.setAttribute('src', './brokenCloudsImage.jpg');

                } else if (data.weather[0].description == 'clear sky') {

                    img.setAttribute('src', './clearSkyImage.jpg');

                } else if (data.weather[0].description == 'light rain') {

                    img.setAttribute('src', './lightRainImage.jpg');

                } else if (data.weather[0].description == 'scattered clouds') {

                    img.setAttribute('src', './scatteredCloudsImage.jpg');

                } else if (data.weather[0].description == 'moderate rain') {

                    img.setAttribute('src', './moderateRainImage.jpg');

                } else if (data.weather[0].description == "few clouds") {

                    img.setAttribute('src', './fewCloudsImage.jpg');

                } else if (data.weather[0].description == "overcast clouds") {

                    img.setAttribute('src', './overcastCloudsImage.jpg');

                } else if (data.weather[0].description == "mist") {

                    img.setAttribute('src', './mistImage.jpg');

                } else if (data.weather[0].description == "haze") {

                    img.setAttribute('src', './hazeImage.jpg');

                }


                // smoke, broken clouds, clear sky,  light rain, scattered clouds, moderate rain, few clouds, overcast clouds, mist, haze,


                weatherQuality.innerText = data.weather[0].description;
                temprature.innerText = data.main.temp;

                minTempValue.innerText = data.main.temp_min;
                maxTempValue.innerText = data.main.temp_max;


            })
            .catch(error => {

                console.error("Error fetching data: ", error);

            });


        // locationEnterByUser.innerText = inpId.value;
        inpId.value = "";

    };

};
