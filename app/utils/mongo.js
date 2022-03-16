'use strict'

const Mongodb = require('juan-mongodb')
const { mongodbName, mongodbUrl } = require('../../config/db')

function mongo() {
  return new Mongodb(mongodbUrl, mongodbName)
}
module.exports = mongo
