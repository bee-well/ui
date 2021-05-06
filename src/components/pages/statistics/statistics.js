import "./statistics.scss";
import FilterCard from "../../organisms/cards/filter-card/filter-card";
import ReportCard from "../../organisms/cards/reports-amount-card/reports-amount-card";
import DayCard from "../../organisms/cards/day-card/day-card";
import HourCard from "../../organisms/cards/hour-card/hour-card";
import StatisticsCard from "../../organisms/cards/statistics-card/statistics-card";
import Container from "../../../components/molecules/container/container";
import Row from "../../../components/molecules/row/row";
import { getStatistics } from "../../../api/bee-well";
import { useState } from "react";

const Statistics = () => {
  const [statistics, setStatistics] = useState({});

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
        </Row>
      </Container>
    </div>
  );
};

export default Statistics;
