import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Landing from './pages/landing.js';
import CoCo from './pages/coco.js';
import Mission from './pages/mission.js';
import NetWorth from './pages/networth.js';
import Counter from './pages/Counter.js';
import { database, ref, get } from './utils/index.js';
import { RealtimeData } from './realtimeData/index.js';
import "./App.css";

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const databaseRef = ref(database, 'users');
  //       const snapshot = await get(databaseRef);
  //       const fetchedData = snapshot.val();
  //       console.log('Fetched Data:', fetchedData);
  //       setData(fetchedData);
  //     } catch (error) {
  //       console.error("Error fetching data from Firebase:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <RealtimeData/>
          <Router>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/Coco' element={<CoCo />} />
              <Route path='/Mission' element={<Mission />} />
              <Route path='/Counter' element={<Counter />} />
              <Route path='/NetWorth' element={<NetWorth />} />
            </Routes>
          </Router>
          <div>

          <h1>Firebase Database Example</h1>
        {/* Display the fetched data
        {data && Object.entries(data).map(([userId, value]) => (
          <div key={userId}>
            <p>User ID: {userId}</p>
            <p>Value: {value}</p>
          </div>
        ))} */}

        </div>
        </p>
      </header>
    </div>
  );
}

export default App;
