const express = require('express');
const loginRouter = require('./routes/login/index');
const ejs = require('ejs');
const app = express();

//globall middlewares
app.use(express.json);
app.use(express.urlencoded({extended: true}))

app.use('/login-form', loginRouter);

//specify the type of ejs engine
app.set('view engine', 'ejs');

//render the login form to the browser
app.get('/login-form', (req, res) => {// route the client accesses
    res.render('login');//render ejs file
    
});

//listening port
const PORT = 4000;

app.listen(PORT, () => {
    console.log('Server has started at port 4000.');
});