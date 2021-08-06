// Add path from Node:
const path = require('path');

module.exports = (app) => {
    // Add Express Router to the Express application:
    const express = require('express'); // Needed by Express Router.
    const router = express.Router();

    // Send index.html to the root URL:
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../client/index.html'));
    });
};