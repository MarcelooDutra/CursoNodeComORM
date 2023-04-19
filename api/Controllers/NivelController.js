const database = require('../models');

class NivelController {
    static async PegaTodosOsNiveis(req, res){
        try{
            const todoNiveis = await database.Nivel.findAll()
            return res.status(200).json(todoNiveis)
        }catch(e){
            return res.status(500).json({message:  e.message})
        }
    }
}

module.exports = NivelController