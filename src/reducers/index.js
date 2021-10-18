import { combineReducers } from 'redux'

import { ingredientPriceReducer } from './ingredientReducer'

export default combineReducers({
  ingredient: ingredientPriceReducer
})
