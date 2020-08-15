/* Global Variables */

const button = document.getElementById('generate'),
 feelings = document.getElementById('feelings'),
 zip = document.getElementById('zip'),
 date = document.querySelector("#date"),
 temp = document.querySelector("#temp"),
 content = document.querySelector("#content");

 let zipcode;

 zipcode = 8853;

 const baseURL = "http://api.openweathermap.org/data/2.5/weather",
   zipParameter = "?zip=" + zipcode + ',ch',
   apiKey = "&appid=f245a8ab742aa26adb273a9c50af5426",
   format = "&units=metric";

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

const getWeather = async (zipcode) => {
  zipcode = zipcode;
  const apiURL = baseURL + zipParameter + apiKey + format;
  const res = await fetch(apiURL);
  try {
    const userData = await res.json();
    console.log(userData);
    return userData.main.temp;
  } catch (error) {
    console.log("error", error);
  }
};

//////////////////////////

// send zip to /zip-code
// TODO: Send zip-code to backend
const transferZip = async (zip) => {
    await fetch('/zip-code');
};

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};