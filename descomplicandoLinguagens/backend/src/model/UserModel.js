const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    function: { type: String, required: true, max: 100 },
    profile: { type: String, required: true, max: 100 },
    email: { type: String, required: true, max: 100 },
    password: { type: String, required: true, max: 100 },
    permission: {
        posts: {
            view: Boolean,
            update: Boolean,
            create: Boolean
        },
        tags: {
            view: Boolean,
            update: Boolean,
            create: Boolean
        },
        categories: {
            view: Boolean,
            update: Boolean,
            create: Boolean
        }
    }
});

// Exportar o modelo
module.exports = mongoose.model('Users', UserSchema);