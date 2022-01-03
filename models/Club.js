const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const clubSchema = new Schema({
  nomClub: {type: String , required: true },
  descripClub:{type: String, required: true },
  mail:{type: String, required: true, unique: true },
  logoClub:{type: String }, //bch twly type objet
  DateCreation:{type: Date, required: true,},
  professeur: [{type: mongoose.Schema.ObjectId, ref: 'professeur'}],
});

module.exports = Club= mongoose.model("club",clubSchema);