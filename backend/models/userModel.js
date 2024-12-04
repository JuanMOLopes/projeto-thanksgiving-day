// model/userModel.js
const createConnection = require("../db.js"); // Importa a função para criar a conexão com o banco de dados
const { Request, TYPES } = require("tedious"); // Importa as classes necessárias do tedious

// Função para buscar todos os usuários no banco de dados
exports.getMensagemAleatoria = (callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  // Evento de conexão com o banco de dados
  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    const query = `select top 1 * from MensagensCurtas order by NEWID()`; // Consulta SQL para buscar todos os usuários
    const request = new Request(query, (err, rowCount) => {
      if (err) {
        return callback(err, null); // Trata erros de execução da consulta
      }

      if (rowCount === 0) {
        return callback(null, []); // Retorna um array vazio se não houver registros
      }
    });

    // Variável para armazenar os resultados da consulta
    const result = [];

    // Evento 'row' para capturar todas as linhas de resultados
    request.on("row", (columns) => {
      result.push({
        ID: columns[0].value, // Captura o valor da primeira coluna (ID)
        Mensagem: columns[1].value, // Captura o valor da segunda coluna (nome)
        Tema: columns[2].value, // Captura o valor da terceira coluna (age)
      });
    });

    // Evento 'requestCompleted' para retornar os resultados da consulta após a execução
    request.on("requestCompleted", () => {
      return callback(null, result); // Retorna o array de resultados
    });

    // Executa a consulta SQL no banco de dados
    connection.execSql(request);
  });

  // Inicia a conexão com o banco de dados
  connection.connect();
};

// Função para buscar histórias por palavra
exports.getHistoria = (palavra, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Se houver erro de conexão
    }

    // Consulta SQL para buscar histórias que contenham a palavra fornecida
    const query = `select * from HistoriasInspiradoras where Historia like lower(@palavra)`;

    const request = new Request(query, (err, rowCount) => {
      if (err) {
        return callback(err, null); // Se houver erro na execução da consulta
      }

      if (rowCount === 0) {
        return callback(null, []); // Se não houver histórias
      }
    });

    // Variável para armazenar os resultados da consulta
    const result = [];

    // Evento 'row' para capturar todas as linhas de resultados
    request.on("row", (columns) => {
      result.push({
        ID: columns[0].value, // Captura o valor da primeira coluna (ID)
        Historia: columns[1].value, // Captura o valor da segunda coluna (Historia)
        ImagemURL: columns[2].value, // Captura o valor da terceira coluna (ImagemURL)
      });
    });

    // Evento 'requestCompleted' para retornar o resultado após a execução
    request.on("requestCompleted", () => {
      callback(null, result); // Retorna as histórias encontradas
    });

    // Executa a consulta SQL
    request.addParameter("palavra", TYPES.NVarChar, `%${palavra}%`); // Adiciona o parâmetro da palavra
    connection.execSql(request); // Executa a consulta
  });

  connection.connect(); // Inicia a conexão com o banco de dados
};


// Função para buscar todos os usuários no banco de dados
exports.getHistoriaAleatoria = (callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  // Evento de conexão com o banco de dados
  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    const query = `select top 1 * from HistoriasInspiradoras order by NEWID()`; // Consulta SQL para buscar todos os usuários
    const request = new Request(query, (err, rowCount) => {
      if (err) {
        return callback(err, null); // Trata erros de execução da consulta
      }

      if (rowCount === 0) {
        return callback(null, []); // Retorna um array vazio se não houver registros
      }
    });

    // Variável para armazenar os resultados da consulta
    const result = [];

    // Evento 'row' para capturar todas as linhas de resultados
    request.on("row", (columns) => {
      result.push({
        ID: columns[0].value, // Captura o valor da primeira coluna (ID)
        Historia: columns[1].value, // Captura o valor da segunda coluna (Historia)
        ImagemURL: columns[2].value, // Captura o valor da terceira coluna (ImagemURL)
      });
    });

    // Evento 'requestCompleted' para retornar os resultados da consulta após a execução
    request.on("requestCompleted", () => {
      return callback(null, result); // Retorna o array de resultados
    });

    // Executa a consulta SQL no banco de dados
    connection.execSql(request);
  });

  // Inicia a conexão com o banco de dados
  connection.connect();
};

// Função para criar um novo usuário
exports.postMensagem = (dados, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    // Consulta SQL para inserir um novo usuário na tabela Users
    const query = `INSERT INTO MensagensCurtas (Mensagem, Tema) VALUES (@Mensagem, @Tema)`; // O campo 'id' é auto-incrementado

    const request = new Request(query, (err) => {
      if (err) {
        return callback(err); // Chama a função callback com erro se houver falha
      } else {
        return callback(null, { message: "Mensagem inserida com sucesso!" }); // Retorna uma mensagem de sucesso
      }
    });

    // Adiciona os parâmetros necessários para a inserção
    request.addParameter("Mensagem", TYPES.NVarChar, dados.Mensagem);
    request.addParameter("Tema", TYPES.VarChar, dados.Tema);

    // Executa a consulta SQL para inserção no banco de dados
    connection.execSql(request);
  });

  // Inicia a conexão com o banco de dados
  connection.connect();
};
