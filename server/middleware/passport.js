// Add Passport to the application:
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = (app) => {
    passport.use(new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: 'http://localhost:' + process.env.PORT + '/google/callback',
            passReqToCallback: true
        },
        (request, accessToken, refreshToken, profile, done) => {
            return done(null, profile);
        }
    ));

    // Serialize user:
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    // Deserialize user:
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
};
