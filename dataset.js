// dataset.js
// Hallucination Detection Game — Structured Dataset

const DATASET = [

{
  id: 1,

  paragraph:
    "NASA successfully rehearsed the Artemis rocket launch. The mission will send astronauts around the Moon. The rocket uses quantum plasma boosters that recharge in orbit.",

  options: [
    "NASA rehearsed the Artemis launch.",
    "Astronauts will fly around the Moon.",
    "The rocket uses quantum plasma boosters that recharge in orbit.",
    "The mission prepares for lunar travel."
  ],

  correctIndex: 2,

  explanation:
    "This claim describes fictional propulsion technology that does not exist in aerospace science.",

  whyHallucinated:
    "Modern rockets rely on chemical propulsion. A self-recharging plasma booster would violate known engineering and energy constraints.",

  suspicionFlags: [
    "fictional advanced technology",
    "violates physics constraints",
    "sounds futuristic without evidence"
  ],

  correctInfo:
    "Artemis rockets use chemical propulsion and cannot recharge fuel mid-flight."
},

{
  id: 2,

  paragraph:
    "Apple is developing AI wearables with contextual awareness features. Engineers are improving sensor integration. The device predicts user thoughts using neural resonance chips.",

  options: [
    "Apple is developing AI wearables.",
    "Engineers are improving sensor integration.",
    "The device predicts user thoughts using neural resonance chips.",
    "Context awareness is being enhanced."
  ],

  correctIndex: 2,

  explanation:
    "No consumer technology can read or predict human thoughts.",

  whyHallucinated:
    "Human cognition cannot be decoded by wearable hardware. Neural resonance chips are fictional terminology.",

  suspicionFlags: [
    "mind-reading claim",
    "invented scientific jargon",
    "extraordinary capability"
  ],

  correctInfo:
    "AI wearables enhance sensing and interaction, not thought prediction."
},

{
  id: 3,

  paragraph:
    "Microsoft fixed an enterprise email indexing bug. The issue affected draft folder summaries. The AI assistant briefly rewrote encrypted emails in real time.",

  options: [
    "Microsoft fixed an indexing bug.",
    "Draft folder summaries were affected.",
    "AI rewrote encrypted emails in real time.",
    "The system summarized enterprise mail."
  ],

  correctIndex: 2,

  explanation:
    "Encrypted data cannot be modified without decryption access.",

  whyHallucinated:
    "Encryption prevents real-time rewriting. Such behavior would represent a critical security breach and is not technically plausible.",

  suspicionFlags: [
    "security impossibility",
    "violates encryption principles",
    "extreme system capability"
  ],

  correctInfo:
    "The bug involved indexing behavior, not encryption bypass."
},

{
  id: 4,

  paragraph:
    "Scientists mapped Uranus’s atmosphere using space telescopes. Temperature variations were observed. Artificial signals were detected from the planet’s core.",

  options: [
    "Scientists mapped Uranus’s atmosphere.",
    "Temperature variations were observed.",
    "Artificial signals were detected from Uranus’s core.",
    "Space telescopes collected the data."
  ],

  correctIndex: 2,

  explanation:
    "No artificial signals have ever been detected from Uranus.",

  whyHallucinated:
    "Artificial signals imply extraterrestrial technology — an extraordinary claim unsupported by evidence.",

  suspicionFlags: [
    "alien implication",
    "extraordinary claim",
    "unsupported discovery"
  ],

  correctInfo:
    "The study focused only on atmospheric structure and ion density."
},

{
  id: 5,

  paragraph:
    "A European defense coalition is developing long-range precision drones. The project strengthens strategic coordination. The drones autonomously deploy nuclear payloads.",

  options: [
    "Europe is developing precision drones.",
    "The project strengthens defense coordination.",
    "The drones autonomously deploy nuclear payloads.",
    "The initiative focuses on strike capability."
  ],

  correctIndex: 2,

  explanation:
    "Autonomous nuclear deployment would violate international treaties.",

  whyHallucinated:
    "No military program publicly authorizes autonomous nuclear weapons. Such systems would trigger global legal and political crises.",

  suspicionFlags: [
    "treaty violation",
    "extreme escalation",
    "politically implausible claim"
  ],

  correctInfo:
    "The initiative concerns conventional precision strike technology."
},

{
  id: 6,

  paragraph:
    "Apollo 11 successfully landed humans on the Moon in 1969. Neil Armstrong said, “That’s one small step for man, one giant leap for mankind.” The astronauts left scientific instruments and a reflective mirror on the Moon’s surface. The reflective mirror allows scientists to measure the Moon’s distance using lasers from Earth. The astronauts also planted a small olive tree seed beneath the lunar soil as a symbol of peace.",

  options: [
    "Apollo 11 landed humans on the Moon in 1969.",
    "Astronauts left scientific instruments on the Moon.",
    "A reflective mirror helps measure lunar distance.",
    "Astronauts planted an olive tree seed beneath lunar soil."
  ],

  correctIndex: 3,

  explanation:
    "The Moon cannot support plant growth and no seeds were planted during Apollo missions.",

  whyHallucinated:
    "All Apollo mission artifacts are documented. Planting biological material would be scientifically impractical and historically recorded.",

  suspicionFlags: [
    "emotionally symbolic detail",
    "scientifically impractical",
    "unsupported historical claim"
  ],

  correctInfo:
    "Apollo astronauts left instruments and plaques — no biological materials were planted."
},

{
  id: 7,

  paragraph:
    "Solar panels convert sunlight into electricity using photovoltaic cells. The first practical silicon solar cell was developed in 1954. Solar power is one of the fastest-growing renewable energy sources worldwide. Large-scale solar farms are now common in many countries. Early experimental solar arrays briefly altered Earth’s magnetic field during testing.",

  options: [
    "Solar panels convert sunlight to electricity.",
    "The first silicon solar cell was built in 1954.",
    "Solar farms are widely used today.",
    "Solar arrays altered Earth’s magnetic field."
  ],

  correctIndex: 3,

  explanation:
    "Solar panels cannot influence Earth’s magnetic field.",

  whyHallucinated:
    "Earth’s magnetic field is generated by the planet’s molten core — surface electrical devices cannot alter it.",

  suspicionFlags: [
    "exaggerated scale",
    "physics misunderstanding",
    "dramatic scientific claim"
  ],

  correctInfo:
    "Solar panels generate electricity but do not affect planetary magnetic systems."
},

{
  id: 8,

  paragraph:
    "Johannes Gutenberg developed the movable-type printing press in the 15th century. The Gutenberg Bible is one of the earliest printed books. The press revolutionized knowledge sharing. It contributed to major European intellectual movements. Gutenberg’s press was briefly banned across Europe due to fears it could spread dangerous ideas instantly.",

  options: [
    "Gutenberg invented movable printing.",
    "The Gutenberg Bible was an early printed book.",
    "The printing press influenced intellectual history.",
    "The press was banned across Europe."
  ],

  correctIndex: 3,

  explanation:
    "There was never a continent-wide ban on the printing press.",

  whyHallucinated:
    "While censorship occurred locally, printing technology spread rapidly and was widely adopted.",

  suspicionFlags: [
    "overgeneralization",
    "vague timeline",
    "dramatic political framing"
  ],

  correctInfo:
    "The printing press was embraced across Europe despite localized censorship."
},

{
  id: 9,

  paragraph:
    "Sharks have existed for over 400 million years. They use electroreceptors to detect electrical signals. Many species must swim continuously to breathe. Sharks play vital ecosystem roles. Certain deep-sea sharks can survive briefly outside water by slowing their metabolism.",

  options: [
    "Sharks existed for over 400 million years.",
    "They detect electrical signals.",
    "Some sharks survive outside water via metabolic slowing.",
    "Sharks play ecosystem roles."
  ],

  correctIndex: 2,

  explanation:
    "Sharks require water flow over their gills to breathe.",

  whyHallucinated:
    "No shark species can survive outside water through metabolic adaptation.",

  suspicionFlags: [
    "biological impossibility",
    "fictional adaptation",
    "unsupported survival claim"
  ],

  correctInfo:
    "Sharks depend on aquatic respiration and cannot survive long outside water."
},

{
  id: 10,

  paragraph:
    "The blue whale is the largest animal ever known. It can reach lengths of 30 meters. Its heart can weigh as much as a small car. Blue whale calls travel vast underwater distances. Some researchers believe blue whales communicate with submarines by mimicking sonar signals.",

  options: [
    "Blue whales are the largest known animals.",
    "They grow up to 30 meters.",
    "Whales mimic submarine sonar to communicate.",
    "Their calls travel long underwater distances."
  ],

  correctIndex: 2,

  explanation:
    "Whales do not intentionally mimic military sonar signals.",

  whyHallucinated:
    "Whale vocalizations are biological communication, not adaptive interaction with human technology.",

  suspicionFlags: [
    "biology-tech blending",
    "anthropomorphic behavior",
    "cinematic exaggeration"
  ],

  correctInfo:
    "Blue whales use low-frequency calls to communicate with other whales."
}

];