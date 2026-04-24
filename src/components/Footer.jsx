import { ShieldAlert } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-nav">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3 className="text-gradient">PsycheSight</h3>
          <p className="footer-tagline">Decoding human behavior through science.</p>
        </div>
        
        <div className="ethical-disclaimer glass-panel">
          <div className="disclaimer-header">
            <ShieldAlert size={20} className="warning-icon" />
            <h4>Ethical Disclaimer</h4>
          </div>
          <p>
            The insights and analyses provided by this platform are for educational and self-reflection purposes only. 
            They are <strong>not</strong> medical or clinical diagnoses. Human behavior is complex and contextual. 
            Do not use this tool to judge, label, or harm others. If you or someone you know is in distress, 
            please consult a licensed mental health professional.
          </p>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PsycheSight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
