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

// Import Sequelize models from Sequelize:
const { Users, Profiles } = require('../database/sequelize');

module.exports = (app) => {
   // Send index.html as the default unauthenticated route:
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../client/index.html'));
    });

    // Attempt to authenticate the user and retrieve their Google information:
    app.get('/google/auth', passport.authenticate('google', {
        scope: ['email', 'profile']
    }));

    // After an authentication attempt, Google redirects the user to this route:
    app.get('/google/callback', passport.authenticate('google', {
        // If the authentication succeeds, redirect the user:
        successRedirect: '/auth/create/user',
        // If the authentication fails, redirect the user:
        failureRedirect: '/'
    }));

    // End the user's session:
    app.get('/google/logout', (req, res) => {
        req.logout(); // The user is logged out.
        res.redirect('/'); // The user is redirected away.
    });

    // Find or create a user upon Google authentication:
    app.get('/auth/create/user', authenticate, async (req, res) => {
        // Query the database users table:
        await Users.findOrCreate({
            where: {
                // Retrieve the user's email from data returned from Google:
                email: req.user.emails[0].value
            }
        }).then(
            // After querying the database, redirect the user:
            res.redirect('/secure')
        );
    });

    // Debug routes:
    app.get('/secure', authenticate, (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../client/secure.html'));
    });

    app.get('/success', authenticate, (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../client/success.html'));
    });

    app.get('/failure', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../client/failure.html'));
    });

    app.post('/debug/post', authenticate, async (req, res) => {
        await Profiles.create({
            username: req.body.username
        });
    });
};