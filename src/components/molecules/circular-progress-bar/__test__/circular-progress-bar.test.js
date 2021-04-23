import { shallow } from 'enzyme'
import CircularProgressbar from '../index'
import ApexCharts from "react-apexcharts"

it("passes percentage correctly", () => {
    const wrapper = shallow(<CircularProgressbar percentage={50}/>)
    const el = wrapper.find(ApexCharts).props()
    expect(el.series[0]).toEqual(50)
})
