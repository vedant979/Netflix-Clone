import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { SignUp } from './pages/SignUp/SignUp';
import { Navbar } from './components/Navbar/Navbar';
import  {AllRoutes}  from "./AllRoutes"

function App() {
  return (

      <div className="App">
        <Router>
          <AllRoutes/>        
        </Router>
      </div>

  );
}

export default App;
