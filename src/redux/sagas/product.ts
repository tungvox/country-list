import { takeLatest } from 'redux-saga/effects'

import { ADD_PRODUCT, AddProductAction } from '../../types/index'

function* doSomethingWhenAddingProduct(action: AddProductAction) {
  yield console.log(action)
}

export default [takeLatest(ADD_PRODUCT, doSomethingWhenAddingProduct)]
