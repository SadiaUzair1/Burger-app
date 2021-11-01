import { Bacon } from 'components/Bacon'
import { mount, shallow } from 'enzyme'

describe('rendering components', () => {
  it('bacon should render alone', () => {
    const wrapper = shallow(<Bacon />)
    expect(wrapper.contains(<Bacon />))
  })
  it('bacon is rendering with children', () => {
    const wrapper = mount(<Bacon />)
    expect(wrapper.contains(<Bacon />))
  })
  it('image should be of becon', () => {
    const wrapper = shallow(<Bacon />)
    expect(wrapper.find('img').prop('src')).toEqual('/images/bacon.png')
  })
})
