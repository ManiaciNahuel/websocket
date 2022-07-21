const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const fs = require('fs')
app.use(express.static('public'));

let productos = JSON.parse(fs.readFileSync("productos.txt", 'utf-8'))
let messages = []


//Connection

io.on('connection', function(socket) {
    console.log('Un cliente se ha conectado');
    socket.emit('productos', productos);

    socket.on('new-product', function(data) {
        productos.push(data);
        io.sockets.emit('productos', productos);
    });
});

io.on('connection', function(socket) {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', messages);

    socket.on('new-message', function(data) {
        messages.push(data);
        io.sockets.emit('messages', messages);
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