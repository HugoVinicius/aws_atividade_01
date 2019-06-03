'use strict';


/**
 * Adicionar categoria
 * Adiciona uma categoria ao sistema
 *
 * categoria Categoria Adiciona uma categoria no sistema (optional)
 * no response value expected for this operation
 **/
exports.addCategoria = function(categoria) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletar uma categoria
 *
 * idCategoria String idCategoria a ser excluido
 * no response value expected for this operation
 **/
exports.deleteCategoria = function(idCategoria) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Atualiza uma categoria
 *
 * body Categoria Categoria que precisa ser atualizado
 * no response value expected for this operation
 **/
exports.updateCategoria = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Lista de Categorias
 * Esse método retorna uma lista de categorias
 *
 * pular Integer número de registros para pular para paginação (optional)
 * limit Integer número máximo de registros para retornar (optional)
 * returns List
 **/
exports.v1CategoriaGET = function(pular,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "idCategoria" : 50,
  "descricao" : "Romance"
}, {
  "idCategoria" : 50,
  "descricao" : "Romance"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

