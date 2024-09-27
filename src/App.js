import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TeamProfile from './pages/TeamProfile';
import ProjectShowcase from './pages/ProjectShowcase';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<TeamProfile />} />
          <Route path="/projects" element={<ProjectShowcase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
