import key from "./api_key.js";

async function checkWeather(city){
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`)
    
    const data= await res.json()
    return data
}
export default checkWeather