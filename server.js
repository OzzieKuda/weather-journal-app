// Setup empty JS object to act as endpoint for all routes
// TODO: add data into projectData object
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

app.get('/get-weather/', async (req, res) => {
  console.log('get-weather endpoint called');
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${exampleZip},ch&appid=${apiKey}&units=metric`;
  const options = {
    'method': 'GET'
  };

  const response = await fetch(apiUrl, options);
  
  try {
    const data = await response.json();
    res.json(data);
  } 
  
  catch(error) {
    console.log('error: ', error);
  }

});


/*

const weatherUrl = baseUrl + zipParameter + apiKey + format;

const finalUrl =
  "api.openweathermap.org/data/2.5/weather?zip=8853,ch&appid=f245a8ab742aa26adb273a9c50af5426&units=metric";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather",
  zipParameter = "?zip=" + toString(zipcode),
  apiKey = "&appid=f245a8ab742aa26adb273a9c50af5426",
  format = "6&units=metric";

  */