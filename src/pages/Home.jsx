import { Link } from 'react-router-dom';
import { Brain, ShieldAlert, BookOpen, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-content">
          <h1 className="hero-title">
            Decode the Mind.<br />
            <span className="text-gradient">Understand Behavior.</span>
          </h1>
          <p className="hero-subtitle">
            Explore human psychology through scientific lenses. Analyze behaviors, recognize dark psychological patterns, and deepen your understanding of human nature.
          </p>
          <div className="hero-actions">
            <Link to="/analysis" className="btn btn-primary">
              Start Analysis <ArrowRight size={20} />
            </Link>
            <Link to="/behaviors" className="btn btn-secondary">
              Browse Library
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="glass-panel hero-card">
            <Brain size={48} className="text-gradient" style={{ marginBottom: '1rem' }} />
            <h3>Behavioral Insights</h3>
            <p>Input habits and reactions to receive balanced psychological interpretations.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section container page-section">
        <div className="section-header text-center">
          <h2>Platform <span className="text-gradient-alt">Features</span></h2>
          <p className="text-secondary">Discover our comprehensive suite of psychological tools.</p>
        </div>

        <div className="features-grid">
          <Link to="/analysis" className="feature-card glass-panel">
            <div className="feature-icon bg-purple">
              <Brain size={28} />
            </div>
            <h3>Personality Analysis Tool</h3>
            <p>Enter observed traits to generate balanced insights grounded in the Big Five traits and cognitive science.</p>
          </Link>

          <Link to="/dark-psychology" className="feature-card glass-panel">
            <div className="feature-icon bg-red">
              <ShieldAlert size={28} />
            </div>
            <h3>Dark Psychology</h3>
            <p>Learn to recognize and protect yourself from manipulation tactics like gaslighting and emotional control.</p>
          </Link>

          <Link to="/behaviors" className="feature-card glass-panel">
            <div className="feature-icon bg-cyan">
              <BookOpen size={28} />
            </div>
            <h3>Behavior Library</h3>
            <p>A categorized, scientifically backed catalog of common human behaviors and their underlying motivations.</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
