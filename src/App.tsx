import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Index from './pages/Index';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
