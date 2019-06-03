'use strict';


/**
 * Adicionar livros
 * Adiciona um item ao sistema
 *
 * livro Livro Adiciona um livro no sistema (optional)
 * no response value expected for this operation
 **/
exports.addLivros = function(livro) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletar livros por ISBN
 *
 * iSBN String ISBN do livro para ser excluido
 * no response value expected for this operation
 **/
exports.deleteOrder = function(iSBN) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Atualiza um livro
 *
 * body Livro Livro que precisa ser atualizado
 * no response value expected for this operation
 **/
exports.updateLivro = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Lista de livros
 * Esse método retorna uma lista de livros
 *
 * pular Integer número de registros para pular para paginação (optional)
 * limit Integer número máximo de registros para retornar (optional)
 * returns List
 **/
exports.v1LivrosGET = function(pular,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "preco" : 20.5,
  "ISBN" : "3687073",
  "categora" : {
    "idCategoria" : 50,
    "descricao" : "Romance"
  },
  "nome" : "A Vida como ele é",
  "editora" : {
    "idCategoria" : 100,
    "descricao" : "Companhia das Letra"
  },
  "autor" : {
    "idAutor" : 1,
    "name" : "Amado Jorge",
    "descricao" : "História do autor"
  }
}, {
  "preco" : 20.5,
  "ISBN" : "3687073",
  "categora" : {
    "idCategoria" : 50,
    "descricao" : "Romance"
  },
  "nome" : "A Vida como ele é",
  "editora" : {
    "idCategoria" : 100,
    "descricao" : "Companhia das Letra"
  },
  "autor" : {
    "idAutor" : 1,
    "name" : "Amado Jorge",
    "descricao" : "História do autor"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

