import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import './App.css'


function App() {
  return (
    <div className="App">
        <TopBar></TopBar>

        <div className="container">
              <SideBar></SideBar>
              <div className="others">
                 <h2>Other pages</h2>
              </div>
            
        </div>
      
    </div>
  );
}

export default App;
