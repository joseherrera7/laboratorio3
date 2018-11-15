const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    ingredientes: {type: Array, required: true},
    masa: {type: String, required: true},
    tamanio: {type: String, required: true},
    porciones: {type: String, required: true},
    extra_queso: {type: Boolean, required: true},
});


module.exports = mongoose.model('pizza', ProductSchema);