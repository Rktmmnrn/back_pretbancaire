const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hi you !!')
})

app.listen(port, () => {
    console.log(`L'app écoute sur le port: ${port} actuellement`)
})