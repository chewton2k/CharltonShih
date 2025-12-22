import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResearchPage from './pages/ResearchPage';
import ExperiencePage from './pages/ExperiencePage';
import PillPallPage from './pages/PillPallPage';
import UCLADesignPage from './pages/UCLADesignPage';
import BTDTrainingPage from './pages/BTDTrainingPage';
import BruinwalkPage from './pages/BruinwalkPage';
import UCLAClubhousePage from './pages/UCLAClubhousePage';

// Inner component to access useLocation hook
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        } />
        <Route path="/research" element={
          <PageTransition>
            <ResearchPage />
          </PageTransition>
        } />
        <Route path="/experience" element={
          <PageTransition>
            <ExperiencePage />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <AboutPage />
          </PageTransition>
        } />
        <Route path="/projects" element={
          <PageTransition>
            <ProjectsPage />
          </PageTransition>
        } />
        <Route path="/projects/pillpall" element={
          <PageTransition>
            <PillPallPage />
          </PageTransition>
        } />
        <Route path="/projects/ucla-design" element={
          <PageTransition>
            <UCLADesignPage />
          </PageTransition>
        } />
        <Route path="/projects/btd-training" element={
          <PageTransition>
            <BTDTrainingPage />
          </PageTransition>
        } />
        <Route path="/projects/bruinwalk" element={
          <PageTransition>
            <BruinwalkPage />
          </PageTransition>
        } />
        <Route path="/projects/clubhouse" element={
          <PageTransition>
            <UCLAClubhousePage />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <AnimatedRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
