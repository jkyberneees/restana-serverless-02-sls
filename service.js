'use strict'

const service = require('restana')()

service.get('/hi', (req, res) => {
  res.send({
    msg: 'Hello World from restana service!'
  })
})

service.post('/create', (req, res) => {
  res.send(201)
})

module.exports = service
