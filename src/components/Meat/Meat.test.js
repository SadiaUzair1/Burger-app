import { mount, shallow } from 'enzyme'
import { Meat } from 'components'

describe('rendering components', () => {
  it('Meat is rendering alone', () => {
    const wrapper = shallow(<Meat />)
    expect(wrapper.contains(<Meat />))
  })

  it('Meat is rendering with children', () => {
    const wrapper = mount(<Meat />)
    expect(wrapper.contains(<Meat />))
  })
})
