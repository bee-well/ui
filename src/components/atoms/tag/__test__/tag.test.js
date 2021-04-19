import Tag from '../index'
import {shallow} from 'enzyme'

it("renders without crashing", () => {
    shallow(<Tag/>)
})

it("renders the child text", () => {
    const wrapper = shallow(<Tag text="test" />)
    expect(wrapper.contains(<p className="tag__text">test</p>)).toEqual(true)
})

it("maps onClick", () => {
    const fn = jest.fn()
    const wrapper = shallow(<Tag onClick={fn}/>)
    wrapper.find('div').simulate('click')
    expect(fn.mock.calls.length).toEqual(1)
})

it("changes color to activeColor when active is true", () => {
    const wrapper = shallow(<Tag activeColor="#000" active/>)
    const container = wrapper.find('.tag')
    expect(container.prop('style')).toHaveProperty("background", "#000")
})