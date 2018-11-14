const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

//import routes
const indexRoutes = require('./routes/index.js');

//settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));

//routes
app.use('/', indexRoutes);

//conection to db
mongoose.connect('mongodb://localhost/Pizza')
.then(db => console.log('Db connected'))
.catch(err => cdconsole.log(err));



    


    app.listen(app.get('port'), () => {
        console.log(`server on port ${app.get('port')}`);
    });

