import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import country from './country'

const createRootReducer = () =>
  combineReducers({
    product,
    country,
    ui,
  })

export default createRootReducer
