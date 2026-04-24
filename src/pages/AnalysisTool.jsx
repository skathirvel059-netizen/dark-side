import { useState } from 'react';
import { analyzeTraits, predefinedTraits } from '../data/psychologyData';
import { Brain, RefreshCw, AlertCircle } from 'lucide-react';
import './AnalysisTool.css';

const AnalysisTool = () => {
  const [selectedTraits, setSelectedTraits] = useState([]);
  const [customTrait, setCustomTrait] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const toggleTrait = (trait) => {
    if (selectedTraits.includes(trait)) {
      setSelectedTraits(selectedTraits.filter(t => t !== trait));
    } else {
      if (selectedTraits.length < 5) {
        setSelectedTraits([...selectedTraits, trait]);
      }
    }
  };

  const addCustomTrait = (e) => {
    e.preventDefault();
    if (customTrait.trim() && !selectedTraits.includes(customTrait.trim()) && selectedTraits.length < 5) {
      setSelectedTraits([...selectedTraits, customTrait.trim()]);
      setCustomTrait('');
    }
  };

  const handleAnalyze = () => {
    if (selectedTraits.length === 0) return;
    
    setIsAnalyzing(true);
    // Simulate AI processing delay
    setTimeout(() => {
      const result = analyzeTraits(selectedTraits);
      setAnalysis(result);
      setIsAnalyzing(false);
    }, 1500);
  };

  const resetAnalysis = () => {
    setAnalysis(null);
    setSelectedTraits([]);
  };

  return (
    <div className="analysis-page container page-section animate-fade-in">
      <div className="section-header text-center">
        <h2>Personality <span className="text-gradient">Analysis Tool</span></h2>
        <p className="text-secondary max-w-2xl mx-auto">
          Select up to 5 observable behaviors or traits. Our system will provide balanced, 
          science-backed interpretations based on psychological principles.
        </p>
      </div>

      {!analysis ? (
        <div className="analysis-input-section glass-panel">
          <div className="trait-selector">
            <h3 className="mb-4">Select Traits ({selectedTraits.length}/5)</h3>
            <div className="traits-grid">
              {predefinedTraits.map(trait => (
                <button
                  key={trait}
                  className={`trait-chip ${selectedTraits.includes(trait) ? 'selected' : ''}`}
                  onClick={() => toggleTrait(trait)}
                >
                  {trait}
                </button>
              ))}
            </div>

            <div className="divider"><span>OR</span></div>

            <form onSubmit={addCustomTrait} className="custom-trait-form input-group">
              <label className="input-label">Add a custom observation:</label>
              <div className="flex-row">
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g., bites nails when nervous"
                  value={customTrait}
                  onChange={(e) => setCustomTrait(e.target.value)}
                  disabled={selectedTraits.length >= 5}
                />
                <button type="submit" className="btn btn-secondary" disabled={selectedTraits.length >= 5 || !customTrait.trim()}>
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="analysis-actions">
            <button 
              className="btn btn-primary w-full" 
              onClick={handleAnalyze}
              disabled={selectedTraits.length === 0 || isAnalyzing}
            >
              {isAnalyzing ? (
                <><RefreshCw className="spin" size={20} /> Analyzing Patterns...</>
              ) : (
                <><Brain size={20} /> Generate Psychological Profile</>
              )}
            </button>
          </div>
        </div>
      ) : (
        <div className="analysis-results animate-fade-in">
          <div className="results-header glass-panel flex-row justify-between align-center mb-4">
            <div>
              <h3>Analysis Results</h3>
              <p className="text-secondary">Based on: {selectedTraits.join(', ')}</p>
            </div>
            <button className="btn btn-secondary" onClick={resetAnalysis}>
              <RefreshCw size={18} /> New Analysis
            </button>
          </div>

          <div className="results-grid">
            <div className="result-card glass-panel border-top-purple">
              <h4 className="text-gradient">Personality Tendencies</h4>
              {analysis.personality.map((item, i) => (
                <div key={i} className="insight-item">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="result-card glass-panel border-top-cyan">
              <h4 className="text-gradient-alt">Communication Style</h4>
              {analysis.communication.map((item, i) => (
                <div key={i} className="insight-item">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            {analysis.motivations.length > 0 && (
              <div className="result-card glass-panel border-top-emerald">
                <h4 style={{ color: 'var(--accent-tertiary)' }}>Possible Motivations</h4>
                {analysis.motivations.map((item, i) => (
                  <div key={i} className="insight-item">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {analysis.caution.length > 0 && (
            <div className="caution-banner glass-panel mt-4 flex-row">
              <AlertCircle size={24} className="warning-icon shrink-0" />
              <div>
                <h5 style={{ color: '#fbbf24' }}>Important Note</h5>
                <ul className="caution-list">
                  {analysis.caution.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AnalysisTool;
