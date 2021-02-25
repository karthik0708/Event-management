const passport= require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.use('cust', new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID || "672163484902-vlq25tr6h8mf0m7ur39hiia6vu35d8sc.apps.googleusercontent.com",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "Cp8-Etzh9w8Q9b4TtYzHaU6y",
        callbackURL: "/customer/google/callback"
      },
      (accessToken, refreshToken, profile, cb) =>{
          return cb(null,profile);
      }
    )
  )

  passport.use('banq', new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID || "672163484902-u8nbb4jl0sqckvgb5nf829t24cs5ia3p.apps.googleusercontent.com",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "ZWZI0i2JRoKbZQXXo98XKGnz",
        callbackURL: "/banquet/google/callback"
      },
      (accessToken, refreshToken, profile, cb) =>{
        return cb(null,profile);
      }
    )
  );

  passport.use('cat', new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "672163484902-76aco60mgme37jmkjqnh3695pb2g8dgk.apps.googleusercontent.com",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "qZwBeZnljfchmCfGNRauNd6l",
        callbackURL: "/caterer/google/callback"
      },
    (accessToken, refreshToken, profile, cb) =>{
      return cb(null,profile);
    }
    )
  )

  passport.use('photog', new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "672163484902-oq0bbrqhoriqi4io8vl89jrb5geio6b3.apps.googleusercontent.com",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "u4K4ytDf3YS2EYPEk8QMqQMX",
        callbackURL: "/photographer/google/callback"
      },
    (accessToken, refreshToken, profile, cb) =>{
      return cb(null,profile);
    }
    )
  );


  
      
