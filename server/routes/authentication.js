// Add path from Node:
const path = require('path');

// Add reference to Express and Express Router:
const express = require('express');
const router = express.Router();

// Function to be used by Express Router:
function authenticate(req, res, next) {
    // Check if the session is authenticated:
    if (req.isAuthenticated()) {
        // If the session is authenticated, continue:
        return next();
    } else {
        // If the session isn't authenticated, redirect:
        res.redirect('/');
    }
};

// Use the authenticate method from Express Router:
router.use(authenticate);

// Add Passport for use by Express:
const passport = require('passport');

// Import Sequelize models:
const { Users, Profiles } = require('../database/sequelize');

module.exports = (app) => {
    // Attempt to authenticate the user and retrieve their Google information:
    app.get('/google/auth', passport.authenticate('google', {
        scope: ['email', 'profile']
    }));

    // After an authentication attempt, Google redirects the user to this route:
    app.get('/google/callback', passport.authenticate('google', {
        // If the authentication succeeds, redirect the user:
        successRedirect: '/findOrCreateUser',
        // If the authentication fails, redirect the user:
        failureRedirect: '/'
    }));

    // End the user's session:
    app.get('/google/logout', (req, res) => {
        req.logout(); // The user is logged out.
        res.redirect('/'); // The user is redirected away.
    });
}