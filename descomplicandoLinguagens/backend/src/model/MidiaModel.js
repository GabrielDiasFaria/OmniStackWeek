const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MidiaSchema = new Schema({
    name: { type: String, required: true },
    file: { type: String, required: true }
});

// Exportar o modelo
module.exports = mongoose.model('Midias', MidiaSchema);