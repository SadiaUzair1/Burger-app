import { Bacon } from 'components/Bacon'
import { mount, shallow } from 'enzyme'

import { findByTestAttr } from '../../../utlis'

const setup = () => {
  const wrapper = shallow(<Bacon />)
  return wrapper
}

const mounting = () => {
  const wrapper1 = mount(<Bacon />)
  return wrapper1
}

describe('rendering components', () => {
  let component
  let wrapper

  beforeEach(() => {
    component = setup()
    wrapper = mounting()
  })

  it('bacon should render alone', () => {
    expect(component.contains(<Bacon />))
  })

  it('bacon is rendering with children', () => {
    expect(wrapper.contains(<Bacon />))
  })

  it('image should be of becon', () => {
    const logo = findByTestAttr(component, 'bacon')
    expect(logo.length).toBe(1)
  })

  it('bacon should be rendered', () => {
    expect(component).toMatchSnapshot()
  })
})
