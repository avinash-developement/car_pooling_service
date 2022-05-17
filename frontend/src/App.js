import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PublishRide from  './components/PublishRide/PublishRide';
import SearchRide from './components/SearchRide/SearchRide';

function App() {
  return (
    <Router>
        <div >
        <Header />
          <Routes>
            <Route exact path='/search-ride' element={<SearchRide />} />
            <Route exact path='/publish-ride' element={<PublishRide />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
      </div>
      </Router>
  );
}

export default App;
