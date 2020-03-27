
const serverless = require('serverless-http')
const handler = serverless(require('./service'))

// export handler
module.exports.handler = handler
