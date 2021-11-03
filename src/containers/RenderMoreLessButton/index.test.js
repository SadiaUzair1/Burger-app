import configureStore from 'redux-mock-store'
import { findByTestAttr } from '../../../utlis'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { RenderMoreLessButton } from 'containers'

let wrapper
const setup = store =>
  mount(
    <Provider store={store}>
      <RenderMoreLessButton />
    </Provider>
  )

const mockStore = configureStore()
describe('rendering components', () => {
  const initialState = {
    ingredient: {
      amount: 3.6,
      lettuce: 1,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  let store
  beforeAll(() => (store = mockStore(initialState)))
  beforeEach(() => {
    wrapper = setup(store)
  })
  it('component should render', () => {
    expect(wrapper.length).toBe(1)
  })

  it('More Button of lettuce should be clicked', async () => {
    const styledButton = findByTestAttr(wrapper, '0-more')
    const button = styledButton.at(1)
    button.simulate('click')
    expect(button.length).toBe(1)
  })

  it('Less Button of lettuce should be clicked', async () => {
    const styledButton = findByTestAttr(wrapper, '0-less')
    const button = styledButton.at(1)
    button.simulate('click')
    expect(button.length).toBe(1)
  })

  it('More Button of bacon should be clicked', async () => {
    const styledButton = findByTestAttr(wrapper, '1-less')
    const button = styledButton.at(1)
    button.simulate('click')
    expect(button.length).toBe(1)
  })

  it('Less Button of bacon should be clicked', async () => {
    const styledButton = findByTestAttr(wrapper, '1-less')
    const button = styledButton.at(1)
    button.simulate('click')
    expect(button.length).toBe(1)
  })

  it('More Button of cheese should be clicked', async () => {
    const styledButton = findByTestAttr(wrapper, '2-more')
    const button = styledButton.at(1)
    button.simulate('click')
    expect(button.length).toBe(1)
  })

  it('Less Button of cheese should be clicked', async () => {
    const styledButton = findByTestAttr(wrapper, '2-less')
    const button = styledButton.at(1)
    button.simulate('click')
    expect(button.length).toBe(1)
  })
  it('More Button of meat should be clicked', async () => {
    const styledButton = findByTestAttr(wrapper, '3-more')
    const button = styledButton.at(1)
    button.simulate('click')
    expect(button.length).toBe(1)
  })

  it('Less Button of meat should be clicked', async () => {
    const styledButton = findByTestAttr(wrapper, '3-less')
    const button = styledButton.at(1)
    button.simulate('click')
    expect(button.length).toBe(1)
  })
})
