const knex = require('knex')

class ContenedorDB {
    constructor(config, tabla) {
        this.knex = knex(config)
        this.tabla = tabla
    }

    //Metodos como listar actualizar guardar etc
    async crearTabla() {
        return this.knex.schema.dropTableIfExists("productos")
            .finally(() => {
                this.knex.schema.createTable("productos", table => {
                        table.increments('id').primary();
                        table.string('titulo');
                        table.string('imagen');
                        table.string('price');
                    })
                    .then(() => {
                        this.knex.destroy()
                        console.log(`Table "${this.tabla}" created`);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
    }
    async crearTabla2() {
        return this.knex.schema.dropTableIfExists("mensajes")
            .finally(() => {
                this.knex.schema.createTable("mensajes", table => {
                        table.increments('id').primary();
                        table.string('author');
                        table.string('texto');
                        table.string('fecha');
                    })
                    .then(() => {
                        this.knex.destroy()
                        console.log(`Table "${this.tabla}" created`);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
    }

    async getOne(id) {
        try {
            return await this.knex.select().from(this.tabla).where('id', id)
        } catch (error) {
            throw new Error(`Error al listar: ${error}`)
        }
    }
    async getAll() {
        try {
            let productps = await this.knex.select().from(this.tabla)
            return productps
        } catch (error) {
            throw new Error(`Error al listar: ${error}`)
        }
    }
    async postNew(newObject) {
        try {
            console.log(newObject);
            return await this.knex(this.tabla).insert(newObject)
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`)
        }
    }

    async upload(producto, id) {
        try {
            return await this.knex(this.tabla).where('id', id).update(producto)
        } catch (error) {
            throw new Error(`Error al actualizar: ${error}`)
        }
    }

    async delete(id) {
        try {
            return await this.knex(this.tabla).where('id', id).del()
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
        }
    }

    async deleteAll() {
        try {
            return await this.knex(this.tabla).del()
        } catch (error) {
            throw new Error(`Error al borrar todo: ${error}`)
        }
    }

}

module.exports = ContenedorDB