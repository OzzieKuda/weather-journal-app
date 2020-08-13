/* Global Variables */

const button = document.getElementById('generate'),
 feelings = document.getElementById('feelings'),
 zip = document.getElementById('zip'),
 date = document.querySelector("#date"),
 temp = document.querySelector("#temp"),
 content = document.querySelector("#content");
 // document.querySelector("#entryHolder")

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// functions

const logFeeling = () => {};

const updateLog = () => {
    date.innerHTML = newDate;
    temp.innerHTML = zip.value;
    content.innerHTML = feelings.value;
    zip.value = '';
    feelings.value = '';
};

// event listeners
button.addEventListener('click', () => {
    updateLog();
});

// API Weather Map

const baseUrl = 'http://api.openweathermap.org/data/',
 apiKey = '&appid=f245a8ab742aa26adb273a9c50af5426',
 format = '6&units=metric';

//  http://api.openweathermap.org/data/2.5/weather?q=zurich&appid=f245a8ab742aa26adb273a9c50af5426&units=metric