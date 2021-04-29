import ReportMoodModal from "./components/organisms/modals/report-mood-modal";

function App() {
  return (
    <div className="App">
      <ReportMoodModal open tagOptions={["happy", "horney", "in need of cock"]}/>
    </div>
  );
}

export default App;
