'use strict';

var utils = require('../utils/writer.js');
var Editoras = require('../service/EditorasService');

module.exports.addEditora = function addEditora (req, res, next) {
  var editora = req.swagger.params['editora'].value;
  Editoras.addEditora(editora)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEditoras = function deleteEditoras (req, res, next) {
  var idEditora = req.swagger.params['idEditora'].value;
  Editoras.deleteEditoras(idEditora)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEditora = function updateEditora (req, res, next) {
  var body = req.swagger.params['body'].value;
  Editoras.updateEditora(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1EditorasGET = function v1EditorasGET (req, res, next) {
  var pular = req.swagger.params['pular'].value;
  var limit = req.swagger.params['limit'].value;
  Editoras.v1EditorasGET(pular,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
