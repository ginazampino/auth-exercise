/*

    'Import' Statements
    -------------------

    Import local environmental
    variables from dotenv.

*/

require('dotenv').config();

/*

    'Require' Statements
    --------------------

    Require packages for use by
    the Node application.

*/

const app = require('express')();
const session = require('express-session');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser'); // Evaluate HTTP req/res data.
const passport = require('passport');

/*

    'Use' Statements
    ----------------

    Initialize packages for use by
    the Express application.

*/

app.use(session({ secret: process.env.SESSION_SECRET })); // Refer to .env for value.
app.use(passport.initialize());
app.use(passport.session()); // Create sessions.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(history()); // Corrects HTTP errors when visiting Vue routes directly.

/*

    Install Middleware
    ------------------

    Add any required middleware for use
    by the Express application.

*/

let middleware = require('./middleware/manifest');
middleware.install(app);

let routes = require('./routes/manifest');
routes.install(app);

require('./middleware/passport');

/*

    Default Route
    -------------

    Define a root address for all
    unauthenticated traffic.

*/

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../build/index.html'));
});

/*

    Start Server
    ------------

    Run the Express server on
    the specified port.

*/

app.listen(process.env.PORT, () => {
    console.log('Now listening on port ' + process.env.PORT + '.');
});