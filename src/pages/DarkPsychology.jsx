import { ShieldAlert, AlertTriangle, EyeOff, Search } from 'lucide-react';
import './DarkPsychology.css';

const DarkPsychology = () => {
  const tactics = [
    {
      title: 'Gaslighting',
      icon: <EyeOff size={32} className="tactics-icon purple" />,
      description: 'A form of psychological manipulation where a person makes someone question their own memory, perception, or sanity.',
      signs: [
        'They blatantly lie, even when you have proof.',
        'They tell you that you are crazy or too sensitive.',
        'Their actions do not match their words.',
        'They project their own negative behaviors onto you.'
      ],
      defense: 'Keep records of events (journaling), trust your own memory, and seek external validation from trusted friends or professionals.'
    },
    {
      title: 'Love Bombing',
      icon: <Search size={32} className="tactics-icon cyan" />,
      description: 'Overwhelming someone with signs of adoration and attraction to gain control over them.',
      signs: [
        'Excessive flattery and praise very early in the relationship.',
        'Intense pressure for commitment.',
        'Ignoring your boundaries regarding time and space.',
        'Making you feel guilty for spending time with others.'
      ],
      defense: 'Slow down the pace of the relationship, assert strong boundaries, and observe how they react when you say "no".'
    },
    {
      title: 'Triangulation',
      icon: <AlertTriangle size={32} className="tactics-icon emerald" />,
      description: 'Bringing a third person into a conflict or relationship dynamic to create insecurity or division.',
      signs: [
        'Comparing you unfavorably to an ex or a coworker.',
        'Relaying "what others are saying about you" to lower self-esteem.',
        'Using another person to communicate messages instead of doing so directly.'
      ],
      defense: 'Communicate directly with the third party if appropriate, refuse to participate in the comparison, and demand direct communication.'
    }
  ];

  return (
    <div className="dark-psychology-page container page-section animate-fade-in">
      <div className="section-header text-center">
        <ShieldAlert size={48} className="mx-auto mb-4 text-gradient" />
        <h2>Dark <span className="text-gradient">Psychology</span> Awareness</h2>
        <p className="text-secondary max-w-2xl mx-auto">
          Knowledge is the best defense. Learn to recognize common manipulation tactics, 
          understand why they are used, and discover strategies to protect your mental well-being.
        </p>
      </div>

      <div className="tactics-container">
        {tactics.map((tactic, idx) => (
          <div key={idx} className="tactic-card glass-panel">
            <div className="tactic-header">
              {tactic.icon}
              <h3>{tactic.title}</h3>
            </div>
            <p className="tactic-desc">{tactic.description}</p>
            
            <div className="tactic-content-grid">
              <div className="signs-section">
                <h4 className="text-gradient-alt">Signs to Watch For</h4>
                <ul>
                  {tactic.signs.map((sign, i) => (
                    <li key={i}>{sign}</li>
                  ))}
                </ul>
              </div>
              
              <div className="defense-section">
                <h4 style={{ color: 'var(--accent-tertiary)' }}>Defense Strategy</h4>
                <p>{tactic.defense}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="educational-disclaimer glass-panel mt-4 text-center">
        <p className="text-secondary">
          <strong>Note:</strong> Identifying a single behavior does not necessarily mean someone is a malicious manipulator. 
          Look for consistent patterns over time. If you feel unsafe or consistently drained by someone, trust your instincts and seek professional support.
        </p>
      </div>
    </div>
  );
};

export default DarkPsychology;
