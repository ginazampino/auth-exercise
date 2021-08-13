/*

    'Require' Statements
    --------------------

    Require packages for use by
    the Node application.

*/

const path = require('path');
const express = require('express');

/*

    Consolidate Middleware
    ----------------------

    Combine and send all routes to
    the Express application.

*/

module.exports.install = (app) => {
    console.log('Middleware loaded.'); // Debug statement.
    require('./passport')(app);
    app.use(express.static(path.resolve(__dirname, '../../build'))); // Handle static files (i.e. bundle.js).
};