import { Route, Routes } from 'react-router-dom';
import FeeSubmission from './pages/FeeSubmission';
import Home from './pages/Home';
import Inquiry from './pages/Inquiry';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/fees' element={<FeeSubmission />}/>
        <Route path='/inquiry' element={<Inquiry />}/>
        <Route path='/registration' element={<Registration />}/>
      </Routes>
    </div>
  );
}

export default App;
