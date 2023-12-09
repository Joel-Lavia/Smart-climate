//cle API
const apiKey = "df50276529db577511b060092bc121b0";
//selection des elements htlm
const nomDelaVille = document.querySelector("h2");
const previsionClimatique = document.querySelectorAll(".box");
const climaticParameters = document.querySelectorAll(".boxsetting");
const cheachVille = document.querySelector("form");
const st = document.querySelector("#state");
console.log(cheachVille);

function previsionweather(prevision, weatherState) {
  previsionClimatique[0].innerHTML = `${weatherState} ${prevision}`;
}
function weatherParameters(
  temperatur,
  temperaturMax,
  temperaturMin,
  windSpeed,
  humidit
) {
  climaticParameters[0].innerHTML = `<i class='fa-solid fa-temperature-high'></i> ${Math.round(
    temperatur
  )}°`;
  climaticParameters[1].innerHTML = `<i class='fa-solid fa-temperature-high'></i>max ${Math.round(
    temperaturMax
  )}° `;
  climaticParameters[2].innerHTML = `<i class='fa-solid fa-temperature-high'></i> min  ${Math.round(
    temperaturMin
  )}°`;
  climaticParameters[3].innerHTML = `<i class="fa-solid fa-wind"></i> vitesse du vent ${Math.round(
    windSpeed
  )} Km/h`;
  climaticParameters[4].innerHTML = `<i class="fa-solid fa-droplet"></i> Humidité relative ${Math.round(
    humidit
  )} %`;
}

function callApi(city) {
  //url de l'appel de l'API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&at&lon&appid=${apiKey}&units=metric`;
  fetch(url).then((Response) =>
    Response.json().then((data) => {
      nomDelaVille.innerText = data.name;
      let state = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png' alt="weather"/>`;
      previsionweather(data.weather[0].description, state);
      previsionClimatique[1].innerHTML = `ressentie <i class='fa-solid fa-temperature-high'></i>${Math.round(
      data.main.feels_like
      )}°`;
      weatherParameters(
        data.main.temp,
        data.main.temp_max,
        data.main.temp_min,
        data.wind.speed,
        data.main.humidity
      );
     if(data.weather[0].description == ''){
     alert('salut');
     }

      console.log(data);
    })
  );
}

cheachVille.addEventListener("submit", function (event) {
  event.preventDefault();
  let villeInput = document.querySelector("input").value;
  callApi(villeInput);
});

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  // alert('localisation reussi');
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

callApi("Kinshasa");
