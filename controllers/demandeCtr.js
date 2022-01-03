const Demande = require("../models/Demande");

exports.postDemande = async (req,res)=>{
  try{ 
    const newDemande = new Demande({...req.body});
    const response = await newDemande.save();
    res.send({response: response, message: 'Demande is saved' });
  }catch(error){
    console.log(error)
    res.status(400).send({message: "can not save it"})
  }
}


exports.GetAllDemande = async (req,res)=>{
    try{
      const result= await Demande.find().populate("professeur");
      res.send({response: result, message: `getting Demande successfully `})
    } catch(error){
      res.status(500).send({message: `can not get Demande `})
    }
  }


  exports.GetDemandeById = async (req,res)=>{
    try {
      const result= await Demande.findOne({_id:req.params.id}).populate("professeur");
      res.send({response: result, message: 'getting Demande successfully'})
    } catch (error) {
      res.status(500).send({message: `can not get Demande with id ${req.params.id} `})
    }
  }
  


  exports.deleteDemande = async (req,res)=>{
    try {
        const result= await Demande.deleteOne({_id:req.params.id});
        console.log(result);
        result.n
         ? res.send({message:"demande deleted"}) 
         : res.send({message:"there is no demande with this id"});
    } catch (error) {
        res.status(404).send({message:"there is no id"});
    }
}


exports.updateDemande = async (req,res)=>{
    try {

      const result= await Demande.updateOne(
        {_id:req.params.id},
        {$set:{...req.body}}
      );
       console.log(result.nModified) ;
      result.nModified
        ?res.send({message:"Demande updated"})
        :res.send({message:"Demande already updated"})
      console.log(result.nModified);  
    } catch (error) {
      res.status(404).send({message: `not updated : id ${req.params.id} not  found`})
    }
  }

