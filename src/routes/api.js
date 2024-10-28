var express = require('express');
var router = express.Router();
const conectarBancoDados = require('../middlewares/conectarBD');
const EsquemaDinamico = require('../models/dinamico');

router.get('/buscar', conectarBancoDados, async function (req, res, next) {
  try {
    let body = req.body;
    let query = body.query || {};
    let mongoReturn = await EsquemaDinamico('imagens').find(query);
    res.json(mongoReturn);
  } catch (error) {
    return res.status(500).json({
      status: "Erro",
      statusMensagem: "Erro inesperado!",
      resposta: String(error)
    });
  }
});

router.post('/criar', conectarBancoDados, async function (req, res, next) {
  try {
    let body = req.body;
    let json = body.json;
    let mongoCreate = await EsquemaDinamico('imagens').create(json);
    res.json(mongoCreate);
  } catch (error) {
    return res.status(500).json({
      status: "Erro",
      statusMensagem: "Erro inesperado!",
      resposta: String(error)
    });
  }
});

router.put('/atualizar', conectarBancoDados, async function (req, res, next) {
  try {
    let body = req.body;
    let query = body.query || {};
    let json = body.json;
    let mongoReturn = await EsquemaDinamico('imagens').findOneAndUpdate(query, json, { new: true }); 
    
    if (!mongoReturn) {
      return res.status(404).json({ message: 'Documento não encontrado' });
    }

    res.json(mongoReturn);
  } catch (error) {
    return res.status(500).json({
      status: "Erro",
      statusMensagem: "Erro inesperado!",
      resposta: String(error)
    });
  }
});

router.delete('/remover', conectarBancoDados, async function (req, res, next) {
  try {
    let body = req.body;
    let query = body.query || {};
    let mongoReturn = await EsquemaDinamico('imagens').deleteMany(query);
    res.json(mongoReturn);
  } catch (error) {
    return res.status(500).json({
      status: "Erro",
      statusMensagem: "Erro inesperado!",
      resposta: String(error)
    });
  }
});

module.exports = router;
