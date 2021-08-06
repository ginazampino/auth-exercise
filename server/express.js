// Import local environmental variables:
require('dotenv').config();

// Add Express and Express Session to the Node application:
const express = require('express');
const session = require('express-session');
const app = express();

// Use Express Session within Express:
app.use(session({ secret: process.env.SESSION_SECRET }));

// Start the Express server on the specified port:
app.listen(process.env.PORT, () => {
    console.log('Now listening on port ' + process.env.PORT + '.');
});