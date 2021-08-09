// Add path from Node:
const path = require('path');

// Add reference to Express and Express Router:
const express = require('express');
const router = express.Router();

// Add Passport for use by Express:
const passport = require('passport');

// Function to be used by Express Router:
function authenticate(req, res, next) {
    // Check if the session is authenticated:
    if (req.isAuthenticated()) {
        // If the session is authenticated, continue:
        return next();
    } else {
        // If the session isn't authenticated, redirect:
        console.log('Failed to authenticate with Google.')
        res.redirect('/');
    }
};

// Use the authenticate method from Express Router:
router.use(authenticate);

module.exports = (app) => {
    // Send index.html as the default unauthenticated route:
     app.get('/', (req, res) => {
         res.sendFile(path.resolve(__dirname, '../../client/index.html'));
     });
}; 