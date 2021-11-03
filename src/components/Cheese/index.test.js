import { Cheese } from 'components'
import { mount, shallow } from 'enzyme'

describe('rendering components', () => {
  it('Cheese is rendering alone', () => {
    const wrapper = shallow(<Cheese />)
    expect(wrapper.contains(<Cheese />))
  })

  it('Cheese is rendering with children', () => {
    const wrapper = mount(<Cheese />)
    expect(wrapper.contains(<Cheese />))
  })

  it('Cheese should be rendered', () => {
    const wrapper = shallow(<Cheese />)
    expect(wrapper).toMatchSnapshot()
  })
})
