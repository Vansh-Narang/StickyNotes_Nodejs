const express = require('express')
const router = express.Router();
const passport = require('passport');
//helps in authentication like google/twitter/https
//installed using npm
//requiring
const GoogleStrategy = require('passport-google-oauth20').Strategy


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        //cb =for complete authentication




        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));
//code taken from documentation of google auth passport js
//Google login router
//changed app.get to router.get
router.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login-failure',//goes wrong (failure)
        successRedirect: '/dashboard'

    }),
);

//if goes wrong
router.get('/login-failure', (req, res) => {
    res.send('Something went wrong')
})


module.exports = router;