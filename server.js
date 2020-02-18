require('./models/db');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
var app = express();
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json())

app.set('views' , path.join(__dirname, '/views'));
app.engine('hbs' ,exphbs({extname:'hbs' , defaultLayout:'mainLayouts',layoutsDir:__dirname + '/views/layouts'}))
app.set('view engine' , 'hbs')

const userController = require('./controllers/userController')
const golfController = require('./controllers/golfController')

app.listen(3000, ()=>{
    console.log('Started at port 3000 ');
})


app.use('/user' , userController);
app.use('/golf', golfController);