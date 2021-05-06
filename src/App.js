import {Switch, Route} from "react-router-dom"
import Home from "./components/pages/home"
import Panel from "./components/pages/panel"
import Statistics from './components/pages/statistics/statistics'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/panel" component={Panel} />
        <Route exact path ="/statistics" component={Statistics}/> 
      </Switch>
    </div>
  );
}

export default App;
