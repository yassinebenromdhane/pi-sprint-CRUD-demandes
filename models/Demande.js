const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const demandeSchema = new Schema({
    nomClub: {type: String  },
    description:{type: String },
    etat:{type: String , default : "en cours"},
    professeur: {type: mongoose.Schema.ObjectId, ref: 'prof'}
},
{ timestamps: true });

module.exports = Demande= mongoose.model("demande",demandeSchema);