// // Add path from Node:
// const path = require('path');

// // Import Sequelize models from Sequelize:
// const { Users, Profiles } = require('../database/sequelize');

// // Add reference to Express and Express Router:
// const express = require('express');
// const router = express.Router();

// // Function to be used by Express Router:
// function authenticate(req, res, next) {
//     // Check if the session is authenticated:
//     if (req.isAuthenticated()) {
//         // If the session is authenticated, continue:
//         return next();
//     } else {
//         // If the session isn't authenticated, redirect:
//         res.redirect('/failure');
//     }
// };

// // Use the authenticate method from Express Router:
// router.use(authenticate);

// // Add Passport for use by Express:
// const passport = require('passport');

// module.exports = (app) => {
//     // Send index.html to the root URL:
//     app.get('/', (req, res) => {
//         res.sendFile(path.resolve(__dirname, '../../client/index.html'));
//     });

//     app.get('/failed', (req, res) => {
//         res.sendFile(path.resolve(__dirname, '../../client/failed.html'));
//     });

//     app.get('/secure', authenticate, (req, res) => {
//         res.sendFile(path.resolve(__dirname, '../../client/secure.html'));
//     });
    
//     // Attempt to authenticate the user and retrieve their Google information:
//     app.get('/google/auth', passport.authenticate('google', {
//         scope: ['email', 'profile']
//     }));

//     // After an authentication attempt, Google redirects the user to this route:
//     app.get('/google/callback', passport.authenticate('google', {
//         // If the authentication succeeds, redirect the user:
//         successRedirect: '/create',
//         // If the authentication fails, redirect the user:
//         failureRedirect: '/failure'
//     }));

//     // End the user's session:
//     app.get('/google/logout', (req, res) => {
//         req.logout(); // The user is logged out.
//         res.redirect('/failure'); // The user is redirected away.
//     });

//     // Find or create a user upon Google authentication:
//     app.get('/create', authenticate, async (req, res) => {
//         // Query the database users table:
//         await Users.create({
//             where: {
//                 // Retrieve the user's email from data returned from Google:
//                 email: req.user.emails[0].value
//             }
//         }).then(
//             // After querying the database, redirect the user:
//             res.redirect('/success')
//         );

//         app.get('/success', authenticate, (req, res) => {
//             res.sendFile(path.resolve(__dirname, '../../client/success.html'));
//         });
    
//         app.get('/failure', (req, res) => {
//             res.sendFile(path.resolve(__dirname, '../../client/failure.html'));
//         });
//     });
// }