import { shallow } from 'enzyme'
import { RenderMoreLessButton } from 'containers'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

let wrapper
const setup = store =>
  shallow(
    <Provider store={store}>
      <RenderMoreLessButton />
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

  it('rendeing component', () => {
    expect(wrapper.length).toBe(1)
  })
  it('less Button clicked', () => {
    const button = wrapper.find('Button.less')
    // button.simulate('click')
    expect(button).exist
  })
  it('right Button clicked', () => {
    const button = wrapper.find('Button.more')
    console.log(wrapper)
    // button.simulate('click')
    expect(button.exists()).toBe(true)
  })
})
