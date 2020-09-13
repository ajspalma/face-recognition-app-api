const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('this is working');
});

app.listen(4000, () => {
    console.log('app is running on port 4000');
});

/*
/ --> GET/res = this is working
/signin --> POST = success/fail
/register --> POST = user 
/profile/:userId --> GET = user
/image --> PUT --> user

*/