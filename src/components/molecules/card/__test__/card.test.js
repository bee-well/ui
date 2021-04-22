import { shallow } from 'enzyme'
import Card from '../index'

it("renders the child text", () => {
    const wrapper = shallow(<Card>Test</Card>)
    expect(wrapper.text()).toEqual("Test")
})

it("sets custom classNames to the card wrapper", () => {
    const wrapper = shallow(<Card className="test"/>)
    const el = wrapper.find("div").at(0).props()
    expect(el.className).toEqual("card test")
})
