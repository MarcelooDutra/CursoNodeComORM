const database = require('../models');

class TurmaController {
    static async PegaTodasAsTurmas (req, res) {
        try{
            const todasAsTurmas = await database.Turmas.findAll()
            return res.status(200).json(todasAsTurmas)
        }catch(e){
            res.status(500).json({message: e.message});
        }
    }
    static async pegaUmaTurma (req, res) {
        try {
            const { id } = req.params
            const umaTurma = await database.Turmas.findOne({ where : { id: Number(id)}})
            return request.status(200).json(umaTurma)
        }catch(e) {
            return res.status(500).json({message: e.message});
        }
    }

    static async criarTurma (req, res) {
        const turmaCriada = req.body
        try{
            const novaTurma = await database.Turmas.create(turmaCriada)
            return res.status(200).json(novaTurma)
        }catch(err){
            return res.status(500).json(err)
        }
    }

    static async AtualizaTurma (req, res) {
        const { id } = req.params
        const novaTurma = req.body
        try {
            await database.Turmas.update(novaTurma, { where: { id: Number(id)}})
            const turmaCriada = await database.Turmas.findOne({ where: { id: Number(id)}})
            return res.status(200).json(turmaCriada)
        }catch(err) {
            return res.status(500).json(err)
        }
    }

    static async apagaTurma(req, res) {
        const { id } = req.params
        const delTurma = req.body
        try{
            await database.Turmas.destroy(delTurma, {where: {id: Number(id)}})
            return res.status(200).json({mensagem: `Removido turma do id ${id}`})
        }catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = TurmaController