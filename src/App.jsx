import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <Router>
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
