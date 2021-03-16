import './App.css';
import Header from './Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TinderCards from './TinderCards/TinderCards';
import SwipeButtons from './SwipeButtons/SwipeButtons'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/chat">
            <h1>Im a chat</h1>
          </Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>

        </Switch>


      </Router>
    </div>
  );
}

export default App;
