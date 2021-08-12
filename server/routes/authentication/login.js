/*

    'Require' Statements
    --------------------

    Require packages for use by
    the Node application.

*/

const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');

/*

    'Import' Statements
    -------------------

    Import database models from
    Sequelize for use by Express.

*/

const { Users, Profiles } = require('../../database/sequelize');

/*

    Function Definitions
    --------------------

    Add a function to be used by 
    Express Router to check if an 
    Express Session is authenticated.

*/

function authenticate(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        console.log('Failed to authenticate with Google.')
        res.redirect('/');
    }
};

router.use(authenticate);

/*

    Export Routes
    -------------

    Send login routes for use by the
    Express application.

*/

module.exports = (app) => {
    // Authenticate Google account and retrieve 
    // the user's email and profile information:
    app.get('/login', passport.authenticate('google', {
        scope: ['email', 'profile']
    }));

    // After the user information is 
    // collected, redirect the user:
    app.get('/google/callback', passport.authenticate('google', {
        successRedirect: '/debug/pass',
        failureRedirect: '/debug/fail'
    }));
}; 