import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AnalysisTool from './pages/AnalysisTool';
import DarkPsychology from './pages/DarkPsychology';
import BehaviorLibrary from './pages/BehaviorLibrary';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content" style={{ minHeight: 'calc(100vh - 140px)', paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<AnalysisTool />} />
          <Route path="/dark-psychology" element={<DarkPsychology />} />
          <Route path="/behaviors" element={<BehaviorLibrary />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
