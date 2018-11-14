const express = require('express');
const router = express.Router();

var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'Josue Hueco' }, 'a la verga');


router.get('/', (req, res) =>{
    res.send('El token es: ' + token)
})

module.exports = router;