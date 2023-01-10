import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Rockets from './components/rocket';
import Missions from './components/missions';
import Myprofile from './components/myprofile';
import Navbar from './components/Navbar';
import { getRock } from './Redux/rocketSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRock());
  });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </div>
  );
};
export default App;
