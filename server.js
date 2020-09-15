const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true
    }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => { res.send('this is working'); });

// using advance function (call function (db, bcyrpt) that returns another function which calls(req, res))
// app.post('/signin', signin.handleSignin(db, bcrypt)(req, res));
// const handleSingin = (db, bcrypt) => (req, res) => {} 
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt); });

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt); });

app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db); });

app.put('/image', (req, res) => { image.handleImage(req, res, db); });

app.put('/imageurl', (req, res) => { image.handleApiCall(req, res); });
 
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`app is running on port ${ PORT }`));
