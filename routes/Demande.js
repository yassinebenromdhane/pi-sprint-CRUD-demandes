const express = require("express");
const router = express.Router();
const controllers = require('../controllers/demandeCtr');

router.post("/", controllers.postDemande);
router.get("/", controllers.GetAllDemande);
router.get('/:id',controllers.GetDemandeById);
router.delete('/:id',controllers.deleteDemande);
router.put('/:id',controllers.updateDemande);


module.exports = router;