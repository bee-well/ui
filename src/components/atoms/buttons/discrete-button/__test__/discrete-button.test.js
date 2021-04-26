import { shallow } from 'enzyme'
import DiscreteButton from '../index'

it("renders the child text", () => {
    const wrapper = shallow(<DiscreteButton>Test</DiscreteButton>)
    expect(wrapper.text()).toEqual("Test")
})

it("maps onClick to the buttons click handler", () => {
    const fn = jest.fn()
    const r = shallow(<DiscreteButton onClick={fn}></DiscreteButton>)
    r.find('button').simulate('click')
    expect(fn.mock.calls.length).toEqual(1)
})

