//cle API
const apiKey = 'df50276529db577511b060092bc121b0';
//selection des elements htlm
const nomDelaVille = document.querySelector("h2");
const previsionClimatique = document.querySelector(".box");
const climaticParameters = document.querySelectorAll(".boxsetting");
const cheachVille = document.querySelector("form");
console.log(cheachVille); 

function previsionweather(prevision){
previsionClimatique.innerText = prevision;
}
function weatherParameters(temperatur,temperaturMax,temperaturMin,windSpeed,humidit){
    climaticParameters[0].innerHTML = `<i class='fa-solid fa-temperature-high'></i>${Math.floor(temperatur)}°`;
    climaticParameters[1].innerHTML = `<i class='fa-solid fa-temperature-high'></i>${Math.floor(temperaturMax)}°`;
    climaticParameters[2].innerHTML = `<i class='fa-solid fa-temperature-high'</i>${Math.floor(temperaturMin)}°`;
    climaticParameters[3].innerHTML = `<i class="fa-solid fa-wind"></i>${Math.floor(windSpeed)} KM/H`;
    climaticParameters[4].innerHTML = `<i class="fa-solid fa-droplet"></i> ${Math.floor(humidit)} %`;
}

function callApi(city){
    //url de l'appel de l'API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=${apiKey}&units=metric`;
    fetch(url).then( Response=>Response.json().then(data =>{
                nomDelaVille.innerText = data.name;
                previsionweather(data.weather[0].description);
                weatherParameters(data.main.temp,data.main.temp_max,data.main.temp_min,data.wind.speed,data.main.humidity);
                console.log(data);
            }));
}

cheachVille.addEventListener('submit',function(event){
event.preventDefault();
let villeInput = document.querySelector("input").value;
callApi(villeInput);

// if(villeInput == " "){
// alert(`Veuiller entrée les Noms d'une Ville`)
// }

});

callApi("Kinshasa");


