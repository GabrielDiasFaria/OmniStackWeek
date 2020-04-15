// { id: 1, description: 'Tabela SM30', tag: 'SAP, ABAP', category: 'SAP', html: '<h1>Ae&nbsp;</h1><p> Teste</p>' }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PostSchema = new Schema({
    description: { type: String, required: true, max: 100 },
    tag: { type: String, required: true, max: 100 },
    category: { type: String, required: true, max: 100 },
    html: { type: String, required: true, max: 1000 },
    author: { type: String, required: true, max: 100 }
});

// Exportar o modelo
module.exports = mongoose.model('Posts', PostSchema);