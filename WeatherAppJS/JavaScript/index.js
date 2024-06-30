let dayName = document.getElementById("dayName");
let dayDate = document.getElementById("dayDate");
let targetCity = document.querySelector('.targetCity');
let targetCity2 = document.querySelector('.targetCity2');
let targetCity3 = document.querySelector('.targetCity3');
let targetTemp = document.getElementById("targetTemp");
let targetStatus = document.getElementById("targetStatus");
let targetWindDirection = document.getElementById("targetWindDirection");
let targetWind = document.getElementById("targetWind");
let targetRain = document.getElementById("targetRain")
let dayNameTom = document.getElementById("dayNameTom");
let dayDateTom = document.getElementById("dayDateTom");
let targetWindDirectionTom = document.getElementById("targetWindDirectionTom");
let targetTempTom = document.getElementById("targetTempTom");
let targetTempAfterTom = document.getElementById("targetTempAfterTom");
let targetStatusTom = document.getElementById("targetStatusTom")
let findCity = document.getElementById("FindCity");
const apiKey = "f5f22aecb0774820958145423242506";



async function getCurrent() {
    let searchText = findCity.value;
    console.log(searchText);
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5f22aecb0774820958145423242506&q=`+searchText+`&days=3&aqi=no&alerts=no`);
    const targetDays = await response.json();
    targetStatus.innerText = targetDays.current.condition.text;
    targetTemp.innerText = targetDays.current.temp_c;
    targetCity.innerText = targetDays.location.name;
    targetCity2.innerText = targetCity.innerText;
    targetCity3.innerText = targetCity.innerText;
    targetWind.innerText = targetDays.current.wind_kph + "  km/h";
    targetTempTom.innerText = targetDays.forecast.forecastday[1].hour[13].temp_c; 
    targetTempAfterTom.innerText = targetDays.forecast.forecastday[2].hour[13].temp_c; 


    console.log(targetDays);

    
    
}

