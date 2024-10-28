const mongoose = require('mongoose');

const esquema = new mongoose.Schema(
    {
        qualquerCoisa: mongoose.Schema.Types.Mixed
    },
    {   
        strict: false,
        timestamps: true
    }
);

function EsquemaDinamico(collectionName) {
    return mongoose.models[collectionName] || mongoose.model(collectionName, esquema);
}

module.exports = EsquemaDinamico;