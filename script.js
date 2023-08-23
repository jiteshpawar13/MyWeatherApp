const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const liveTemp = document.getElementById('live-temp');
const liveTempIcon = document.getElementById('live-temp-icon');
const liveCondition = document.getElementById('live-condition');
const liveHumidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const wind = document.getElementById('wind');
const liveSunrise = document.getElementById('sunrise');
const liveSunset = document.getElementById('sunset');
const day1Icon = document.getElementById('day1-icon');
const day2Icon = document.getElementById('day2-icon');
const day3Icon = document.getElementById('day3-icon');
const day4Icon = document.getElementById('day4-icon');
const day1MaxTemp = document.getElementById('day1-max-temp');
const day1MinTemp = document.getElementById('day1-min-temp');
const day2MaxTemp = document.getElementById('day2-max-temp');
const day2MinTemp = document.getElementById('day2-min-temp');
const day3MaxTemp = document.getElementById('day3-max-temp');
const day3MinTemp = document.getElementById('day3-min-temp');
const day4MaxTemp = document.getElementById('day4-max-temp');
const day4MinTemp = document.getElementById('day4-min-temp');
const day1Date = document.getElementById('day1-date');
const day2Date = document.getElementById('day2-date');
const day3Date = document.getElementById('day3-date');
const day4Date = document.getElementById('day4-date');


const days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursIn12HrFormat = hours >= 13 ? hours%12 : hours
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`
    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]

}, 1000)

 const searchBox = document.querySelector("#search input");
 const searchBtn = document.querySelector("#search button");

 const apiKey = "eb65fde9c43b4147ad4181643232308";
 const apiUrl = "https://api.weatherapi.com/v1/forecast.json?&days=4&aqi=no&alerts=yes"

 async function checkWeather(city) {
    const response = await fetch(apiUrl + `&key=${apiKey}` + `&q=${city}`);
    var data = await response.json();
    console.log(data)
    showWeatherData(data)
 }

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
 })

// async function checkWeather() {
//     const response = await fetch(apiUrl + `&key=${apiKey}`);
//     var data = await response.json();
//     showWeatherData(data)
//     console.log(data)
//  }

// checkWeather();


function showWeatherData (data) {
    document.querySelector("#city-block").innerHTML = data.location.name;
    let livetemp = Math.round(data.current.temp_c);
    let livetempicon = data.current.condition.icon;
    let livecondition = data.current.condition.text;
    let {humidity, pressure_mb} = data.current;
    let {wind_kph} = data.current;
    let {sunrise, sunset} = data.forecast.forecastday[0].astro;
    let day1icon = data.forecast.forecastday[0].day.condition.icon;
    let day2icon = data.forecast.forecastday[1].day.condition.icon;
    let day3icon = data.forecast.forecastday[2].day.condition.icon;
   // let day4icon = data.forecast.forecastday[3].day.condition.icon;
    let day1maxtemp = Math.round(data.forecast.forecastday[0].day.maxtemp_c);
    let day1mintemp = Math.round(data.forecast.forecastday[0].day.mintemp_c);
    let day2maxtemp = Math.round(data.forecast.forecastday[1].day.maxtemp_c);
    let day2mintemp = Math.round(data.forecast.forecastday[1].day.mintemp_c);
    let day3maxtemp = Math.round(data.forecast.forecastday[2].day.maxtemp_c);
    let day3mintemp = Math.round(data.forecast.forecastday[2].day.mintemp_c);
   // let day4maxtemp = Math.round(data.forecast.forecastday[3].day.maxtemp_c);
   // let day4mintemp = Math.round(data.forecast.forecastday[3].day.mintemp_c);
    let date1 = data.forecast.forecastday[0].date;
    let date2 = data.forecast.forecastday[1].date;
    let date3 = data.forecast.forecastday[2].date;
   // let date4 = data.forecast.forecastday[3].date;



    liveTemp.innerHTML = `
    ${livetemp}&#176; c
    `
    liveTempIcon.src = `${livetempicon}`
    liveCondition.innerHTML = `${livecondition}`
    liveHumidity.innerHTML = `${humidity} %`
    pressure.innerHTML = `${pressure_mb} hPa`
    wind.innerHTML = `${wind_kph} m/sec`
    liveSunrise.innerHTML = `${sunrise}`
    liveSunset.innerHTML = `${sunset}`
    day1Icon.src = `${day1icon}`
    day2Icon.src = `${day2icon}`
    day3Icon.src = `${day3icon}`
   // day4Icon.src = `${day4icon}`

    day1MaxTemp.innerHTML = `
    Day ${day1maxtemp} &#176; c
    `
    day1MinTemp.innerHTML = `
    Night ${day1mintemp} &#176; c
    `
    day2MaxTemp.innerHTML = `
    Day ${day2maxtemp} &#176; c
    `
    day2MinTemp.innerHTML = `
    Night ${day2mintemp} &#176; c
    `
    day3MaxTemp.innerHTML = `
    Day ${day3maxtemp} &#176; c
    `
    day3MinTemp.innerHTML = `
    Night ${day3mintemp} &#176; c
    `
    // day4MaxTemp.innerHTML = `
    // Day ${day4maxtemp} &#176; c
    // `
    // day4MinTemp.innerHTML = `
    // Night ${day4mintemp} &#176; c
    // `

  
    day2Date.innerHTML = `
    ${date2}
    `
    day3Date.innerHTML = `
    ${date3}
    `
    // day4Date.innerHTML = `
    // ${date4}
    // `
}



