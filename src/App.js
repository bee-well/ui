import Chart from "./components/molecules/chart"

function App() {
  const data = [
    { mood: 4, reported: "2016-06-12" },
    { mood: 1, reported: "2016-06-16" },
    { mood: 3, reported: "2016-06-17" },
    { mood: 4, reported: "2016-06-19" },
    { mood: 5, reported: "2016-06-20" },
  ]
  return (
    <div className="App">
      <Chart data={data} />
    </div>
  );
}

export default App;
