import { shallow } from 'enzyme'
import Button from '../index'

it("renders the child text", () => {
    const wrapper = shallow(<Button>Test</Button>)
    expect(wrapper.text()).toEqual("Test")
})

it("maps onClick to the buttons click handler", () => {
    const fn = jest.fn()
    const r = shallow(<Button onClick={fn}></Button>)
    r.find('button').simulate('click')
    expect(fn.mock.calls.length).toEqual(1)
})

