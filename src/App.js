import logo from './logo.svg';
import './App.css';
import 'animate.css';
import "animate.css/animate.min.css";
import MainComponent from './components/football/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bookmaker app - Under construction...
        </p>                          
      </header>
      <MainComponent /> 
               
    </div>    
  );
}

export default App;
