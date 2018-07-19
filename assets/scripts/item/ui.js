'use strict'
const store = require('../store')
const showItemsTemplate = require('../templates/item-listing.handlebars')

const createItemSuccess = function (data) {
  $('#createItemModal').modal('hide')
  $('#create-item-form')[0].reset()
}

const createItemError = function () {
  $('#createModalLabel').css('color', 'red')
  $('#createModalLabel').html('Something went wrong creating item try again!')
}

const getItemsSuccess = (data) => {
  const yourItems = data.items.filter((item) => {
    if (item.owner === store.user._id) {
      return item
    }
  })
  const showNewItemsHtml = showItemsTemplate({ items: yourItems })
  $('#inventoryList').html(showNewItemsHtml)
}

const getItemsFailure = function () {
  $('#itemTitle').css('color', 'red')
  $('#itemTitle').html('Something went wrong loading items try again!')
}

const deleteItemError = function () {
  $('#itemTitle').css('color', 'red')
  $('#itemTitle').html('Something went wrong deleting item try again!')
}

const updateItemSuccess = function (itemId) {
  $(`[data-id="modal${itemId}"]`).modal('hide')
  $('.modal-backdrop').remove()
  $('.update-form')[0].reset()
}
const updateItemError = function () {
  $('.itemUpdateTitle').css('color', 'red')
  $('.itemUpdateTitle').html('Something went wrong creating item try again!')
}

const resetUiHandleing = function () {
  $('.itemUpdateTitle').css('color', 'black')
  $('.itemUpdateTitle').html('Update Item')
  $('#itemTitle').css('color', 'white')
  $('#itemTitle').html('Item Inventory')
  $('#createModalLabel').css('color', 'black')
  $('#createModalLabel').html('Create Item')
}

module.exports = {
  createItemSuccess,
  createItemError,
  deleteItemError,
  getItemsSuccess,
  getItemsFailure,
  updateItemError,
  updateItemSuccess,
  resetUiHandleing
}
