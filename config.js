const configMySQL = {
    table: 'productos',
    config: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: '',
            database: 'ecommerce'
        }
    }
}

const configSQLite = {
    table: 'mensajes',
    config: {
        client: 'sqlite3',
        connection: {
            filename: "../DB/ecommerce.sqlite"
        },
        useNullAsDefault: true
    }
}

module.exports = { configMySQL, configSQLite }