const http = require('http');
const puerto = 8080;

http.createServer( (req, res) => {

    res.writeHead(200, {'Content-type': 'application/json'});
    let output = {
        nombre: 'Chema',
        edad: 28,
        url: req.url
    };

    res.write(JSON.stringify(output));
    res.end();
})
.listen(puerto);

console.log('Escuchando el puerto ' + puerto );