//1.ciblé les input des données météos
//2.Cibler les cases qui vaut afficher les données météos
const inputdata = document.querySelectorAll("input");
const weatherDdataBox = document.querySelectorAll(".weatherData")
//je le stock dans une variable
for(let i =0; i<inputdata.length;i++){
    let inputdatas = inputdata[i];
    let weatherDdataBoxs;
    for(let i = 0;i<weatherDdataBox.length;i++){
        weatherDdataBoxs = weatherDdataBox[i];
        console.log(weatherDdataBoxs);
    }
    console.log(inputdatas);
}