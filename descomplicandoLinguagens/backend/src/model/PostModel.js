// { id: 1, description: 'Tabela SM30', tag: 'SAP, ABAP', category: 'SAP', html: '<h1>Ae&nbsp;</h1><p> Teste</p>' }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PostSchema = new Schema({
    title: { type: String, required: true, max: 100 },
    description: { type: String, required: true, max: 100 },
    tag: { type: String, required: true, max: 100 },
    category: { type: String, required: true, max: 100 },
    html: { type: String, required: true, max: 1000 },
    author: { type: String, required: true, max: 100 },
    author_name: { type: String, required: true, max: 100 },
    author_avatar: { type: String, required: true, max: 100 },
    image: { type: String, required: true },
    banner: { type: String, required: true },
    data_criacao: { type: String, required: true },
    views: { type: Number, required: false }
});

// Exportar o modelo
module.exports = mongoose.model('Posts', PostSchema);