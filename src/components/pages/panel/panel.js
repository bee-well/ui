import Container from "../../../components/molecules/container/container";
import Row from "../../molecules/row/row";
import ProfileCard from "../../organisms/cards/profile-card/profile-card";
import WelcomeCard from "../../organisms/cards/welcome-card/welcome-card";
import ReportCard from "../../../components/organisms/cards/reports-card/reports-card";
import StatisticCard from "../../organisms/cards/statistics-card/statistics-card";
import ReportsAmountCard from "../../../components/organisms/cards/reports-amount-card/reports-amount-card"
import ReportMoodModal from "../../organisms/modals/report-mood-modal";
import {useState} from "react"
import "./panel.scss";

const Panel = () => {
  const [reportMoodModalOpen, setReportMoodModalOpen] = useState(false)

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

  const generateTagOptions = () => {
    const tagOptions = new Map();
    tagOptions.set(1, ["sad", "worried", "depressed", "anxious", "stressed", "sensitive"])
    tagOptions.set(2, ["wondering", "pondering", "anxios", "worried", "on edge","tired"])
    tagOptions.set(3, ["soft", "neutral", "stressless", "okay", "fine"])
    tagOptions.set(4, ["indifferent", "relaxed", "mellow", "good day", "fun"])
    tagOptions.set(5, ["happy", "excited", "joyfull", "expectant", "lucky", "dancing"])
    return tagOptions
  }

  return (
    <div className="panel">
      <ReportMoodModal
        open={reportMoodModalOpen}
        onClose={() => setReportMoodModalOpen(false)}
        tagOptions={generateTagOptions()}
      />
      <Container>
        <Row>
          <ProfileCard email={'info@rasmusnilsson.se'} name = {'Erik Rasmus Nilsson'}/>
          <WelcomeCard name="Rasmus" onReportMood={() => setReportMoodModalOpen(true)} />
        </Row>
        <Row>
          <ReportCard reports={4} recommendedReports={12}/>
        </Row>
        <Row>
          <StatisticCard data={generateSampleData()}/> <ReportsAmountCard />
        </Row>
      </Container>
    </div>
  );
};

export default Panel;
