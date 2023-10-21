//1.ciblé les input des données météos
//2.Cibler les cases qui vaut afficher les données météos
const inputdata = document.querySelectorAll("input");
const weatherDataBox = document.querySelectorAll(".weatherData")
const bouttonEnvoyer = document.querySelector("button");
//je le stock dans une variable
for(let i =0; i<inputdata.length;i++){
    let inputdatas = inputdata[i];
bouttonEnvoyer.addEventListener("click",function(event){
event.preventDefault();
}
)
}

    for(let i = 0;i<weatherDataBox.length;i++){
        let weatherDataBoxs = weatherDataBox[i]; 
        weatherDataBoxs.addEventListener("click",function(event){
        
        })
        }