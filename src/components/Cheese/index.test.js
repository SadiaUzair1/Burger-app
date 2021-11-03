import { mount, shallow } from 'enzyme'

import { Cheese } from 'components'

describe('rendering components', () => {
  it('Cheese is rendering alone', () => {
    const wrapper = shallow(<Cheese />)
    expect(wrapper.contains(<Cheese />))
  })

  it('Cheese is rendering with children', () => {
    const wrapper = mount(<Cheese />)
    expect(wrapper.contains(<Cheese />))
  })
})
