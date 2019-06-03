'use strict';


/**
 * Adicionar editoras
 * Adiciona uma editora ao sistema
 *
 * editora Editora Adiciona uma editora ao sistema (optional)
 * no response value expected for this operation
 **/
exports.addEditora = function(editora) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletar editora por id
 *
 * idEditora String idEditora a ser excluido
 * no response value expected for this operation
 **/
exports.deleteEditoras = function(idEditora) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Atualiza uma editora
 *
 * body Editora Editora que precisa ser atualizado
 * no response value expected for this operation
 **/
exports.updateEditora = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Lista de Editoras
 * Esse método retorna uma lista de editora
 *
 * pular Integer número de registros para pular para paginação (optional)
 * limit Integer número máximo de registros para retornar (optional)
 * returns List
 **/
exports.v1EditorasGET = function(pular,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "idCategoria" : 100,
  "descricao" : "Companhia das Letra"
}, {
  "idCategoria" : 100,
  "descricao" : "Companhia das Letra"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

