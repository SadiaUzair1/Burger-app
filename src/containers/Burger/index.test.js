import { mount } from 'enzyme'
import { Burger } from 'containers'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

let wrapper
const setup = store =>
  mount(
    <Provider store={store}>
      <Burger />
    </Provider>
  )

const mockStore = configureStore()
describe('rendering components', () => {
  const initialState = {
    ingredient: {
      lettuce: 1,
      bacon: 0,
      cheese: 0,
      meat: 0,
      amount: 3.5
    }
  }

  beforeEach(() => {
    const store = mockStore(initialState)
    wrapper = setup(store)
  })

  it('Burger should render', () => {
    expect(wrapper.length).toBe(1)
  })

  it('Burger should be rendered', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
