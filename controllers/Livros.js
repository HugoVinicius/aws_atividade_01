'use strict';

var utils = require('../utils/writer.js');
var Livros = require('../service/LivrosService');

module.exports.addLivros = function addLivros (req, res, next) {
  var livro = req.swagger.params['livro'].value;
  Livros.addLivros(livro)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteOrder = function deleteOrder (req, res, next) {
  var iSBN = req.swagger.params['ISBN'].value;
  Livros.deleteOrder(iSBN)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLivro = function updateLivro (req, res, next) {
  var body = req.swagger.params['body'].value;
  Livros.updateLivro(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1LivrosGET = function v1LivrosGET (req, res, next) {
  var pular = req.swagger.params['pular'].value;
  var limit = req.swagger.params['limit'].value;
  Livros.v1LivrosGET(pular,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
