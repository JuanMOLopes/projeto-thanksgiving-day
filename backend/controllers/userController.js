const userModel = require("../models/userModel"); // Importa o model para interagir com o banco

// Função para lidar com a requisição de listagem de usuários
exports.getMensagemAleatoria = (req, res) => {
  userModel.getMensagemAleatoria((err, users) => {
    if (err) {
      res.status(500).send("Erro ao buscar mensagem"); // Retorna um erro 500 se algo deu errado
    } else {
      res.json(mensagensAleatorias); // Retorna os usuários em formato JSON
    }
  });
};

// Função para lidar com a requisição de listagem de usuários
exports.getHistoria = (req, res) => {
  const { palavra } = req.params;

  userModel.getHistoria(palavra, (err, historias) => {
    if (err) {
      res.status(500).send("Erro ao buscar história"); // Retorna um erro 500 se algo deu errado
    } else {
      res.json(historias); // Retorna as histórias em formato JSON
    }
  });
};


// Função para lidar com a requisição de listagem de usuários
exports.getHistoriaAleatoria = (req, res) => {
  userModel.getHistoriaAleatoria((err, users) => {
    if (err) {
      res.status(500).send("Erro ao buscar história"); // Retorna um erro 500 se algo deu errado
    } else {
      res.json(historiasAleatorias); // Retorna os usuários em formato JSON
    }
  });
};

// Função para criar um novo usuário
exports.postMensagem = (req, res) => {
  const dados = req.body;

  userModel.postMensagem(dados, (err) => {
    if (err) {
      res.status(500).send("Erro ao enviar mensagem"); 
    } else {
      res.status(201).send("Mensagem enviada com sucesso"); 
    }
  });
};
