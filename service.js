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
  res.send({
    status: 'created'
  }, 204)
})

module.exports = service
