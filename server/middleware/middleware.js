// Add path from Node:
const path = require('path');

// Add Express for use by middleware:
const express = require('express');

// Add history support for Vue Router:
const history = require('connect-history-api-fallback');

module.exports.install = (app) => {
    console.log('Middleware loaded.');

    // Import external separate configurations:
    require('./passport')(app);
    
    // Map 404s to index.html for SPA support:
    app.use(history());

    // Enable Express to handle static files:
    app.use(express.static(
        path.resolve(__dirname, '../../build')
    ));
};