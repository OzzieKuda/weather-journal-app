// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express'),
 bodyParser = require("body-parser");

// require further modules
 const fetch = require('node-fetch'),
  fs = require('fs');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));

// get api key into a variable
const apiKey = fs.readFileSync(`${__dirname}/api-key.txt`);

// TODO: get zip code with a get post
const exampleZip = 8853;

// Setup Server
app.listen(8000, () => {
  console.log("Listening to requests on port 8000 ...");
});

// post route

app.post('/weather', (req, res) => {
  const {
    date,
    temperature,
    feelings
  } = req.body
  // Storing the data sent from the client into the global object
  projectData.date = date;
  projectData.temperature = temperature;
  projectData.feelings = feelings;
  console.log(projectData)
  res.send({
    success: true
  }) // sending a success message
})

// get routes / endpoints

app.get('/weather', (req, res) => {
  res.send(projectData);
})

/*

app.get('/get-weather/', async (req, res) => {
  console.log('get-weather endpoint called');
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${exampleZip},ch&appid=${apiKey}&units=metric`;
  const options = {
    'method': 'GET'
  };

  const response = await fetch(apiUrl, options);
  
  try {
    const data = await response.json();
    const location = data.name;
    const temp = data.main.temp;
    const weather = data.weather[0].description;
    projectData = {
      location,
      temp,
      weather
    }
    res.json(projectData);
  } 
  
  catch(error) {
    console.log('error: ', error);
  }

});

*/

// post routes / endpoints
// TODO: Get data from client

/*

app.post('/zip-code/', (req, res) => {
  console.log(req);
  res.end('yes');
});

*/

/*

const weatherUrl = baseUrl + zipParameter + apiKey + format;

Request URL: http: //api.openweathermap.org/data/2.5/weather8853,ch&appid=f245a8ab742aa26adb273a9c50af54266&units=metric


const finalUrl =
  "api.openweathermap.org/data/2.5/weather?zip=8853,ch&appid=f245a8ab742aa26adb273a9c50af5426&units=metric";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather",
  zipParameter = "?zip=" + toString(zipcode),
  apiKey = "&appid=f245a8ab742aa26adb273a9c50af5426",
  format = "6&units=metric";

  */