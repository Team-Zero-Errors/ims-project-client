'use strict'
const store = require('../store')
const itemUi = require('../item/ui')

const signUpSuccess = function (signUpResponse) {
  $('#signUpModal').modal('hide')
  $('#signInModal').modal('show')
}

const signUpError = function (error) {
  $('#signUpModalLabel').html('Error. Please Try Again ', error)
  $('#signUpModalLabel').css('color', 'red')
}

const signInSuccess = function (response) {
  $('.view1').css('display', 'none')
  $('.view2').css('display', 'block')
  $('#signInModal').modal('hide')
  store.user = response.user
}

const signInError = function () {
  $('#signInModalLabel').html('Error. Please Try Again')
  $('#signInModalLabel').css('color', 'red')
}

const changePasswordSuccess = function (response) {
  $('#changePasswordModalLabel').html('You have successfully change your password!', response)
  $('#changePasswordModalLabel').css('color', 'green')
}

const changePasswordError = function () {
  $('#changePasswordModalLabel').html('Error. Please Try Again')
  $('#changePasswordModalLabel').css('color', 'red')
}

const signOutSuccess = function (response) {
  $('.view1').css('display', 'block')
  $('.view2').css('display', 'none')
  itemUi.resetUiHandleing()
  delete store.user
}

const signOutFailure = function () {
  $('#sign-out-text').html('Error. Trouble Signing Out')
  $('#sign-out-text').css('color', 'red')
}

const resetAuth = function () {
  $('#sign-out-text').html('You Have Successfully Signed Out')
  $('#sign-out-text').css('color', 'black')
  $('#signUpModalLabel').html('Sign Up')
  $('#signUpModalLabel').css('color', 'black')
  $('#signInModalLabel').html('Sign In')
  $('#signInModalLabel').css('color', 'black')
  $('#changePasswordModalLabel').html('Change Password')
  $('#changePasswordModalLabel').css('color', 'black')
  $('#sign-up-form')[0].reset()
  $('#sign-in-form')[0].reset()
  $('#change-password-form')[0].reset()
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutFailure,
  resetAuth
}
