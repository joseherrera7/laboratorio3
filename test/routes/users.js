const express = require('express');
const router = express.Router();
var Pizza = require('../models/pizzaModel');

const mongoose = require('mongoose');

router.get('/',(req,res,next)=>{
    console.log("test")
    Pizza.find({}, function(error, pizzas){
        if(error){
            const error = new Error('No existe ningun registro');
             error.status = 404;
             next(error);
        }else{
            
            res.status(200).send(pizzas);
        }
     })
});

router.post('/',(req,res,next)=>{
    let product = new Pizza(
        {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            ingredientes:req.body.ingredientes,
            masa: req.body.masa,
            tamanio:req.body.tamanio,
            porciones:req.body.porciones,
            extra_queso:req.body.extra_queso
        }
    );
    product.save(function (err) {
        if (err) {
            const error = new Error('Error al insertar en la base de datos');
             error.status = 400;
             next(error);
        }
        res.status(200).send('Product Created successfully')
});
});

router.get('/:pizzaID',(req,res,next)=>{
const id = req.params.pizzaID;
Pizza.findById(id, function (err, documento) {
    if (err){
        return next(err);
    } 
    res.status(200).send(documento);
})
});

router.put('/:pizzaID',(req,res,next)=>{
    const id = req.params.pizzaID;
    Pizza.findById(id, function(error, documento){
        if(error){
           res.send('Error al intentar modificar el personaje.');
        }else{
           var pizza = documento;
           pizza.nombre = req.body.nombre;
           pizza.descripcion = req.body.descripcion;
           pizza.ingredientes = req.body.ingredientes;
           pizza.masa = req.body.masa;
           pizza.tamanio = req.body.tamanio;
           pizza.porciones = req.body.porciones;
           pizza.extra_queso = req.body.extra_queso;
           pizza.save(function(error, documento){
              if(error){
                 res.status(500).send('Error al intentar guardar el personaje.');
              }else{ 
                res.status(200).send('Se actualizo correctamente')
              }
           });
        }
     });
});
router.delete('/:Nombre',(req,res,next)=>{
    const id = req.params.nombre;
    Pizza.findOneAndDelete({nombre: id}, function(error){
        if(error){
           res.status(500).send('Error al intentar eliminar el personaje.');
        }else{ 
           res.status(200).send('Se elimino correcto');            
        }
     });
});
module.exports = router;