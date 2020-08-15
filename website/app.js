/* Global Variables */
const button = document.getElementById('generate'),
 feelings = document.getElementById('feelings'),
 country = document.getElementById('country'),
 zip = document.getElementById('zip'),
 date = document.querySelector("#date"),
 temp = document.querySelector("#temp"),
 content = document.querySelector("#content"),
 entry = document.querySelector(".entry");

 let zipcode, countrycode;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`;

// functions

// update UI
const updateUI = async (url = '') => {
  const res = await fetch(url);
  try {
    const projectData = await res.json();
    date.innerHTML = `Date: ${projectData.date}`;
    temp.innerHTML = `Weather: ${projectData.temperature}`;
    content.innerHTML = `Feelings: ${projectData.feelings}`;
    console.log('UI updated!')
    console.log(
      `Date: ${projectData.date}`,
      `Weather: ${projectData.temperature}`,
      `Feelings: ${projectData.feelings}`
    )
  } catch (error) {
    console.log(error);
  }
}

// reset log
const resetLog = () => {
  country.value = '';
  zip.value = '';
  feelings.value = '';
};

// event listener
button.addEventListener('click', async () => {
  await postData("/weather", {
    date: newDate,
    temperature: await getWeather(),
    feelings: feelings.value,
  });
  updateUI('/weather');
  resetLog();
  entry.classList.remove("hidden");
});

// API Weather Map
const getWeather = async (zipcode) => {
  zipcode = zip.value;
  countrycode = country.value;
   const baseURL = "https://api.openweathermap.org/data/2.5/weather",
     zipParameter = "?zip=" + zipcode + "," + countrycode,
     apiKey = "&appid=f245a8ab742aa26adb273a9c50af5426",
     format = "&units=metric";
  const apiURL = baseURL + zipParameter + apiKey + format;
  const res = await fetch(apiURL);
  try {
    const userData = await res.json();
    return `${userData.main.temp}°C, ${userData.weather[0].description}, ${userData.name}`;
  } catch (error) {
    console.log("error", error);
    console.log('invalid zip code')
  }
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
  }
};