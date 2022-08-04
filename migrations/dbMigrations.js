const knex = require('knex')
const { configMySQL, configSQLite } = require('../config.js');

(async() => {

    try {
        const dbClient = knex(configMySQL.config)
        await dbClient.schema.dropTableIfExists(configMySQL.table)

        await dbClient.schema.createTable(configMySQL.table, table => {
            table.increments('id').primary();
            table.string('title');
            table.string('imagen');
            table.string('price');
        })

        await dbClient.destroy();

        console.log("Se creo la tabla");

    } catch (error) {
        console.log('Error al crear la tabla');
        console.log(error);
    }

})
(async() => {

    try {
        const dbClient = knex(configSQLite.config)
        await dbClient.schema.dropTableIfExists(configSQLite.table)

        await dbClient.schema.createTable(configSQLite.table, table => {
            table.increments('id').primary();
            table.string('author');
            table.string('time');
            table.string('text');
        })

        await dbClient.destroy();

        console.log("Se creo la tabla");

    } catch (error) {
        console.log('Error al crear la tabla');
        console.log(error);
    }
})