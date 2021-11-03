import { Meat } from 'components'
import { mount, shallow } from 'enzyme'

describe('rendering components', () => {
  it('Meat is rendering alone', () => {
    const wrapper = shallow(<Meat />)
    expect(wrapper.contains(<Meat />))
  })

  it('Meat is rendering with children', () => {
    const wrapper = mount(<Meat />)
    expect(wrapper.contains(<Meat />))
  })

  it('Meat should be rendered', () => {
    const wrapper = shallow(<Meat />)
    expect(wrapper).toMatchSnapshot()
  })
})
