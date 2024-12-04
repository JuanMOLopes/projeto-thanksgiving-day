// userRoutes
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rota GET para pegar mensagem aleatória
router.get("/mensagemAleatoria", userController.getMensagemAleatoria);

// Rota GET para buscar uma história por palavra
router.get("/historia/palavra/:palavra", userController.getHistoria);

// Rota GET para buscar história aleatória
router.get("/historiaAleatoria", userController.getHistoriaAleatoria);

// Rota POST para enviar uma nova mensagem
router.post("/enviarMensagem", userController.postMensagem);

module.exports = router;
