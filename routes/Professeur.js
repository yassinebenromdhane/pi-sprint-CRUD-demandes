const express = require("express");
const router = express.Router();
const controllers = require('../controllers/professeurCtr');

router.post("/", controllers.postProfesseur);
router.get("/", controllers.getAllProfesseur);
module.exports = router;