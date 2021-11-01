import { mount, shallow } from 'enzyme'
import { App } from 'App'

describe('rendering components', () => {
  it('app is rendering', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.contains(<App />))
  })

  // it('app is rendering', () => {
  //   const wrapper = mount(<App />)
  //   expect(wrapper.contains(<App />))
  // })
})
