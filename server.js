const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'fenohery',
    password: 'admin',
    database: 'pretbancaire'
})

connection.connect(); // connection

const mockUser = [
    {id: 0, name: "jean"},
    {id: 1, name: "bas"},
    {id: 2, name: "koto"}
]

app.get("/", (req, res) => {
    res.status(200).send("Hi...!");
})

app.get("/users", (req, res) => {
    res.status(200).send(mockUser);
})

app.get("/users/:id", (req, res) => {
    const parsedId = req.params.id;
    if (isNaN(parsedId)) return res.status(404).send('Bad request');
    return res.status(200).send(parsedId);
})

// connection.destroy(); // deconnection
app.listen(port, () => {
    console.log(`L'app écoute sur le port: ${port} actuellement`)
})