import { shallow } from 'enzyme'
import CircularProgressbar from '../index'

it("passes percentage correctly", () => {
    const wrapper = shallow(<CircularProgressbar percentage={50}/>)
    const el = wrapper.find("div").at(0).childAt(0).props()
    expect(el.value).toEqual(50)
})
