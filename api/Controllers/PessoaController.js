const database = require('../models');

class PessoaController {
    static async pegaTodasAsPessoas (req, res) {
        try{
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        }catch(error){
          return res.status(500).json(error.message)
        }
    }    

    static async pegarUmaPessoa (req, res) {
        try{
            const { id } = req.params
            const umaPessoa = await database.Pessoas.findOne( { 
                where: { 
                    id: Number(id) 
                }
            })
            return res.status(200).json(umaPessoa)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async criaNovaPessoa (req, res) {
        const criaPessoa = req.body
        try{
            const criaPessoaNova = await database.Pessoa.create(criaPessoa)
            return res.status(200).json(criaPessoaNova)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa (req, res) {
        const { id } = req.params
        const novaInfo = req.body
        try{
            await database.Pessoas.update(novaInfo, {where: {id: Number(id)}})
            const atualPessoa = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(atualPessoa)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async delPessoa(req, res) {
        const { id } = req.params
        try{
            await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `O registro de ${id} foi deletado`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Leu-se uma matricula específica.
    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try{
            const umaMatricula = await database.Matriculas.findOne({ 
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }})
             return res.status(200).json(umaMatricula)
        }catch(err){
           return res.status(500).json(err.message)
        }
    }

    //cri-se uma nova matricula.
    static async criaNovaMatricula(req, res){
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
        try {
            const matriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(matriculaCriada)
        }catch (err) {
            return res.status(500).json({ error: err.message })
        }
    }

    //atualizar uma matricula 
    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId} = req.params
        const novasInfos = req.body
        try{
            await database.Matriculas.update(novasInfos, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            const matriculaAtualizada = await database.Matriculas.findOne({where: { id: Number(matriculaId)}})
            return res.status(200).json(matriculaAtualizada)
        }catch{
            return res.status(500).json(error.message)
        }
    }

    //deletar uma matricula
    static async apagaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
      try{
        await database.Matriculas.destroy({  where: { id: Number(matriculaId)}})
        return res.status(200).json(`dados da ${matriculaId} deletado`)
      }catch (e) {
        return res.status(500).json(e)
      }
    }

}

module.exports = PessoaController;