import {Switch, Route} from "react-router-dom"
import {UserProvider} from "./context/user"
import Home from "./components/pages/home"
import Panel from "./components/pages/panel"
import Statistics from './components/pages/statistics'

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/panel" component={Panel} />
          <Route exact path="/statistics" component={Statistics} />
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
