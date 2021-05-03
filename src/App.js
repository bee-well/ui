import {Switch, Route} from "react-router-dom"

import Home from "./components/pages/home"
import Panel from "./components/pages/panel"

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/panel" component={Panel} />
      </Switch>
    </div>
  );
}

export default App;
