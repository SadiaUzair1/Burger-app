import configureStore from 'redux-mock-store'

let store

beforeEach(() => {
  const mockStore = configureStore()
  return (store = mockStore({}))
})

describe('rendering components', () => {
  it('INCREMENT action should invoke', () => {
    store.dispatch({ type: 'INCREMENT', payload: 'lettuce' })
    const actions = store.getActions()
    expect(actions[0].type).toBe('INCREMENT')
  })

  it('DECREMENT action should invoke', () => {
    store.dispatch({ type: 'DECREMENT', payload: 'lettuce' })
    const actions = store.getActions()
    expect(actions[0].type).toBe('DECREMENT')
  })
})
