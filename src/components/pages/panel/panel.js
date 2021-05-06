import Container from "../../../components/molecules/container/container";
import Row from "../../molecules/row/row";
import ProfileCard from "../../organisms/cards/profile-card/profile-card";
import WelcomeCard from "../../organisms/cards/welcome-card/welcome-card";
import ReportCard from "../../../components/organisms/cards/reports-card/reports-card";
import StatisticCard from "../../organisms/cards/statistics-card/statistics-card";
import ReportsAmountCard from "../../../components/organisms/cards/reports-amount-card/reports-amount-card"
import ReportMoodModal from "../../organisms/modals/report-mood-modal";
import {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import "./panel.scss";
import useApi from "../../../api/bee-well"
import {useUserContext} from "../../../context/user"

const Panel = () => {
  const history = useHistory()
  const [reportMoodModalOpen, setReportMoodModalOpen] = useState(false)
  const [todaysStatistics, setTodaysStatistics] = useState({})
  const [userData, setUserData] = useState({})
  const { getStatistics, getUserData, reportMood } = useApi()
  const [user, setUser] = useUserContext()

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
      setUserData(result.payload)
    } else if (result.code === 401) {
      history.push("/")
    }
  }

  useEffect(() => {
    if (!user) {
      history.push("/")
      return
    }
    fetchTodaysStatistics()
    fetchUserData()
  }, [])

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

  const onSignOut = () => {
    setUser(null)
    history.push("/")
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
          <ProfileCard email={userData.email} name ={`${userData.firstName} ${userData.lastName}`} onSignOut={onSignOut}/>
          <WelcomeCard name={userData.firstName} happiness={todaysStatistics ? todaysStatistics.happiness : null} onReportMood={() => setReportMoodModalOpen(true)} />
        </Row>
        <Row>
          <ReportCard reports={todaysStatistics ? todaysStatistics.reportAmount : 0} recommendedReports={12}/>
        </Row>
        <Row>
          <StatisticCard title="Today" data={todaysStatistics}/> 
          <ReportsAmountCard counter={todaysStatistics ? todaysStatistics.reportAmount : 0}/>
        </Row>
      </Container>
    </div>
  );
};

export default Panel;
