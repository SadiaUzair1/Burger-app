const { ingredientPriceReducer } = require('./ingredientReducer')
const { initialIngredientPrice, ingredientPrices } = require('./initialState')

let updatedState = initialIngredientPrice
const setUp = (action, payload) => {
  const actualOutput = ingredientPriceReducer(initialIngredientPrice, {
    action: action,
    payload: payload
  })
  return actualOutput
}
const expectedOutput = ingredient => {
  updatedState[ingredient] += 1
  updatedState.amount += ingredientPrices[ingredient]
  return updatedState
}

describe('Testing Reducer', () => {
  it('cheese should increment', () => {
    const newState = setUp('INCREMENT', 'cheese')
    expect(newState).toEqual(expectedOutput('cheese'))
  })

  it('cheese should decrement', () => {
    const newState = setUp('DECREMENT', 'cheese')
    expect(newState).toEqual(expectedOutput('cheese'))
  })
  it('meat should increment', () => {
    const newState = setUp('INCREMENT', 'meat')
    expect(newState).toEqual(expectedOutput('meat'))
  })

  it('meat should decrement', () => {
    const newState = setUp('DECREMENT', 'meat')
    expect(newState).toEqual(expectedOutput('meat'))
  })
  it('lettuce should increment', () => {
    const newState = setUp('INCREMENT', 'lettuce')
    expect(newState).toEqual(expectedOutput('lettuce'))
  })

  it('lettuce should decrement', () => {
    const newState = setUp('DECREMENT', 'lettuce')
    expect(newState).toEqual(expectedOutput('lettuce'))
  })
  it('bacon should increment', () => {
    const newState = setUp('INCREMENT', 'bacon')
    expect(newState).toEqual(expectedOutput('bacon'))
  })

  it('bacon should decrement', () => {
    const newState = setUp('DECREMENT', 'bacon')
    expect(newState).toEqual(expectedOutput('bacon'))
  })
})
