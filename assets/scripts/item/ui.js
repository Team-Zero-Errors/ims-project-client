'use strict'
const store = require('../store')

const showItemsTemplate = require('../templates/item-listing.handlebars')

const createItemSuccess = function (data) {
  store.item = data.item
  console.log('data is ', data)
  console.log('data.item is', data.item)
  console.log('data.item.name is', data.item.name)
  const showNewItemsHtml = showItemsTemplate({ items: data.item })
  $('#inventoryList').html(showNewItemsHtml)
}
const createItemError = function () {
  $('#createModalLabel').html('Something went wrong try again!')
}

module.exports = {
  createItemSuccess,
  createItemError
}
