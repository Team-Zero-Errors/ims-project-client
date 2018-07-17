'use strict'

const store = require('../store')
const config = require('../config')

const createItem = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/items',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createItem
}
