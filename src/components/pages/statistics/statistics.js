import "./statistics.scss";
import FilterCard from "../../organisms/cards/filter-card";
import ReportCard from "../../organisms/cards/reports-amount-card";
import DayCard from "../../organisms/cards/day-card";
import HourCard from "../../organisms/cards/hour-card";
import StatisticsCard from "../../organisms/cards/statistics-card";
import AverageMoodCard from "../../organisms/cards/average-mood-card"
import Container from "../../../components/molecules/container";
import Row from "../../../components/molecules/row";
import useApi from "../../../api/bee-well";
import { useState, useEffect } from "react";
import {useUserContext} from "../../../context/user"
import {useHistory} from "react-router-dom"

const Statistics = () => {
  const history = useHistory()
  const [statistics, setStatistics] = useState({});
  const {getStatistics} = useApi()
  const [user, _] = useUserContext()

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
  })

  const onFilter = async (from, to) => {
    const response = await getStatistics(from, to);
    if (response.success) {
      setStatistics(response.payload);
    } else {
      alert("Could not get statistics data.");
    }
  };

  const integerToWeekday = (day) => {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return weekdays[day]
  }

  return (
    <div className="statistics">
      <Container>
        <Row>
          <FilterCard onFilter={onFilter}></FilterCard>
        </Row>
        <Row>
          <ReportCard counter={statistics.reportAmount} />
          <DayCard weekday={integerToWeekday(statistics.bestWeekDay)} />
          <HourCard hours={statistics.bestTime} />
        </Row>
        <Row>
          <StatisticsCard title="Overview" data={statistics} />
          <AverageMoodCard averageMood={statistics.averageMood}/>
        </Row>
      </Container>
    </div>
  );
};

export default Statistics;
