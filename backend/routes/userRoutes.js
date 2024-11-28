const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rota GET para pegar mensagem aleatória
router.get("/getMensagemAleatoria", userController.mensagemAleatoria);

// Rota GET para buscar uma história por palavra
router.get("/getHistoria", userController.buscarHistoria);

// Rota GET para buscar história aleatória
router.get("/getHistoriaAleatoria", userController.deleteUser);

// Rota POST para enviar uma nova mensagem
router.post("/postMensagem", userController.enviarMensagem);

module.exports = router;
