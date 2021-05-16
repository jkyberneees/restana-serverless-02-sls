'use strict'

const jsonParser = require('serverless-json-parser')()
const service = require('restana')()

service.use(jsonParser)

service.get('/hi', (req, res) => {
  res.send({
    msg: 'Hello World from API service!'
  })
})

service.post('/create', (req, res) => {
  res.send(req.body, 201)
})

module.exports = service
