// ---------------------- API CALL -----------------------
const getDataBtn = document.querySelector("button");
const DOMcityName = document.getElementById("city");
const DOMtemp = document.getElementById("temp");
const DOMweatherType = document.getElementById("current-weather");
const DOMfeelsLike = document.getElementById("feel-like-temp");
const DOMwind_speed = document.getElementById("wind-speed");
const DOMhumidity = document.getElementById("humidity-data");

const weatherImageIcon = document.getElementById("main-icon");

getDataBtn.addEventListener('click',async() => {

    let compactURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}`
    let key = `&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`;
    
    let response = await fetch(`${compactURL}${key}`)
    let data = await response.json();

    updateDOM(data)
})

// ---- DOM Manipulations ---
function updateDOM(data){
    upadteDateMonth(data.sys.sunrise);

    DOMcityName.innerText = `${inputBox.value}, ${data.sys.country}`;
    DOMtemp.innerText = tempConversion(data.main.temp);
    DOMweatherType.innerHTML = `<h3>${captializeFirstLetter(data.weather[0].description)}</h3>`; 
    DOMfeelsLike.innerText = tempConversion(data.main.feels_like)
    DOMwind_speed.innerHTML = `${data.wind.speed}km/h`;
    DOMhumidity.innerText = `${data.main.humidity}%`;

    updateWeatherIcon(data)
} 

function updateWeatherIcon(iconType){
    const icon = iconType.weather[0].icon;
    weatherImageIcon.src = `icons/${icon}.svg` 
}

// ----- Addition Functions to make work easy -------

tempConversion = (tempData) =>{
    return ((tempData - 32) * (5/9)).toFixed(0);
}

function captializeFirstLetter(string){
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

timeConverstion = (time) => {
    currTime = new Date(time * 1000);
    return timeArr = currTime.toString().split(" ");
}

function upadteDateMonth(time){
    let days = {
        'Sun' : 'Sunday',
        'Mon' : 'Monday',
        'Tue' : 'Tuesday',
        'Wed' : 'Wednesday',
        'Thu' : 'Thursday',
        'Fri' : 'Friday',
        'Sat' : 'Saturday',
    }
    let months ={
        'Jan' : 'January',
        'Feb' : 'Feburary',
        'Mar' : 'March',
        'Apr' : 'April',
        'May' : 'May',
        'Jun' : 'June',
        'Jul' : 'July',
        'Aug' : 'August',
        'Sept' : 'September',
        'Oct' : 'October',
        'Nov' : 'November',
        'Dec' : 'December'
    }
    
    timeArr = timeConverstion(time);

    const day = document.getElementById("day-of-week").innerText = days[`${timeArr[0]}`];
    const month = document.getElementById("month-of-year").innerText = months[`${timeArr[1]}`];
    const date = document.getElementById("day-of-month").innerText = timeArr[2];
}


