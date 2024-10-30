import Home from './Home';
import Navbar from './Navbar';
import Text from './Text';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreateEvent from './CreateEvent';
import MapComponent from './MapComponent';



//css stuff
function App() {
  document.title = 'Descent';
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className = 'content'>
          <Routes>
            <Route exact path = '/' element = {<Home/>}/>
            <Route path = '/text' element = {<Text/>}/>
            <Route path = '/CreateEvent' element = {<CreateEvent/>} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
