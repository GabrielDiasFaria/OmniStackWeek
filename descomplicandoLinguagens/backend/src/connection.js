const mongoose = require('mongoose');

module.exports = {
    startConnection() {

        let url = 'mongodb://descomplicando01:Anima1532@mongo71-farm76.kinghost.net:27017/descomplicando01';
        let mongoDB = process.env.MONGODB_URI || url;
        mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.Promise = global.Promise;

        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

    }
}