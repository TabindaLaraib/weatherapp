import checkWeather from "./weather.js";

async function data(){
    let current_city = document.querySelector('#input_city').value;
    let current_weather = await checkWeather(current_city);
    document.querySelector('img').src=await current_weather.current.condition.icon;
    document.querySelector('#weather_unit').textContent=await "°C";
    document.querySelector('#weather_value').textContent = await current_weather.current.temp_c;
    document.querySelector('#region').textContent = await current_weather.location.name;
    document.querySelector('#region').textContent = await current_weather.location.localtime;
    console.log(current_weather)
}

document.querySelector('#checkweatherbtn').addEventListener("click", function(){
    data();
})
