import { mount, shallow } from 'enzyme'
import { Burger } from 'containers'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

let wrapper
const alone = store =>
  mount(
    <Provider store={store}>
      <Burger />
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

  // beforeEach(() => {
  //   const store = mockStore(initialState)
  //   wrapper = alone(store)
  // })

  // it('rendeing burger with children', () => {
  //   console.log('wrapper', wrapper)
  //   expect(wrapper.length).toEqual(1)
  // })

  it('Burger is rendering alone', () => {
    const container = shallow(<Burger />)
    expect(container.contains(<Burger />))
  })
})
