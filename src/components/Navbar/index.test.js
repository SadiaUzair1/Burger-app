import { mount, shallow } from 'enzyme'
import { NavBar } from 'components'

describe('rendering components', () => {
  it('NavBar is rendering alone', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.contains(<NavBar />))
  })

  it('NavBar is rendering with children', () => {
    const wrapper = mount(<NavBar />)
    expect(wrapper.contains(<NavBar />))
  })

  it('NavBar should be rendered', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper).toMatchSnapshot()
  })
})
