export const analyzeTraits = (traits) => {
  // A simple rule-based inference engine that returns balanced insights
  const analysis = {
    personality: [],
    communication: [],
    motivations: [],
    caution: []
  };

  const traitSet = new Set(traits.map(t => t.toLowerCase()));

  // 1. "Talks less" / Introversion markers
  if (traitSet.has('talks less') || traitSet.has('quiet') || traitSet.has('reserved')) {
    analysis.personality.push({
      title: "Introverted Processing",
      description: "Often indicates a preference for internal processing. This person likely thinks deeply before speaking and values meaningful conversation over small talk."
    });
    analysis.communication.push({
      title: "Observational Learner",
      description: "They may prefer to observe group dynamics before participating. Give them time to formulate their thoughts without pressure."
    });
  }

  // 2. "Gets angry quickly" / Emotional reactivity
  if (traitSet.has('gets angry quickly') || traitSet.has('reactive') || traitSet.has('hot tempered')) {
    analysis.personality.push({
      title: "High Emotional Reactivity",
      description: "May experience emotions very intensely. This can be tied to high passion, but also high sensitivity to perceived threats or unfairness."
    });
    analysis.motivations.push({
      title: "Need for Control/Respect",
      description: "Quick anger is often a defense mechanism masking underlying feelings of vulnerability, disrespect, or loss of control."
    });
    analysis.caution.push("Ensure boundaries are maintained. Remember that their anger is about their internal state, not necessarily a reflection of your actions.");
  }

  // 3. "Avoids eye contact" / Social anxiety or cognitive load
  if (traitSet.has('avoids eye contact') || traitSet.has('looks away')) {
    analysis.communication.push({
      title: "Cognitive Overload or Discomfort",
      description: "Avoiding eye contact often helps people concentrate on their thoughts. Alternatively, it can indicate social anxiety or submissiveness in a given context."
    });
  }

  // 4. "Highly organized" / Conscientiousness
  if (traitSet.has('highly organized') || traitSet.has('perfectionist') || traitSet.has('detail oriented')) {
    analysis.personality.push({
      title: "High Conscientiousness",
      description: "Likely values structure, reliability, and predictability. They are driven by a desire for competence and order."
    });
    analysis.motivations.push({
      title: "Fear of Failure",
      description: "The intense need for organization might be a coping mechanism to manage anxiety about unpredictability or failure."
    });
  }

  // Fallback if no specific traits matched well
  if (analysis.personality.length === 0) {
    analysis.personality.push({
      title: "Complex Presentation",
      description: "The traits provided suggest a multi-faceted personality. Human behavior is highly contextual and may change depending on the environment and stressors."
    });
  }

  if (analysis.communication.length === 0) {
    analysis.communication.push({
      title: "Context-Dependent Style",
      description: "Their communication style likely adapts to their comfort level with the people around them."
    });
  }

  return analysis;
};

export const predefinedTraits = [
  "Talks less",
  "Gets angry quickly",
  "Avoids eye contact",
  "Highly organized",
  "Interrupts often",
  "People pleaser",
  "Always late",
  "Overthinks decisions",
  "Defensive to feedback",
  "Overly agreeable"
];
