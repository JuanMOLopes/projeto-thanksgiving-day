// model/userModel.js
const createConnection = require("../db.js"); // Importa a função para criar a conexão com o banco de dados
const { Request, TYPES } = require("tedious"); // Importa as classes necessárias do tedious

// Função para buscar todos os usuários no banco de dados
exports.getAllUsers = (callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  // Evento de conexão com o banco de dados
  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    const query = `SELECT * FROM users1`; // Consulta SQL para buscar todos os usuários
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
        id: columns[0].value, // Captura o valor da primeira coluna (ID)
        name: columns[1].value, // Captura o valor da segunda coluna (nome)
        age: columns[2].value, // Captura o valor da terceira coluna (age)
        email: columns[3].value, // Captura o valor da quarta coluna (email)
        contact: columns[4].value, // Captura o valor da quinta coluna (contact)
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
exports.createUser = (data, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    // Consulta SQL para inserir um novo usuário na tabela Users
    const query = `INSERT INTO users1 (name, age, email, contact) VALUES (@name, @age, @email, @contact)`; // O campo 'id' é auto-incrementado

    const request = new Request(query, (err) => {
      if (err) {
        return callback(err); // Chama a função callback com erro se houver falha
      } else {
        return callback(null, { message: "Usuário inserido com sucesso!" }); // Retorna uma mensagem de sucesso
      }
    });

    // Adiciona os parâmetros necessários para a inserção
    request.addParameter("name", TYPES.VarChar, data.name);
    request.addParameter("age", TYPES.Int, data.age);
    request.addParameter("email", TYPES.VarChar, data.email);
    request.addParameter("contact", TYPES.VarChar, data.contact);

    // Executa a consulta SQL para inserção no banco de dados
    connection.execSql(request);
  });

  // Inicia a conexão com o banco de dados
  connection.connect();
};

// Função para atualizar um usuário existente
exports.updateUser = (id, name, age, email, contact, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    // Consulta SQL para atualizar o nome do usuário pelo ID
    const query = `
    UPDATE users1
    SET name = @name, age = @age, email = @email, contact = @contact
    WHERE id = @id`;

    const request = new Request(query, (err) => {
      if (err) {
        return callback(err); // Chama a função callback com erro se houver falha
      } else {
        return callback(null, { message: "Usuário atualizado com sucesso!" }); // Retorna uma mensagem de sucesso
      }
    });

    // Adiciona os parâmetros necessários para a atualização
    request.addParameter("id", TYPES.Int, id); // Passa o ID para a atualização
    request.addParameter("name", TYPES.VarChar, name); // Passa o novo nome
    request.addParameter("age", TYPES.Int, age);
    request.addParameter("email", TYPES.VarChar, email);
    request.addParameter("contact", TYPES.VarChar, contact);

    // Executa a consulta SQL para atualização no banco de dados
    connection.execSql(request);
  });

  // Inicia a conexão com o banco de dados
  connection.connect();
};

// Função para deletar um usuário existente
exports.deleteUser = (id, callback) => {
  const connection = createConnection(); // Cria a conexão com o banco de dados

  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    // Consulta SQL para deletar o usuário pelo ID
    const query = `DELETE FROM users1 WHERE id = @id`;

    const request = new Request(query, (err) => {
      if (err) {
        return callback(err); // Chama a função callback com erro se houver falha
      } else {
        return callback(null, { message: "Usuário deletado com sucesso!" }); // Retorna uma mensagem de sucesso
      }
    });

    // Adiciona o parâmetro necessário para a exclusão
    request.addParameter("id", TYPES.Int, id); // Passa o ID para exclusão

    // Executa a consulta SQL para exclusão no banco de dados
    connection.execSql(request);
  });

  // Inicia a conexão com o banco de dados
  connection.connect();
};

// Função para buscar um usuário pelo ID
exports.getUserById = (id, callback) => {
  if (isNaN(id) || id <= 0) {
    return callback(new Error("ID inválido"), null);
  }

  const connection = createConnection(); // Cria a conexão com o banco de dados

  // Evento de conexão com o banco de dados
  connection.on("connect", (err) => {
    if (err) {
      return callback(err, null); // Trata erros de conexão
    }

    const query = `SELECT * FROM users1 WHERE id = @id`; // Consulta SQL para buscar o usuário pelo ID
    const request = new Request(query, (err, rowCount) => {
      if (err) {
        return callback(err, null); // Trata erros de execução da consulta
      }
    });

    // Variável para armazenar o resultado da consulta
    let user = null;

    // Evento 'row' para capturar o resultado da consulta
    request.on("row", (columns) => {
      user = {
        id: columns[0].value, // Captura o valor da primeira coluna (ID)
        name: columns[1].value, // Captura o valor da segunda coluna (nome)
        age: columns[2].value, // Captura o valor da terceira coluna (idade)
        email: columns[3].value, // Captura o valor da quarta coluna (email)
        contact: columns[4].value, // Captura o valor da quinta coluna (contato)
      };
    });

    // Evento 'requestCompleted' para retornar o resultado após a execução
    request.on("requestCompleted", () => {
      return callback(null, user); // Retorna o usuário encontrado ou null
    });

    // Adiciona o parâmetro para o ID
    request.addParameter("id", TYPES.Int, id);

    // Executa a consulta SQL no banco de dados
    connection.execSql(request);
  });

  // Inicia a conexão com o banco de dados
  connection.connect();
};
