const mongoose = require('mongoose');
const schema = mongoose.Schema;

const taskSchema = new schema({
    name: String,
    description: String,
    ingredients: Array,
    tipoDeMasa: String,
    tamaño: String,
    cantidadPorciones: String,
    tieneQueso: Boolean,
    status: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('task', taskSchema)