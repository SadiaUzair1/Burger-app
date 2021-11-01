import { shallow } from 'enzyme'
import { BurgerIngredients } from 'containers'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

let wrapper
const setup = store =>
  shallow(
    <Provider store={store}>
      <BurgerIngredients />
    </Provider>
  )

const mockStore = configureStore()
describe('rendering components', () => {
  const initialState = {
    lettuce: 1,
    bacon: 0,
    cheese: 0,
    meat: 0,
    amount: 3.5
  }

  beforeEach(() => {
    const store = mockStore(initialState)
    wrapper = setup(store)
  })

  it('rendeing burger ingredient with ingrient states', () => {
    expect(wrapper.length).toEqual(1)
  })
})
