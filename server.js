// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

app.get('/', (req, res) => {
    res.send('good afternoon ladies and gentlemen.')
});

app.listen(8000, () => {
  console.log("Listening to requests on port 8000 ...");
});


/**
 * example:
 * http: //api.openweathermap.org/data/2.5/weather?q=zurich&appid=f245a8ab742aa26adb273a9c50af5426&units=metric
 * 
 */