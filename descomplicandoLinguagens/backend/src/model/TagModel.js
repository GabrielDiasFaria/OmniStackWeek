const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TagSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    description: { type: String, required: true, max: 100 },
    slug: { type: String, required: true, max: 100 },
});

// Exportar o modelo
module.exports = mongoose.model('Tags', TagSchema);