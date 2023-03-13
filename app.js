const express = require('express');
const ejs = require('ejs');

const app = express();

//specify the type of ejs engine
app.set('view engine', 'ejs');

//render the login form to the browser
app.get('/login-form', (req, res) => {
    res.render('login');
});

app.post('/success', (req,res) => {
    res.render('success')
});


//listening port
const PORT = 4000;

app.listen(PORT, () => {
    console.log('Server has started at port 4000.');
});