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

// function authenticate(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     } else {
//         console.log('Failed to authenticate with Google.')
//         res.redirect('/');
//     }
// };

// router.use(authenticate);

/*

    Export Routes
    -------------

    Send login routes for use by the
    Express application.

*/

module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['email', 'profile']
    }));

    app.get('/google/callback', passport.authenticate('google', {
        successRedirect: '/debug/email',
        failureRedirect: '/fail'
    }));

    app.get('/debug/email', (req, res) => {
        res.json(req.user.emails[0].value)
    });

    app.get('/pass', (req, res) => {
        res.send('Passed')
    });

    app.get('/fail', (req, res) => {
        res.send('Failed')
    });

    // app.get('/auth/google', passport.authenticate('google', {
    //     scope: ['email', 'profile']
    // }));

    // const backchannel = passport.authenticate('google', { failureRedirect: '/' });
    
    // app.get('/google/callback', backchannel, (req, res) => {
    //     setTimeout(() => res.redirect('/home'), 3000);
    // });

    // app.get('/auth/user', (req, res) => {
    //     res.json(req.user);
    // });

    // const authenticate = (req, res, next) => {
    //     if (req.user) next();
    //     else res.redirect('/');
    // };

    // const safeExecute = callback => {
    //     return async (req, res, ...theRest) => {
    //         try {
    //             const result = callback(req, res, ...theRest);
    //             if (result && typeof result.then === 'function') {
    //                 await result;
    //             }
    //         } catch (err) {
    //             console.error(err);
    //             res.status(500).json({ err: err.message });
    //         }
    //     };
    // };

    // After the user information is 
    // collected, redirect the user:
    // app.get('/google/callback', passport.authenticate('google', {
    //     successRedirect: '/debug/pass',
    //     failureRedirect: '/debug/fail'
    // }));
}; 