const express = require('express');
const app = express();
const BodyParser = require('body-parser');

//Conexion a la base de datos
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/pizza';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(BodyParser.urlencoded({extended:false}));
app.use(BodyParser.json());

const pizzaRoutes = require('./routes/api');

app.use('/pizza', pizzaRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
