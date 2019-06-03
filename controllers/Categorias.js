'use strict';

var utils = require('../utils/writer.js');
var Categorias = require('../service/CategoriasService');

module.exports.addCategoria = function addCategoria (req, res, next) {
  var categoria = req.swagger.params['categoria'].value;
  Categorias.addCategoria(categoria)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCategoria = function deleteCategoria (req, res, next) {
  var idCategoria = req.swagger.params['idCategoria'].value;
  Categorias.deleteCategoria(idCategoria)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCategoria = function updateCategoria (req, res, next) {
  var body = req.swagger.params['body'].value;
  Categorias.updateCategoria(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1CategoriaGET = function v1CategoriaGET (req, res, next) {
  var pular = req.swagger.params['pular'].value;
  var limit = req.swagger.params['limit'].value;
  Categorias.v1CategoriaGET(pular,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
