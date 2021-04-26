import Card from "./components/organisms/cards/statistics-card"

function App() {
  const data = {
    happiness: 45,
    dataPoints: [
      { mood: 4, reported: "2016-06-12" },
      { mood: 1, reported: "2016-06-16" },
      { mood: 3, reported: "2016-06-17" },
      { mood: 4, reported: "2016-06-19" },
      { mood: 5, reported: "2016-06-20" },
      { mood: 4, reported: "2016-06-21" },
      { mood: 3, reported: "2016-06-22" },
      { mood: 5, reported: "2016-06-23" },
    ]
  }
  return (
    <div className="App">
      <Card data={data} title="Today" />
    </div>
  );
}

export default App;
