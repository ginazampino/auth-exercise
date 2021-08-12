/*

    'Require' Statements
    --------------------

    Require packages for use by
    the Node application.

*/

const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback'); // History support for vue-router.

/*

    Consolidate Middleware
    ----------------------

    Combine and send all routes to
    the Express application.

*/

module.exports.install = (app) => {
    console.log('Middleware loaded.'); // Debug statement.
    require('./passport')(app);
    app.use(history()); // Map 404s to index.html for SPAs.
    app.use(express.static(path.resolve(__dirname, '../../build'))); // Handle static files (i.e. bundle.js).
};