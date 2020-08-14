/* Global Variables */

const button = document.getElementById('generate'),
 feelings = document.getElementById('feelings'),
 zip = document.getElementById('zip'),
 date = document.querySelector("#date"),
 temp = document.querySelector("#temp"),
 content = document.querySelector("#content");

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
const getWeather = async () => {
    const apiUrl = '/get-weather';
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json);
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
