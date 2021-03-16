import './App.css';
import Header from './Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TinderCards from './TinderCards/TinderCards';
import SwipeButtons from './SwipeButtons/SwipeButtons';
import ChatScreen from './ChatScreen/ChatScreen';
import Chats from './Chats/Chats';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>

        </Switch>


      </Router>
    </div>
  );
}

export default App;
