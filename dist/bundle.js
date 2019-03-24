'use strict'

const config = require('./utils/get-config')

let seqInstance
let TypeOrm

module.exports = function (options) {
  const orm = options.orm
  if (orm === 'typeorm') {
    if (TypeOrm) {
      return TypeOrm
    }
    TypeOrm = require('typeorm')
  } else {
    if (!seqInstance) {
      const Sequelize = require('sequelize')
      seqInstance = new Sequelize(config)
    }

    return seqInstance
  }
}
