import largelogo from './imgs/large-icon.png';
import logo from './imgs/icon.png'; 
import './App.css';
//import Activity from './components/Activity';
//import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo-container'>
          <img src={logo} className='logo-icon' alt='Logo-icon'></img>
        </div>
      </header>
      <div className='app-container'>
        <div className='large-logo-container'>
            <img src={largelogo} className='large-logo-icon' alt='Large-logo-icon'></img>
        </div>
        <div className='principal-list-container'>
          <div className='principal-list'>
            <h1>TO DO:</h1>
            <ActivityList/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
