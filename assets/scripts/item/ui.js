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
  const yourItems = data.items.filter((data) => {
    if (data.owner === store.user._id) {
      return data
    }
  })
  console.log('data is ', data)
  console.log('yourItems:', yourItems)
  const showNewItemsHtml = showItemsTemplate({ items: yourItems })
  $('#inventoryList').html(showNewItemsHtml)
  console.log('you have succesfully loaded inventory')
}

const getItemsFailure = function (error) {
  console.log('Get Items Error', error)
}

const deleteItemSuccess = function () {
  console.log('you have succesfully deleted an item!')
}
const deleteItemError = function (error) {
  console.log('Delete Item Error', error)
}

const updateItemSuccess = function () {
  // $('.updateModal').modal('hide')
  // $('#updateModal-backdrop').remove()
  // $('.update-form')[0].reset()
  console.log('you have succesfully updated an item!')
}
const updateItemError = function (error) {
  console.log('Update Item Error', error)
}

module.exports = {
  createItemSuccess,
  createItemError,
  deleteItemSuccess,
  deleteItemError,
  getItemsSuccess,
  getItemsFailure,
  updateItemError,
  updateItemSuccess
}
