const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const pug = require('pug')
//instantiating express app
const app = express();
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')

//public files
app.use('/static',express.static(path.join(__dirname, 'public')));
//setting up rendering engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug')
require('dotenv').config();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

// express-session middleware
app.use(session({
 secret: 'mangoesandalfdj',
 resave: true,
 saveUninitialized: true
}));

// express-messages middleware THIS IS WHAT I CHANGED
app.use(flash());
app.use((req, res, next) => {
 res.locals.errors = req.flash("error");
 res.locals.successes = req.flash("success");
 next();
});

//connnecting to mongodb
mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology',true)
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.DB_STRING);

let db = mongoose.connection;
db.on('error',console.error.bind(console, 'faild'));
db.once('open',()=>{
 console.log('connection success')
})

//import routes
const userRoute = require('./routes/userRoute')

//using routes
app.use('/index',userRoute)

//Port setup
PORT = process.env.PORT || 2002;

app.listen(PORT,()=>{
 console.log(`listening on port ${PORT}`)
})