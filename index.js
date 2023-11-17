//cle API
const apiKey = 'df50276529db577511b060092bc121b0';

//url de l'appel de l'API
let url = `https://api.openweathermap.org/data/2.5/weather?q=Kinshasa&lang=fr&appid=${apiKey}&units=metric`;

const nomDelaVille = document.querySelector("h2");
const previsionClimatique = document.querySelectorAll(".box");
function previsionweather(firstPrevision,secondPrevision){
    for(let i = 0; i<previsionClimatique.length;i++){
        previsionClimatique[0].innerText = firstPrevision.description;
        previsionClimatique[1].innerText = secondPrevision.description;
        }  
}

console.log(previsionClimatique);

fetch(url).then( Response=>
    Response.json().then(data =>
        {
            nomDelaVille.innerText = data.name;
            previsionweather(data.weather[0],data.weather[1]);
            
            console.log(data)
           
        
        
        
        }));


