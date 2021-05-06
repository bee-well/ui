import Container from "../../../components/molecules/container/container";
import Row from "../../molecules/row/row";
import ProfileCard from "../../organisms/cards/profile-card/profile-card";
import WelcomeCard from "../../organisms/cards/welcome-card/welcome-card";
import ReportCard from "../../../components/organisms/cards/reports-card/reports-card";
import StatisticCard from "../../organisms/cards/statistics-card/statistics-card";
import AverageMoodCard from "../../organisms/cards/average-mood-card"
import ReportMoodModal from "../../organisms/modals/report-mood-modal";
import {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import {getUserData} from "../../../api/bee-well"
import "./panel.scss";

import {getStatistics, reportMood} from "../../../api/bee-well"

const Panel = () => {
  const history = useHistory()
  const [reportMoodModalOpen, setReportMoodModalOpen] = useState(false)
  const [todaysStatistics, setTodaysStatistics] = useState({})
  const [user, setUser] = useState({})
  
  const fetchTodaysStatistics = async () => {
    const result = await getStatistics(new Date(), new Date())
    if (result.success) {
      setTodaysStatistics(result.payload)
    } else if (result.code === 401) {
      history.push("/")
    }
  }

  const fetchUserData = async () => {
    const result = await getUserData()
    if (result.success) {
      setUser(result.payload)
    } else if (result.code === 401) {
      history.push("/")
    }
  }

  useEffect(() => {
    fetchTodaysStatistics()
    fetchUserData()
  }, [])

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

  const onReportMood = async (mood, tags) => {
    const result = await reportMood(mood, tags)
    if (result.success) {
      setReportMoodModalOpen(false)
      fetchTodaysStatistics()
    }
  }

  return (
    <div className="panel">
      <ReportMoodModal
        open={reportMoodModalOpen}
        onClose={() => setReportMoodModalOpen(false)}
        tagOptions={generateTagOptions()}
        onReportMood={onReportMood}
      />
      <Container>
        <Row>
          <ProfileCard email={user.email} name ={`${user.firstName} ${user.lastName}`}/>
          <WelcomeCard name={user.firstName} onReportMood={() => setReportMoodModalOpen(true)} />
        </Row>
        <Row>
          <ReportCard reports={todaysStatistics ? todaysStatistics.reportAmount : 0} recommendedReports={12}/>
        </Row>
        <Row>
          <StatisticCard title="Today" data={todaysStatistics}/> 
          <AverageMoodCard averageMood={todaysStatistics ? todaysStatistics.averageMood : 0}/>
        </Row>
      </Container>
    </div>
  );
};

export default Panel;
