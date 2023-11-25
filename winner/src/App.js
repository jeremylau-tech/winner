import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing.js';
import CoCo from './pages/coco.js';
import Mission from './pages/mission.js';
import NetWorth from './pages/networth.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Router>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/Coco' element={<CoCo />} />
              <Route path='/Mission' element={<Mission />} />
              <Route path='/NetWorth' element={<NetWorth />} />
            </Routes>
          </Router>
        </p>
      </header>
    </div>
  );
}

export default App;
