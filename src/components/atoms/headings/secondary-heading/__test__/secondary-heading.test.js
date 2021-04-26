import { shallow } from "enzyme"
import SecondaryHeading from '../index'

it("renders the child text", () => {
    const wrapper = shallow(<SecondaryHeading>Test</SecondaryHeading>)
    expect(wrapper.text()).toEqual("Test")
})