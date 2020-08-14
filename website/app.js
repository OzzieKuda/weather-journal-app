/* Global Variables */

const button = document.getElementById('generate'),
 feelings = document.getElementById('feelings'),
 zip = document.getElementById('zip'),
 date = document.querySelector("#date"),
 temp = document.querySelector("#temp"),
 content = document.querySelector("#content");
 // document.querySelector("#entryHolder");

 let zipcode;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// functions

const updateLog = () => {
    date.innerHTML = newDate;
    temp.innerHTML = zip.value;
    content.innerHTML = feelings.value;
    zipcode = zip.value;
    zip.value = '';
    feelings.value = '';
};

// event listeners
button.addEventListener('click', () => {
    updateLog();
});

// API Weather Map

// TODO: add async await to catch data

const finalUrl = 'api.openweathermap.org/data/2.5/weather?zip=8853,ch&appid=f245a8ab742aa26adb273a9c50af5426&units=metric';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather',
 zipParameter = '?zip=' + toString(zipcode),
 apiKey = '&appid=f245a8ab742aa26adb273a9c50af5426',
 format = '6&units=metric';

 const weatherUrl = baseUrl + zipParameter + apiKey + format;

const getWeather = async () => {
    const apiUrl = '/get-weather';
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json);
};

 /**
  *
  const getWeather = async (apiUrl) => {
      const response = await fetch(apiUrl);
      console.log(response)
      try {
          const data = await response.json();
          console.log(data);
          return data;
      } catch (error) {
          console.log('Error: ', error);
          return ('invalid zip code!');
      }
  };
  */


/**
 * api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
 */

//  http://api.openweathermap.org/data/2.5/weather?q=zurich&appid=f245a8ab742aa26adb273a9c50af5426&units=metric