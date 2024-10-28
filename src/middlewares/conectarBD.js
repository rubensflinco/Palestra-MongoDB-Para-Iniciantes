const mongoose = require('mongoose');

async function conectarBancoDados(req = null, res = null, next = null) {
  try {
    await mongoose.connect(process.env.DB_MONGO_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado ao banco de dados!');
    try { next(); } catch { };
    return mongoose;
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status: "Erro",
      statusMensagem: "Erro ao conectar no banco de dados",
      resposta: String(error)
    });
  }
}

module.exports = conectarBancoDados;