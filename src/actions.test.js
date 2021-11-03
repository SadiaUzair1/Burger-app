import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

const handleIncrement = store => {
  store.dispatch({ type: 'INCREMENT', payload: 'lettuce' })
}
let store
const handleDecrement = store => {
  store.dispatch({ type: 'DECREMENT', payload: 'lettuce' })
}
beforeEach(() => {
  const mockStore = configureStore()
  return (store = mockStore({}))
})
describe('rendering components', () => {
  it('INCREMENT action should invoke', () => {
    const button = shallow(<button onClick={handleIncrement(store)} />)
    button.simulate('click')
    const actions = store.getActions()
    expect(actions[0].type).toBe('INCREMENT')
  })

  it('DECREMENT action should invoke', () => {
    const button = shallow(<button onClick={handleDecrement(store)} />)
    button.simulate('click')
    const actions = store.getActions()
    expect(actions[0].type).toBe('DECREMENT')
  })
})
