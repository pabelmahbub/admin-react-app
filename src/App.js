import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home/Home';
import './App.css'


function App() {
  return (
    <div className="App">
        <TopBar></TopBar>

        <div className="container">
              <SideBar></SideBar>
              <Home></Home>
            
        </div>
      
    </div>
  );
}

export default App;
