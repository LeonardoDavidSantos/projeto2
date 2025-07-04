const connect = require('../database/db');

class Usuario {
    constructor(usuario, senha) {
        this.usuario = usuario;
        this.senha = senha;
    }

    async autenticar() {
        const { db, client } = await connect();
        const usuario = await db.collection('usuarios').findOne({
            usuario: this.usuario,
            senha: this.senha
        });
        client.close();
        return usuario;
    }
}

module.exports = Usuario;
