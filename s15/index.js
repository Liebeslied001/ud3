// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) =>{
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/plain');
//     res.end('Hola Mundo')
// })

// server.listen(port, hostname, ()=>{
//     console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`)
//     console.log(`Joseph Axel Araujo Guevara`)
// })

const express = require('express')

const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.get('/asd', (req,res)=>{
    res.send('ASD')
})

app.listen(port,()=>{
    console.log(`El servidor esta escuchando en http://localhost:${port}/`)
    console.log("2 + 2 = " + (2+2))
})

