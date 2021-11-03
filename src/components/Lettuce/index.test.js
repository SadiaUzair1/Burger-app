import { mount, shallow } from 'enzyme'
import { Lettuce } from 'components'

describe('rendering components', () => {
  it('Lettuce is rendering alone', () => {
    const wrapper = shallow(<Lettuce />)
    expect(wrapper.contains(<Lettuce />))
  })
  it('Lettuce is rendering with children', () => {
    const wrapper = mount(<Lettuce />)
    expect(wrapper.contains(<Lettuce />))
  })

  it('Cheese should be rendered', () => {
    const wrapper = shallow(<Lettuce />)
    expect(wrapper).toMatchSnapshot()
  })
})
