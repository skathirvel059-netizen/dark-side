import { BookOpen, Search } from 'lucide-react';
import { useState } from 'react';
import './BehaviorLibrary.css';

const BehaviorLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const behaviors = [
    {
      title: "Mirroring",
      category: "Social Dynamics",
      description: "Subconsciously imitating the gestures, speech pattern, or attitude of another person.",
      science: "Driven by 'mirror neurons' in the brain. It is a natural way humans build rapport, show empathy, and create social bonds.",
      example: "You cross your arms, and a few seconds later, the person you're talking to crosses theirs."
    },
    {
      title: "The Halo Effect",
      category: "Cognitive Biases",
      description: "A cognitive bias where our overall impression of a person influences how we feel and think about their character.",
      science: "Our brains use heuristics (mental shortcuts) to make quick judgments. If we perceive someone as physically attractive, we often automatically assume they are also intelligent and kind.",
      example: "Assuming a well-dressed, confident speaker is also a highly competent expert in their field, regardless of actual credentials."
    },
    {
      title: "Confirmation Bias",
      category: "Cognitive Biases",
      description: "The tendency to search for, interpret, favor, and recall information in a way that confirms one's preexisting beliefs or hypotheses.",
      science: "It takes less cognitive effort to assimilate information that fits our existing worldview than to restructure our beliefs. It protects the ego and reduces cognitive dissonance.",
      example: "Ignoring evidence that a favored politician lied, while quickly believing accusations against a politician you dislike."
    },
    {
      title: "Procrastination",
      category: "Self-Regulation",
      description: "The act of delaying or postponing a task or set of tasks.",
      science: "Often not a time-management issue, but an emotional regulation issue. It's a coping mechanism for tasks that cause anxiety, boredom, or self-doubt.",
      example: "Cleaning the entire house instead of starting an important project that you feel unqualified for."
    },
    {
      title: "Defensiveness",
      category: "Communication Patterns",
      description: "Reacting to feedback or criticism with denial, excuses, or counter-attacks.",
      science: "Triggered by the amygdala perceiving a threat to one's ego or self-concept. The brain treats social/emotional threats similarly to physical threats.",
      example: "Responding to 'You missed the deadline' with 'Well, you didn't give me enough information!'"
    }
  ];

  const filteredBehaviors = behaviors.filter(b => 
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(behaviors.map(b => b.category))];

  return (
    <div className="behavior-library-page container page-section animate-fade-in">
      <div className="section-header text-center">
        <BookOpen size={48} className="mx-auto mb-4 text-gradient-alt" />
        <h2>Behavior <span className="text-gradient-alt">Library</span></h2>
        <p className="text-secondary max-w-2xl mx-auto">
          Explore the science behind why we do what we do. From cognitive biases to social dynamics, 
          understand the mechanisms driving human behavior.
        </p>
      </div>

      <div className="search-section glass-panel">
        <div className="search-input-wrapper">
          <Search className="search-icon text-secondary" size={20} />
          <input 
            type="text" 
            className="input-field search-input" 
            placeholder="Search behaviors, categories, or keywords..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="category-tags">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`category-tag ${searchTerm.toLowerCase() === cat.toLowerCase() ? 'active' : ''}`}
              onClick={() => setSearchTerm(cat === searchTerm ? '' : cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="behaviors-grid">
        {filteredBehaviors.length > 0 ? (
          filteredBehaviors.map((behavior, idx) => (
            <div key={idx} className="behavior-card glass-panel">
              <span className="behavior-category">{behavior.category}</span>
              <h3>{behavior.title}</h3>
              <p className="behavior-desc">{behavior.description}</p>
              
              <div className="behavior-details">
                <div className="detail-item">
                  <h4 className="text-gradient">The Science</h4>
                  <p>{behavior.science}</p>
                </div>
                <div className="detail-item">
                  <h4 className="text-gradient-alt">Real World Example</h4>
                  <p>{behavior.example}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results text-center py-8">
            <p className="text-secondary">No behaviors found matching "{searchTerm}".</p>
            <button className="btn btn-secondary mt-4" onClick={() => setSearchTerm('')}>Clear Search</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BehaviorLibrary;
