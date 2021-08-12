/*

    Consolidate Routes
    ------------------

    Combine and send all routes to
    the Express application.

*/

module.exports.install = (app) => {
    console.log('Routes loaded.'); // Debug statement
    require('./debug')(app);
    require('./authentication/login')(app);
}