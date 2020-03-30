'use strict'

const jsonParser = require('serverless-json-parser')()
const query = require('connect-query')
const service = require('restana')()

service.use(query())
service.use(jsonParser)

service.get('/hi', (req, res) => {
  res.send({
    msg: 'Hello World from restana service!'
  })
})

service.post('/create', (req, res) => {
  res.send(204)
})

module.exports = service
