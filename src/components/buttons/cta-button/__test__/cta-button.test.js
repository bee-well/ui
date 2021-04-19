import CtaButton from '../index'
import { shallow } from "enzyme"

it("renders without crashing", () => {
    shallow(<CtaButton />)
})

// TODO: implement test for children rendering

it("maps onClick to the buttons click handler", () => {
    const fn = jest.fn()
    const r = shallow(<CtaButton onClick={fn}></CtaButton>)
    r.find('button').simulate('click')
    expect(fn.mock.calls.length).toEqual(1)
})