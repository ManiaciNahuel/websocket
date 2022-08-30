const fs = require("fs")

class contenedorFs {

    constructor(ruta) {
        this.ruta = `./public/${ruta}`;
    }

    getAll() {
        try {
            let cc = fs.readFileSync(this.ruta, 'utf-8')
            if (cc === "") {
                return (`Archivo vacío`);
            } else {
                return JSON.parse(cc);
            }
        } catch (error) {
            throw new Error(`Error al listar: ${error}`)
        }
    }
    getOne(id) {
        const objects = this.getAll()
        if (id <= 0 || id > objects.length) {
            throw new Error(`Error al actualizar: no existe el id ${id}`)
        } else {
            const found = objects.find(prod => prod.id == id)
            return found
        }
    }

    postNew(newObject) {
        const objects = this.getAll()

        let newId
        if (objects.length == 0) {
            newId = 1
        } else {
            newId = objects[objects.length - 1].id + 1
        }
        const newObj = {...newObject, id: newId }
        objects.push(newObj)

        try {
            fs.writeFileSync(this.ruta, JSON.stringify(objects, null, 2))
            return newId
        } catch (error) {
            throw new Error(`Error al agregar: ${error}`)
        }
    }

    upload(producto, id) {
        const objects = this.getAll()
        if (id <= 0 || id > objects.length) {
            throw new Error(`Error al actualizar: no existe el id ${id}`)
        } else {
            producto.id = id
            producto.timestamp = Date.now();
            producto.code = `${producto.nombre}${producto.timestamp}`;
            const previousProduct = objects.splice(id - 1, 1, producto);
            try {
                fs.writeFileSync(this.ruta, JSON.stringify(objects, null, 2))
                return {
                    previous: previousProduct[0],
                    new: producto
                }
            } catch (error) {
                throw new Error(`Error al actualizar: ${error}`)
            }
        }
    }

    delete(id) {
        console.log("Delete");
        const objects = this.getAll()
        const found = objects.find(data => data.id == id)
        console.log(found);
        if (found == undefined) {
            throw new Error(`Error al eliminar: no existe el id ${id}`)
        } else {
            const deletedProd = found
            const newArray = objects.filter(data => data.id != id);
            try {
                fs.writeFileSync(this.ruta, JSON.stringify(newArray))
                return {
                    deleted: deletedProd
                }
            } catch (error) {
                throw new Error(`Error al eliminar: ${error}`)
            }
        }
    }

    deleteAll() {
        try {
            fs.writeFileSync(this.ruta, JSON.stringify([], null, 2))
        } catch (error) {
            throw new Error(`Error al borrar todo: ${error}`)
        }
    }

}

module.exports = contenedorFs