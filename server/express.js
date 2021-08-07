// Import local environmental variables:
require('dotenv').config();

// Add Express and Express Session to the Node application:
const app = require('express')();
const session = require('express-session');

// Add Body Parser to evaluate HTTP data:
const bodyParser = require('body-parser');

// Add Passport to the Node application:
const passport = require('passport');

// Initialize Express Session and refer to .env for session secret:
app.use(session({ secret: process.env.SESSION_SECRET }));

// Initialize Passport:
app.use(passport.initialize());
app.use(passport.session()); // If not included, no sessions are created.

// Initialize Body Parser:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Require routes and other middleware:
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