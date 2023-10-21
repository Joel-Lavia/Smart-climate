//1.ciblé les input des données météos
//2.Cibler les cases qui vaut afficher les données météos
//3.cibler le boutton evoyer
const bouttonEnvoyer = document.querySelector("button");
    bouttonEnvoyer.addEventListener("click", function (event) {
     event.preventDefault(); // Empêcher le formulaire de se soumettre

        const inputdata = document.querySelectorAll("input");//Sélection des éléments inputs
        const weatherDataBox = document.querySelectorAll(".weatherData"); // Sélection des éléments qui ont la class "weatherData"
//la première boucle parcours les elements inputs et deuxième boucle parcours les  éléments avec la class "weatherData"
        for(let i = 0; i < inputdata.length; i++) {
            const inputdatas = inputdata[i];
            for(let j = 0; j < weatherDataBox.length; j++) {
                const weatherDataBoxs = weatherDataBox[j];
//condition de verification des indix des éléments inputs et class weatherData
                if (i === j) {
                    weatherDataBoxs.innerText = inputdatas.value;
                }
            }
        }
    });