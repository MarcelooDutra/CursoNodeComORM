const { Router } = require('express')
const TurmaController = require('../Controllers/TurmaController.js');

const router = Router()

router
.get('/turma', TurmaController.PegaTodasAsTurmas)
.get('/turma/:id', TurmaController.pegaUmaTurma)
.post('/turma', TurmaController.criarTurma)
.put('/turma/:id', TurmaController.AtualizaTurma)
.delete('/turma/:id', TurmaController.apagaTurma)
module.exports = router