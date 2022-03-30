import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home/Home';
import UserList from "./pages/UserList/UserList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'


function App() {
  return (
    <Router>
    <TopBar />
    <div className="container">
      <SideBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <UserList />
        </Route>
       
      </Switch>
    </div>
  </Router>
  );
}

export default App;
