import './App.css';
import DashBoardProf from './components/prof/DashBoardProf';
import { BrowserRouter , Switch ,Route} from 'react-router-dom';
import './assets/index';
import './assets/index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
      
        <DashBoardProf/>
      
        
      </BrowserRouter>

    </div>
  );
}

export default App;
