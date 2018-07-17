'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const itemUi = require('./ui.js')
const itemApi = require('./api.js')

const onCreateItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data.item is ', data.item)
  console.log('event.target is ', event.target)
  itemApi.createItem(data)
    .then(itemUi.createItemSuccess)
    .catch(itemUi.createItemError)
}

module.exports = {
  onCreateItem
}
