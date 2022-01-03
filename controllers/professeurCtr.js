const Professeur = require("../models/Professeur");

exports.postProfesseur = async (req,res)=>{
  try{ 
    const newProfesseur = new Professeur({...req.body});
    const response = await newProfesseur.save();
    res.send({response: response, message: 'Professeur is saved' });
  }catch(error){
    console.log(error)
    res.status(400).send({message: "can not save it"})
  }
}

exports.getAllProfesseur = async (req,res)=>{
  try{
    const result= await Professeur.find().populate("demande");
    res.send({response: result, message: `getting Professeurs successfully `})
  } catch(error){
    res.status(500).send({message: `can not get profs `})
  }
}

