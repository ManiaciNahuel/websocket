const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const fs = require('fs')


const ContenedorDB = require('./contenedores/ContenedorDB.js')
const { configMySQL, configSQLite } = require('./config.js')

app.use(express.static('public'));


//let productos = JSON.parse(fs.readFileSync("productos.txt", 'utf-8'))
//let mensajes = []
const productos = new ContenedorDB(configMySQL.config, configMySQL.table)
const mensajes = new ContenedorDB(configSQLite.config, configSQLite.table)


//Connection

io.on('connection', async socket => {
    console.log('Un cliente se ha conectado');
    socket.emit('productos', productos.listarAll());
    socket.emit('mensajes', mensajes.listarAll());

    socket.on('update', data => {
        productos.guardar(data);
        io.sockets.emit('productos', productos);
    });

    socket.on('update', data => {
        mensajes.guardar(data);
        io.sockets.emit('mensajes', mensajes);
    });
});

// Ejs
app.set("view engine", "ejs");
app.set("views", "./public/views/ejs");

app.get('/', (request, respuesta) => {
    respuesta.render("index", { productos })
})

app.get('/productos', (request, respuesta) => {
    respuesta.render("form", { productos })
})

app.post('/productos', (req, res) => {
    const newObject = req.body
    productos.push(newObject)
    console.log(newObject);
    res.redirect("/")
})

const PORT = process.env.PORT || 8088;

const serv = server.listen(PORT, () => {
    console.log("Servidor HTTP escuchando en el puerto " + serv.address().port);
})

serv.on("error", error => console.log(error))