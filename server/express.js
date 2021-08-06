// Import local environmental variables:
require('dotenv').config();

// Add Express and Express Session to the Node application:
const express = require('express');
const session = require('express-session');
const app = express();

// Add Passport to the Node application:
const passport = require('passport');

// Use Express Session and refer to .env for session secret:
app.use(session({ secret: process.env.SESSION_SECRET }));

// Use Passport:
app.use(passport.initialize());
app.use(passport.session()); // If not included, no sessions are created.

// Require middleware:
let middleware = require('./middleware/middleware');
let routes = require('./routes/routes');
middleware.install(app);
routes.install(app);

// Import Passport information:
require('./middleware/passport');

// Start the Express server on the specified port:
app.listen(process.env.PORT, () => {
    console.log('Now listening on port ' + process.env.PORT + '.');
});