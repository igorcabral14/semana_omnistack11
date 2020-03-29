const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
        async index(request, response) {
            const ongs = await connection('ongs').select('*');
            return response.json(ongs);
        },
    

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; //Desestruturação: para pegar cada dado em uma variável separada
        const id = crypto.randomBytes(4).toString('HEX'); //A partir desse comando, fazemos com que o crypto gere um id
                                                          //com 4 bytes no formato Hexadecimal
        await connection('ongs').insert({
            id, name, email, whatsapp, city, uf,
        });

        return response.json({ id });
    }
}