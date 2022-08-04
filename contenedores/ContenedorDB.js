const knex = require('knex')

class ContenedorDB {
    constructor(config, tabla) {
        this.knex = knex(config)
        this.tabla = this.tabla
    }

    //Metodos como listar actualizar guardar etc
    async listar(id) {
        try {
            return await this.knex.select().from(this.tabla).where('id', id)
        } catch (error) {
            throw new Error(`Error al listar: ${error}`)
        }
    }
    async listarAll() {
        try {
            return await this.knex.select().from(this.tabla)
        } catch (error) {
            throw new Error(`Error al listar: ${error}`)
        }
    }
    async guardar(newObject) {
        try {
            console.log("Si se guarda");
            return await this.knex(this.tabla).insert(newObject)
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`)
        }
    }

    async actualizar(producto, id) {
        try {
            return await this.knex(this.tabla).where('id', id).update(producto)
        } catch (error) {
            throw new Error(`Error al actualizar: ${error}`)
        }
    }

    async borrar(id) {
        try {
            return await this.knex(this.tabla).where('id', id).del()
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
        }
    }

    async borrarAll() {
        try {
            return await this.knex(this.tabla).del()
        } catch (error) {
            throw new Error(`Error al borrar todo: ${error}`)
        }
    }

}


module.exports = ContenedorDB