const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
        async index(request, response) {
            const ongs = await connection('ongs').select('*');
            return response.json(ongs);
        },  

        async create(request, response) {
            const { name, email, whatsapp, city, uf, pais } = request.body; //Desestruturação: para pegar cada dado em uma variável separada
            const id = crypto.randomBytes(4).toString('HEX'); //A partir desse comando, fazemos com que o crypto gere um id
                                                            //com 4 bytes no formato Hexadecimal
            await connection('ongs').insert({
                id, name, email, whatsapp, city, uf, pais,
            });

            return response.json({ id });
        },

        async change(request, response) {
            const { pais } = request.body;
            const ongs = await connection('ongs').where('id', id).select('id');

            if(!ongs.id) {
                return response.status(401).json({error: 'ONG does nos exist'})
            }   
            await connection('ongs').where('id', id).update();
    
            return response.status(204).send();

        }
}