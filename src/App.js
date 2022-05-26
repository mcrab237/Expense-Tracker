import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path  = "/" element={<HomePage/>} />
      </Routes>
      </Router>
  );
}

export default App;
