const userModel = require("../models/userModel"); // Importa o model para interagir com o banco

// Função para lidar com a requisição de listagem de usuários
exports.getMensagemAleatoria = (req, res) => {
  userModel.getMensagemAleatoria((err, users) => {
    if (err) {
      res.status(500).send("Erro ao buscar mensagem"); // Retorna um erro 500 se algo deu errado
    } else {
      res.json(users); // Retorna os usuários em formato JSON
    }
  });
};

// Função para lidar com a requisição de listagem de usuários
exports.getHistoria = (req, res) => {
  userModel.getHistoria((err, users) => {
    if (err) {
      res.status(500).send("Erro ao buscar história"); // Retorna um erro 500 se algo deu errado
    } else {
      res.json(users); // Retorna os usuários em formato JSON
    }
  });
};

// Função para lidar com a requisição de listagem de usuários
exports.getHistoriaAleatoria = (req, res) => {
  userModel.getHistoriaAleatoria((err, users) => {
    if (err) {
      res.status(500).send("Erro ao buscar história"); // Retorna um erro 500 se algo deu errado
    } else {
      res.json(users); // Retorna os usuários em formato JSON
    }
  });
};

// Função para criar um novo usuário
exports.postMensagem = (req, res) => {
  const { Mensagem, Tema } = req.body; // Obtém os dados do corpo da requisição

  userModel.postMensagem({ Mensagem, Tema }, (err) => {
    if (err) {
      res.status(500).send("Erro ao enviar mensagem"); // Retorna um erro 500 se algo deu errado
    } else {
      res.status(201).send("Mensagem enviada com sucesso"); // Retorna mensagem de sucesso
    }
  });
};
