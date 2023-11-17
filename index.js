//cle API
const apiKey = 'df50276529db577511b060092bc121b0';
let url = `https://api.openweathermap.org/data/2.5/weather?q=Kinshasa&lang=fr&appid=${apiKey}&units=metric`;

fetch(url).then( Response=>Response.json().then(data =>console.log(data)));


