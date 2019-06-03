'use strict';


/**
 * Adicionar autor
 * Adiciona um autor ao sistema
 *
 * autor Livro Adiciona um autor no sistema (optional)
 * no response value expected for this operation
 **/
exports.addAutores = function(autor) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletar autor por id
 *
 * idAutor String idAutor a ser excluido
 * no response value expected for this operation
 **/
exports.deleteAutor = function(idAutor) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Atualiza um autor
 *
 * body Autor Autor que precisa ser atualizado
 * no response value expected for this operation
 **/
exports.updateAutor = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Lista de Autores
 * Esse método retorna uma lista de autores
 *
 * pular Integer número de registros para pular para paginação (optional)
 * limit Integer número máximo de registros para retornar (optional)
 * returns List
 **/
exports.v1AutoresGET = function(pular,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "idAutor" : 1,
  "name" : "Amado Jorge",
  "descricao" : "História do autor"
}, {
  "idAutor" : 1,
  "name" : "Amado Jorge",
  "descricao" : "História do autor"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

