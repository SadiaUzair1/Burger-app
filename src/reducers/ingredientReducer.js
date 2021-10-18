import * as initialState from './initialState'

export const ingredientPriceReducer = (state = initialState.initialIngredientPrice, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        [action.payload]: state[action.payload] + 1,
        amount: state.amount + initialState.ingredientPrices[action.payload]
      }

    case 'DECREMENT':
      return {
        ...state,
        [action.payload]: state[action.payload] - 1,
        amount: state.amount - initialState.ingredientPrices[action.payload]
      }

    default:
      return state
  }
}
