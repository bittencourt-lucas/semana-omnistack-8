const express = require('express')

const server = express()

// A constante server contém todos os métodos HTTP:
// GET, POST, PUT, DELETE
// GET: Buscar informação da API
// POST: Criar algum tipo de entidade dentro da API
// PUT: Editar algum tipo de entidade dentro da API
// DELETE: Deletar algum tipo de entidade dentro da API
server.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}!` })
})

server.listen(3333)