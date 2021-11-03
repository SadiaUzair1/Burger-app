import { BurgerIngredients } from 'containers'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

let wrapper
const setup = store =>
  shallow(
    <Provider store={store}>
      <BurgerIngredients />
    </Provider>
  ).childAt(0)

const mockStore = configureStore()
describe('rendering components', () => {
  const initialState = {
    ingredients: {
      lettuce: 1,
      bacon: 0,
      cheese: 0,
      meat: 0,
      amount: 3.0
    }
  }

  beforeEach(() => {
    const store = mockStore(initialState)
    wrapper = setup(store)
  })

  it(' burger ingredient should render with ingrient states', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('store initial state should match', () => {
    const store = mockStore(initialState)
    const initialStates = {
      lettuce: 1,
      bacon: 0,
      cheese: 0,
      meat: 0,
      amount: 3.0
    }
    const state = store.getState()
    expect(state.ingredients).toEqual(initialStates)
  })

  it('burger ingredient should render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
