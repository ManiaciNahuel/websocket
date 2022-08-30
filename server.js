const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const fs = require('fs')
app.use(express.static('public'));
const { faker } = require('@faker-js/faker');
faker.locale = "es";
const { normalize, schema, denormalize } = require("normalizr");
const util = require('util')
function newElement() {
    const element = {
        nombre: faker.commerce.product(),
        precio: faker.finance.amount(),
        imagen: faker.image.technics(650, 600, true)
    }
    return element
}

async function generarProdutos() {
    for (let index = 0; index < 5; index++) {
        productos.push(newElement())
    }
}

let productos = []
generarProdutos()
let messages = []

function addMs(mensaje) {
    console.log((messages))
    console.log(`New ms : ${JSON.stringify(mensaje)}`);
    fs.appendFile('mensajes.txt', JSON.stringify(mensaje) + ", ", function (err) {
        if (err) throw err;
        console.log('Saved!');
      })
}


const originalData2 = {
    "id": "mensajes_1",
    "mensajes": [
      {
          "author": [
            {
            "id": "mail_1",
            "edad": "19",
            "nombre": "Nicole",
            "apellido": "Gonzalez",
            "alias": "NicoG",
            "avatar": "avatar1",
            "telefono": "1567811543"
          }
        ],
        "text": "Hola 1"
      }, {
        "author": [
          {
          "id": "mail_1",
          "edad": "19",
          "nombre": "Nicole",
          "apellido": "Gonzalez",
          "alias": "NicoG",
          "avatar": "avatar1",
          "telefono": "1567811543"
        }
      ],
      "text": "Hola 2"
    },{
        "author": [
          {
          "id": "mail_1",
          "edad": "19",
          "nombre": "Nicole",
          "apellido": "Gonzalez",
          "alias": "NicoG",
          "avatar": "avatar1",
          "telefono": "1567811543"
        }
      ],
      "text": "Hola 3"
    },{
        "author": [
          {
          "id": "mail_1",
          "edad": "19",
          "nombre": "Nicole",
          "apellido": "Gonzalez",
          "alias": "NicoG",
          "avatar": "avatar1",
          "telefono": "1567811543"
        }
      ],
      "text": "Hola 4"
    },{
        "author": [
          {
          "id": "mail_1",
          "edad": "19",
          "nombre": "Nicole",
          "apellido": "Gonzalez",
          "alias": "NicoG",
          "avatar": "avatar1",
          "telefono": "1567811543"
        }
      ],
      "text": "Hola 1"
    },{
        "author": [
          {
          "id": "mail_1",
          "edad": "19",
          "nombre": "Nicole",
          "apellido": "Gonzalez",
          "alias": "NicoG",
          "avatar": "avatar1",
          "telefono": "1567811543"
        }
      ],
      "text": "Hola 1"
    },{
        "author": [
          {
          "id": "mail_1",
          "edad": "19",
          "nombre": "Nicole",
          "apellido": "Gonzalez",
          "alias": "NicoG",
          "avatar": "avatar1",
          "telefono": "1567811543"
        }
      ],
      "text": "Hola 1"
    },{
        "author": [
          {
          "id": "mail_1",
          "edad": "19",
          "nombre": "Nicole",
          "apellido": "Gonzalez",
          "alias": "NicoG",
          "avatar": "avatar1",
          "telefono": "1567811543"
        }
      ],
      "text": "Hola 1"
    },{
        "author": [
          {
          "id": "mail_1",
          "edad": "19",
          "nombre": "Nicole",
          "apellido": "Gonzalez",
          "alias": "NicoG",
          "avatar": "avatar1",
          "telefono": "1567811543"
        }
      ],
      "text": "Hola 1"
    },{
        "author": [
          {
          "id": "mail_1",
          "edad": "19",
          "nombre": "Nicole",
          "apellido": "Gonzalez",
          "alias": "NicoG",
          "avatar": "avatar1",
          "telefono": "1567811543"
        }
      ],
      "text": "Hola 1"},{
        "author": [
          {
          "id": "mail_1",
          "edad": "19",
          "nombre": "Nicole",
          "apellido": "Gonzalez",
          "alias": "NicoG",
          "avatar": "avatar1",
          "telefono": "1567811543"
        }
      ],
      "text": "Hola 1"
    },{
      "author": [
        {
        "id": "mail_1",
        "edad": "19",
        "nombre": "Nicole",
        "apellido": "Gonzalez",
        "alias": "NicoG",
        "avatar": "avatar1",
        "telefono": "1567811543"
      }
    ],
    "text": "Hola 1"
  },{
        "author": [
          {
          "id": "mail_1",
          "edad": "19",
          "nombre": "Nicole",
          "apellido": "Gonzalez",
          "alias": "NicoG",
          "avatar": "avatar1",
          "telefono": "1567811543"
        }
      ],
      "text": "Hola 1"
    },{
      "author": [
        {
        "id": "mail_1",
        "edad": "19",
        "nombre": "Nicole",
        "apellido": "Gonzalez",
        "alias": "NicoG",
        "avatar": "avatar1",
        "telefono": "1567811543"
      }
    ],
    "text": "Hola 1"
  },{
    "author": [
      {
      "id": "mail_1",
      "edad": "19",
      "nombre": "Nicole",
      "apellido": "Gonzalez",
      "alias": "NicoG",
      "avatar": "avatar1",
      "telefono": "1567811543"
    }
  ],
  "text": "Hola 1"
},{
        "author": [
          {
          "id": "mail_1",
          "edad": "19",
          "nombre": "Nicole",
          "apellido": "Gonzalez",
          "alias": "NicoG",
          "avatar": "avatar1",
          "telefono": "1567811543"
        }
      ],
      "text": "Hola 1"
    },{
        "author": [
          {
          "id": "mail_1",
          "edad": "19",
          "nombre": "Nicole",
          "apellido": "Gonzalez",
          "alias": "NicoG",
          "avatar": "avatar1",
          "telefono": "1567811543"
        }
      ],
      "text": "Hola 1"
    },{
      "author": [
        {
        "id": "mail_1",
        "edad": "19",
        "nombre": "Nicole",
        "apellido": "Gonzalez",
        "alias": "NicoG",
        "avatar": "avatar1",
        "telefono": "1567811543"
      }
    ],
    "text": "Hola 1"
  },{
    "author": [
      {
      "id": "mail_1",
      "edad": "19",
      "nombre": "Nicole",
      "apellido": "Gonzalez",
      "alias": "NicoG",
      "avatar": "avatar1",
      "telefono": "1567811543"
    }
  ],
  "text": "Hola 1"
},{
  "author": [
    {
    "id": "mail_1",
    "edad": "19",
    "nombre": "Nicole",
    "apellido": "Gonzalez",
    "alias": "NicoG",
    "avatar": "avatar1",
    "telefono": "1567811543"
  }
],
"text": "Hola 1"
},{
  "author": [
    {
    "id": "mail_1",
    "edad": "19",
    "nombre": "Nicole",
    "apellido": "Gonzalez",
    "alias": "NicoG",
    "avatar": "avatar1",
    "telefono": "1567811543"
  }
],
"text": "Hola 1"
},{
  "author": [
    {
    "id": "mail_1",
    "edad": "19",
    "nombre": "Nicole",
    "apellido": "Gonzalez",
    "alias": "NicoG",
    "avatar": "avatar1",
    "telefono": "1567811543"
  }
],
"text": "Hola 1"
},{
  "author": [
    {
    "id": "mail_1",
    "edad": "19",
    "nombre": "Nicole",
    "apellido": "Gonzalez",
    "alias": "NicoG",
    "avatar": "avatar1",
    "telefono": "1567811543"
  }
],
"text": "Hola 1"
},{
  "author": [
    {
    "id": "mail_1",
    "edad": "19",
    "nombre": "Nicole",
    "apellido": "Gonzalez",
    "alias": "NicoG",
    "avatar": "avatar1",
    "telefono": "1567811543"
  }
],
"text": "Hola 1"
},{
  "author": [
    {
    "id": "mail_1",
    "edad": "19",
    "nombre": "Nicole",
    "apellido": "Gonzalez",
    "alias": "NicoG",
    "avatar": "avatar1",
    "telefono": "1567811543"
  }
],
"text": "Hola 1"
},{
  "author": [
    {
    "id": "mail_1",
    "edad": "19",
    "nombre": "Nicole",
    "apellido": "Gonzalez",
    "alias": "NicoG",
    "avatar": "avatar1",
    "telefono": "1567811543"
  }
],
"text": "Hola 1"
},{
  "author": [
    {
    "id": "mail_1",
    "edad": "19",
    "nombre": "Nicole",
    "apellido": "Gonzalez",
    "alias": "NicoG",
    "avatar": "avatar1",
    "telefono": "1567811543"
  }
],
"text": "Hola 1"
},{
  "author": [
    {
    "id": "mail_1",
    "edad": "19",
    "nombre": "Nicole",
    "apellido": "Gonzalez",
    "alias": "NicoG",
    "avatar": "avatar1",
    "telefono": "1567811543"
  }
],
"text": "Hola 1"
},{
  "author": [
    {
    "id": "mail_1",
    "edad": "19",
    "nombre": "Nicole",
    "apellido": "Gonzalez",
    "alias": "NicoG",
    "avatar": "avatar1",
    "telefono": "1567811543"
  }
],
"text": "Hola 1"
}
]}

const mensaje = new schema.Entity("mensajes");
const author = new schema.Entity("authors");
const text = new schema.Entity("texts");
const mySchema = new schema.Entity('mySchema', {
    mensajes: mensaje, 
    authors: [author], 
    texts: text
})

function print(data) {
    console.log(util.inspect(data, false, 12, true));
  }

const dataNormalizada = normalize(originalData2, mySchema);

print(dataNormalizada);

const dataDesnormalizada = denormalize(dataNormalizada.result, mySchema, dataNormalizada.entities);

print(dataDesnormalizada)

const originalLength = JSON.stringify(originalData2).length
const normalizedLength = JSON.stringify(dataNormalizada).length
const compressedPercentage = 100 - (normalizedLength / originalLength) * 100;
console.log(`Se comprimió un: ${compressedPercentage} %`);


//Connection

io.on('connection', function(socket) {
    console.log('Un cliente se ha conectado');
    socket.emit('productos', productos);
    socket.emit('messages', messages);

    socket.on('new-message', function(data) {
        addMs(data)
        
        messages.push(data);
        console.log(data);
        io.sockets.emit('messages', messages);
    });
    socket.on('new-product', function(data) {
        productos.push(data);
        io.sockets.emit('productos', productos);
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