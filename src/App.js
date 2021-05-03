import {Switch, Route} from "react-router-dom"
import {UserProvider} from "./context/user"

import Home from "./components/pages/home"
import Panel from "./components/pages/panel"

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/panel" component={Panel} />
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
