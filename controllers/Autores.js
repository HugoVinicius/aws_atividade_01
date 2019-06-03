'use strict';

var utils = require('../utils/writer.js');
var Autores = require('../service/AutoresService');

module.exports.addAutores = function addAutores (req, res, next) {
  var autor = req.swagger.params['autor'].value;
  Autores.addAutores(autor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAutor = function deleteAutor (req, res, next) {
  var idAutor = req.swagger.params['idAutor'].value;
  Autores.deleteAutor(idAutor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAutor = function updateAutor (req, res, next) {
  var body = req.swagger.params['body'].value;
  Autores.updateAutor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1AutoresGET = function v1AutoresGET (req, res, next) {
  var pular = req.swagger.params['pular'].value;
  var limit = req.swagger.params['limit'].value;
  Autores.v1AutoresGET(pular,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
