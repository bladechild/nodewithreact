const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const googleKey = require('../config/client_id.json');
passport.use(new googleStrategy({
    clientID:googleKey.web.client_id,
    clientSecret: googleKey.web.client_secret,
    callbackURL: '/auth/google/callback'
},(accessToken, refreshToken, profile,done) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
}));
