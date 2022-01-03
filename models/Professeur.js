const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const professeurSchema = new Schema({
    nomProf: {type: String , required: true },
    prenomProf:{type: String, required: true },
    username:{type: String, required: true, unique: true },
    imageProf:{type: String }, //bch twly type objet
    password:{type: String, required: true },
    phone:{type: String, required: true },
    email:{type: String, required: true, unique: true },
    clubs: [{type: mongoose.Schema.ObjectId, ref: "club"}],
    demande: [{type: mongoose.Schema.ObjectId, ref: "demande"}]
});

module.exports = Professeur= mongoose.model("prof",professeurSchema);