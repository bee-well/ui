import { shallow } from 'enzyme'
import Modal from '../index'

it("renders the child text", () => {
    const wrapper = shallow(<Modal>Test</Modal>)
    expect(wrapper.text()).toEqual("Test")
})

it("maps the onClose function", () => {
    const fn = jest.fn()
    const wrapper = shallow(<Modal onClose={fn}></Modal>)
    wrapper.find(".modal__backdrop").at(0).simulate("click")
    expect(fn.mock.calls.length).toEqual(1)
})

it("sets modal--closed class to modal only if props.open == false", () => {
    let wrapper = shallow(<Modal open={false}></Modal>)
    let el = wrapper.find("div").at(0).props()
    expect(el.className).toEqual("modal modal--closed")

    wrapper = shallow(<Modal open></Modal>)
    el = wrapper.find("div").at(0).props()
    expect(el.className).toEqual("modal ")
})