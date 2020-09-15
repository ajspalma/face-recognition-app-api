const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const { response } = require('express');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'ashley',
      password : '',
      database : 'face-recognition-app'
    }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: '987',
            hash: '',
            email: 'john@gmail.com'
        }
    ]
};

app.get('/', (req, res) => {
    // res.send('this is working');
    res.json(database.users);
});

app.post('/signin', (req, res) => {
    const hash = '$2a$10$rvRQPhycz.c7yKO0WbQgnuIOu8m3PdoWujvFG8q.TV6cDYOBpXdju';
    bcrypt.compare("bananas", hash, (err, res) => {
        console.log('first guess', res);
    });
    if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
        res.json(database.users[0]);
    } else { 
        res.status(400).json('Error logging-in');
    }
});

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    bcrypt.hash(password, null, null, (err, hash) => {
        console.log(hash);
    });
    db('users')
        .returning('*')
        .insert({
            email,
            name,
            joined: new Date()
        })
        .then(user => {
            res.json(user[0]);
        })
        .catch(err => res.status(400).json('Unable to register'));
});

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    db.select('*')
        .from('users')
        .where({id})
        .then(user => {
            if (user.length) {
                res.json(user[0]);
            } else {
                res.status(404).json("Not found");
            }
        })
        .catch(err => res.status(400).json("Error getting user"));
});

app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++;
            return res.json(user.entries);
        }
    });
    if (!found) {
        res.status(404).json("not found");
    }
});
/* 
// Load hash from your password DB.
bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
});
bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
}); */
 
app.listen(4000, () => {
    console.log('app is running on port 4000');
});
