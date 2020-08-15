// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express'),
 bodyParser = require("body-parser");

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

// Setup Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
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
  console.log('data received from client:')
  console.log(req.body)
  res.send({
    success: true
  }) // sending a success message
})

// get routes / endpoints

app.get('/weather', (req, res) => {
  res.send(projectData);
})