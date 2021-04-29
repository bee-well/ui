import Container from "../../../components/molecules/container/container";
import Row from "../../molecules/row/row";
import ProfileCard from "../../organisms/cards/profile-card/profile-card";
import WelcomeCard from "../../organisms/cards/welcome-card/welcome-card";
import ReportCard from "../../../components/organisms/cards/reports-card/reports-card";
import StatisticCard from "../../organisms/cards/statistics-card/statistics-card";
import ReportsAmountCard from "../../../components/organisms/cards/reports-amount-card/reports-amount-card"
import "./panel.scss";

const Panel = ({}) => {

  const generateSampleData = () => {
    const date = new Date()
    return {
        happiness: Math.floor(Math.random() * 90) + 10,
        dataPoints: [
            { mood: Math.floor(Math.random() * 5) + 1, date: date },
            { mood: Math.floor(Math.random() * 5) + 1, date: new Date(date).setDate(date.getDate() + 1) },
            { mood: Math.floor(Math.random() * 5) + 1, date: new Date(date).setDate(date.getDate() + 2) },
            { mood: Math.floor(Math.random() * 5) + 1, date: new Date(date).setDate(date.getDate() + 3) },
            { mood: Math.floor(Math.random() * 5) + 1, date: new Date(date).setDate(date.getDate() + 4) },
            { mood: Math.floor(Math.random() * 5) + 1, date: new Date(date).setDate(date.getDate() + 5) },
        ]
    }
}
  return (
    <Container>
      <Row>
        <ProfileCard email = {'tobiasgustaverik@icloud.com'} name = {'Tobias Andersson'}/>
        <WelcomeCard />
      </Row>
      <Row>
        <ReportCard />
      </Row>
      <Row>
        <StatisticCard data = {generateSampleData()}/> <ReportsAmountCard />
      </Row>
    </Container>
  );
};

export default Panel;
