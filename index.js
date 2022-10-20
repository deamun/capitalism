// Set up Express
const express = require('express');
const app = express();

// Body-parsing middleware
const bodyParser = require('body-parser');
// Configure bodyParser to use JSON for formatting of the request body.
app.use(bodyParser.json());
// Support for encoded bodies
app.use(bodyParser.urlencoded({extended: true }));

// Port is hardcoded for now, it will be programatically assigned in the future.
const PORT = 3000;

// A basic route to display something on the home page for the app.
app.get('/', async(request, response) => {
    await response.send({info: "E-commerce API built using Node.js, Express, and Postgres."});
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});