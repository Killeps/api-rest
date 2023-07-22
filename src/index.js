const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3443);

app.use(express.json());
app.use(express.urlencoded({entended: false}));

app.get('/user',(req,res)=>{
    res.json({"id": "0001",
               "nombre": "Juan Perez",
               "fono": "676856868",
               "edad": "34"});
});


const sslServer = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname,'cert','key.pem')),
        cert: fs.readFileSync(path.join(__dirname,'cert','cert.pem')),
    },
    app
);

sslServer.listen(app.get('port'),()=> 
console.log(`Servidor iniciado! ${app.get('port')}`));