import { shallow } from "enzyme"
import Text from '../index'

it("renders without erros", () => {
    shallow(<Text />)
})

it("sets the placeholder to props.placeholder", () => {
    const wrapper = shallow(<Text placeholder="test"/>)
    const el = wrapper.find("input").at(0).props()
    expect(el.placeholder).toEqual("test")
})

it("sets the value to props.text", () => {
    const wrapper = shallow(<Text text="test"/>)
    const el = wrapper.find("input").at(0).props()
    expect(el.value).toEqual("test")
})

it("sets the onChange listener to props.setText and sends new value with it", () => {
    const fn = jest.fn()
    const wrapper = shallow(<Text setText={fn}/>)
    const el = wrapper.find("input").at(0)
    el.simulate("change", {
        target: {
            value: "test2"
        }
    })
    expect(fn.mock.calls.length).toEqual(1)
    expect(fn.mock.calls[0][0]).toEqual("test2")
})
