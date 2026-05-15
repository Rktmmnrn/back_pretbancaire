const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'fenohery',
    password: 'admin',
    database: 'pretbancaire'
})

connection.connect();

app.get('/', (req, res) => {
    res.send('hi..!!');
})

app.listen(port, () => {
    console.log(`L'app écoute sur le port: ${port} actuellement`)
})