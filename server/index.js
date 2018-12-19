// entry point for server

const path = require('path');
const express = require('express');
const app = express();
const volleyball = require('volleyball');
const passport = require('passport')
const {db} = require('./db/index');
const User = require('./db/models/User')
const session = require('express-session')
// configure and create our database store
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const dbStore = new SequelizeStore({ db: db })

//user serialization

passport.serializeUser((user, done) => {
  try {
    done( null, user.id)
  }catch(err){
    done(err)
  }
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    done(null, user)
  }catch(error){
    done(error)
  }
})

// logging middleware

app.use(express.json());
app.use(volleyball);

//sync so that our session table gets created

dbStore.sync()

//plug the store into our middleare

app.use(session({
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  store: dbStore,
  resave: false,
  saveUninitialized: false
}))

//using passport middleware

app.use(passport.initialize())
app.use(passport.session())

// static middleware

app.use(express.static(path.join(__dirname, '..', 'public')));

// parsing middleware
app.use(express.urlencoded({ extended: true }));

//requiring the index.js in api folder

app.use('/api', require('./api'));

//send index.html

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// sending 500 errors

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

//set up port listening


// db.sync({force:true}).then(() => {
db.sync().then(() => {
    console.log('db synced up')
  const port = process.env.PORT || 3500;
  app.listen(port, () => {
    console.log('Knock, knock');
    console.log("who's there?");
    console.log(`Your server, listening on port ${port}`);
  });
});

module.exports = app;
