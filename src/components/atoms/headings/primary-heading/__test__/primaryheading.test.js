import { shallow } from "enzyme"
import PrimaryHeading from '../index'

it("renders the child text", () => {
    const wrapper = shallow(<PrimaryHeading>Test</PrimaryHeading>)
    expect(wrapper.text()).toEqual("Test")
})