import { shallow, mount } from "enzyme"
import Password from '../index'

it("renders without erros", () => {
    shallow(<Password />)
})

it("sets the placeholder to props.placeholder", () => {
    const wrapper = shallow(<Password placeholder="test"/>)
    const el = wrapper.find("input").at(0).props()
    expect(el.placeholder).toEqual("test")
})

it("sets the value to props.password", () => {
    const wrapper = shallow(<Password password="test"/>)
    const el = wrapper.find("input").at(0).props()
    expect(el.value).toEqual("test")
})

it("sets the onChange listener to props.setPassword and sends new value with it", () => {
    const fn = jest.fn()
    const wrapper = shallow(<Password setPassword={fn}/>)
    const el = wrapper.find("input").at(0)
    el.simulate("change", {
        target: {
            value: "test2"
        }
    })
    expect(fn.mock.calls.length).toEqual(1)
    expect(fn.mock.calls[0][0]).toEqual("test2")
})
