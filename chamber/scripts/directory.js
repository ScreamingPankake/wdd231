
const weatherDescription = document.querySelector('#weather-desc');
const temp = document.querySelector('#temp');
const feelsLike = document.querySelector('#feels-like');
const humidity = document.querySelector('#humidity');


const date = document.querySelector('#current-date');
const modified = document.querySelector('#last-modified');
const currentYear = new Date().getFullYear();
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

const myKey = '3d1637c46db1625a520785e8ba633bd3';
const lon = -111.93290224865027;
const lat = 40.87264377883748;

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=imperial`;


async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayWeather(data) {
    weatherDescription.textContent = data.weather[0].description;
    temp.textContent = `Tempurature: ${data.main.temp}°F`;
    feelsLike.textContent = `Feels like: ${data.main.feels_like}°F`;
    humidity.textContent = `Humidity: ${data.main.humidity}`;
}



apiFetch();


date.textContent = `© ${year} | Nathan Atwood | Utah USA`;
modified.textContent = `Last Modification: ${month}/${day}/${year} `;