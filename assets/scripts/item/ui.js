'use strict'
const store = require('../store')

const showItemsTemplate = require('../templates/item-listing.handlebars')

const createItemSuccess = function (data) {
  $('#createItemModal').modal('hide')
  $('#create-item-form')[0].reset()
}
const createItemError = function () {
  $('#createModalLabel').html('Something went wrong try again!')
}

const getItemsSuccess = (data) => {
  const showNewItemsHtml = showItemsTemplate({ items: data.items })
  $('#inventoryList').html(showNewItemsHtml)
}

const getItemsFailure = function () {
}

const deleteItemSuccess = function () {
  console.log('you have succesfully deleted an item!')
}
const deleteItemError = function (error) {
  console.log('you have an error', error)
}

module.exports = {
  createItemSuccess,
  createItemError,
  deleteItemSuccess,
  deleteItemError,
  getItemsSuccess,
  getItemsFailure
}
