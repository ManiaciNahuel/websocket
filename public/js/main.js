let socket = io.connect();

socket.on('productos', function(data) {
    console.log(data);
    render_products(data);
});

socket.on('messages', function(data) {
    console.log(data);
    render_messages(data);
});

function render_products(data) {
    let html = data.map(function(product, index) {
        return (`<div>
            <article style="margin-bottom: 40px">
                    <img style="width: 90px; " src=${product.imagen} />
                    <h3>
                        ${product.nombre}
                    </h3>
                    <p>$
                        ${product.precio}
                    </p>
                </article>
                <br>
            `)
    }).join(" ");
    document.getElementById('product_container').innerHTML = html;
}

function render_messages(data) {
    const today = new Date();
    const now = today.toLocaleString()
    let html = data.map(function(elem, index) {
        return (`<div>
            <strong style="color:blue">${elem.author.nombre}</strong>
            <span style="color:brown">${now}:</span> 
            <em style="color:green">${elem.text}</em> </div>`)
    }).join(" ");
    document.getElementById('messages_container').innerHTML = html;
}

function addMessage() {
    let mensaje = {
        author: {
            id: document.getElementById('mail').value,
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            edad: document.getElementById('edad').value,
            alias: document.getElementById('alias').value,
            avatar: document.getElementById('avatar').value
        },
        text: document.getElementById('texto').value
    }
    socket.emit('new-message', mensaje); // new-message es el nombre del evento (recordatorio)
    /* fs.writeFileSync("../../mensajes.txt", mensaje) */
    /* console.log(messages); */
    document.getElementById('texto').value = ''
    document.getElementById('texto').focus()

    return false;
}

function addProduct() {
    let product = {
        nombre: document.getElementById('prod_name').value,
        precio: document.getElementById('precio').value,
        imagen: document.getElementById('imagen').value
    };
    console.log(product);
    socket.emit('new-product', product); // new-product es el nombre del evento (recordatorio)

    document.getElementById('prod_name').value = ''
    document.getElementById('precio').value = ''
    document.getElementById('imagen').value = ''

    return false;
}