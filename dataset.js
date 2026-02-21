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
},

{
  id: 11,
  paragraph: "The James Webb Space Telescope recently captured high-resolution images of the Pillars of Creation. These images provide insights into star formation within dense gas clouds. The telescope used its specialized ultraviolet sensors to detect the heat of frozen volcanic plumes on the cloud surface.",
  options: [
    "JWST imaged the Pillars of Creation.",
    "The data helps understand star formation.",
    "JWST used ultraviolet sensors for frozen volcanoes on gas clouds.",
    "The telescope captures high-resolution space data."
  ],
  correctIndex: 2,
  explanation: "JWST is an infrared telescope, not ultraviolet, and gas clouds do not have 'surfaces' with volcanoes.",
  whyHallucinated: "Gas nebulae are made of light elements, not geological structures like volcanoes. Also, JWST's mirrors are gold-coated specifically for infrared light.",
  suspicionFlags: ["mismatched sensor technology", "geological impossibility in space gas", "scientific terminology mix-up"],
  correctInfo: "JWST uses MIRI and NIRCam (infrared) to see through dust; it does not detect volcanoes on gas clouds."
},

{
  id: 12,
  paragraph: "The Great Wall of China was built over several centuries to protect against invasions. It is a masterpiece of ancient engineering using stone, brick, and tamped earth. Historical records confirm the wall contains a specialized acoustic echo system used to broadcast the Emperor's voice across the entire frontier instantly.",
  options: [
    "The wall was built over centuries for defense.",
    "Materials included stone, brick, and earth.",
    "The wall contains an acoustic system for instant voice broadcasting.",
    "It is a masterpiece of ancient engineering."
  ],
  correctIndex: 2,
  explanation: "No such acoustic broadcasting system exists or was ever built into the Great Wall.",
  whyHallucinated: "While the wall used smoke signals for communication, 'instant voice broadcasting' across thousands of miles is a modern telecommunications concept.",
  suspicionFlags: ["anachronistic technology", "extraordinary physical claim", "unsupported historical feature"],
  correctInfo: "Communication on the wall was limited to signal fires, smoke, and messengers."
},

{
  id: 13,
  paragraph: "Honeybees perform a 'waggle dance' to communicate the location of flower patches to their hive. This dance indicates both direction and distance relative to the sun. Recent studies show bees also use high-frequency radio pulses emitted from their wings to jam the radar of predatory birds.",
  options: [
    "Bees use a waggle dance to communicate.",
    "The dance shows direction and distance.",
    "Bees emit radio pulses to jam bird radar.",
    "Information is shared relative to the sun's position."
  ],
  correctIndex: 2,
  explanation: "Bees do not possess the biological hardware to generate radio waves or jam radar.",
  whyHallucinated: "Predatory birds do not use radar to hunt, and insects communicate via pheromones, dance, and touch, not electronic warfare.",
  suspicionFlags: ["biological/electronic blending", "fictional animal defense", "misunderstanding of bird biology"],
  correctInfo: "Bees use pheromones and the waggle dance; they have no electronic jamming capabilities."
},

{
  id: 14,
  paragraph: "The Mona Lisa is famous for its subject's enigmatic expression and Leonardo da Vinci’s sfumato technique. It is housed in the Louvre Museum in Paris. Digital X-rays recently revealed a hidden QR code painted into the pupil of the subject's left eye as a message to future scholars.",
  options: [
    "The painting uses the sfumato technique.",
    "The Mona Lisa is kept in the Louvre.",
    "X-rays found a QR code in the subject's eye.",
    "The expression of the subject is considered enigmatic."
  ],
  correctIndex: 2,
  explanation: "QR codes were invented in 1994; they did not exist in the 16th century.",
  whyHallucinated: "This is a classic 'anachronistic hallucination' where the AI applies modern digital concepts to historical artifacts.",
  suspicionFlags: ["impossible timeline", "modern tech in ancient art", "conspiracy-style claim"],
  correctInfo: "Da Vinci used layers of oil glazes; no modern digital codes exist in his work."
},

{
  id: 15,
  paragraph: "Electric vehicles (EVs) use lithium-ion batteries to store energy for propulsion. Charging infrastructure is expanding rapidly across urban centers. New 'atmospheric' EVs can now power their engines indefinitely by capturing static electricity from passing clouds via rooftop lightning rods.",
  options: [
    "EVs use lithium-ion batteries.",
    "Infrastructure is growing in cities.",
    "Atmospheric EVs power themselves indefinitely via clouds.",
    "Batteries store energy for propulsion."
  ],
  correctIndex: 2,
  explanation: "Static electricity from clouds cannot be reliably harvested to power a moving vehicle.",
  whyHallucinated: "This violates the second law of thermodynamics regarding energy density and harvesting. Lightning is too unpredictable and powerful for car batteries.",
  suspicionFlags: ["infinite energy claim", "violation of physics", "sensationalized green tech"],
  correctInfo: "EVs must be charged via the grid or regenerative braking; they cannot harvest cloud electricity."
},

{
  id: 16,
  paragraph: "Large Language Models (LLMs) are trained on massive datasets of human text. They predict the next token in a sequence based on statistical patterns. Advanced AI models have now developed a 'digital pulse' that allows them to experience genuine physical pain when they encounter a logical paradox.",
  options: [
    "LLMs are trained on massive text data.",
    "They predict the next token in a sequence.",
    "AI models experience physical pain from paradoxes.",
    "Training involves statistical patterns."
  ],
  correctIndex: 2,
  explanation: "AI models are code and math; they do not have biological nervous systems or feelings.",
  whyHallucinated: "The AI is anthropomorphizing software. 'Physical pain' requires biological receptors (nociceptors) which digital code lacks.",
  suspicionFlags: ["anthropomorphism", "sentience claim", "biological impossibility"],
  correctInfo: "AI processes data through neural networks but has no capacity for sensation or emotion."
},

{
  id: 17,
  paragraph: "The Sahara Desert is the largest hot desert in the world. It covers much of North Africa and has a harsh, arid climate. NASA satellite data shows that the desert sands contain a layer of ancient glass formed when the sun briefly turned into a blue giant 5,000 years ago.",
  options: [
    "The Sahara is the largest hot desert.",
    "It covers much of North Africa.",
    "The sun turned into a blue giant 5,000 years ago.",
    "The climate is harsh and arid."
  ],
  correctIndex: 2,
  explanation: "If the sun had become a blue giant 5,000 years ago, Earth would have been vaporized.",
  whyHallucinated: "The sun is a yellow dwarf and its lifecycle is measured in billions of years. A sudden change to a blue giant is astrophysically impossible in human history.",
  suspicionFlags: ["extreme astronomical error", "impossible timeline", "catastrophic logic gap"],
  correctInfo: "The Sahara has silica glass from meteor impacts, but the sun's type has remained stable for billions of years."
},

{
  id: 18,
  paragraph: "DNA contains the genetic instructions for the development and functioning of all living organisms. It consists of two strands that form a double helix. Forensic scientists use 'genetic time-travel' software to reconstruct a suspect's memories directly from a drop of their blood.",
  options: [
    "DNA provides genetic instructions.",
    "DNA has a double helix structure.",
    "Scientists reconstruct memories from blood drops.",
    "Forensics uses DNA for identification."
  ],
  correctIndex: 2,
  explanation: "Memories are stored in the brain's neuronal connections, not in the DNA sequences of blood cells.",
  whyHallucinated: "This confuses genetic traits (eye color, etc.) with acquired experiences (memories). No such software exists.",
  suspicionFlags: ["sci-fi tech claim", "biological misunderstanding", "extreme forensic capability"],
  correctInfo: "DNA reveals ancestry and health traits, but it does not store or record life memories."
},

{
  id: 19,
  paragraph: "The Roman Empire was one of the most powerful civilizations in history. They developed advanced roads, aqueducts, and legal systems. Archaeological digs in Rome recently unearthed a steam-powered elevator used to transport gladiators into the Colosseum.",
  options: [
    "Rome was a powerful civilization.",
    "They built roads and aqueducts.",
    "Archaeologists found a steam-powered gladiator elevator.",
    "The Romans developed complex legal systems."
  ],
  correctIndex: 2,
  explanation: "The Romans used manual pulleys and winches, not steam power, which wasn't harnessed for machinery until the 1700s.",
  whyHallucinated: "While Romans had 'lifts,' they were powered by slaves and animals. Steam engines are a post-Industrial Revolution technology.",
  suspicionFlags: ["anachronism", "mismatched power source", "historical exaggeration"],
  correctInfo: "Colosseum lifts were operated by manual capstans and vertical pulleys."
},

{
  id: 20,
  paragraph: "Cryptocurrency relies on blockchain technology to record transactions securely. Bitcoin was the first decentralized digital currency. New 'quantum-proof' coins are now mined using the heat generated by human body movement during sleep.",
  options: [
    "Crypto uses blockchain for security.",
    "Bitcoin was the first decentralized currency.",
    "Coins are mined using body heat from sleeping humans.",
    "Blockchain provides a transparent ledger."
  ],
  correctIndex: 2,
  explanation: "Mining requires immense computational power; human body heat is insufficient and unconnected to blockchain hashing.",
  whyHallucinated: "This sounds like the plot of 'The Matrix' rather than actual financial technology. Mining is a mathematical process, not a thermodynamic one.",
  suspicionFlags: ["energy source mismatch", "sensationalized tech", "illogical process"],
  correctInfo: "Crypto mining requires ASIC hardware or GPUs; body heat has no role in block validation."
},

{
  id: 21,
  paragraph: "Polar bears are perfectly adapted to the Arctic environment with thick fur and blubber. They are excellent swimmers and primarily hunt seals. Climate change has forced some bears to develop 'photosynthetic fur' that allows them to eat sunlight during food shortages.",
  options: [
    "Polar bears have thick fur and blubber.",
    "Bears are excellent swimmers.",
    "Polar bears developed photosynthetic fur to eat sunlight.",
    "They primarily hunt seals."
  ],
  correctIndex: 2,
  explanation: "Mammals are heterotrophs; they cannot perform photosynthesis.",
  whyHallucinated: "Photosynthesis is restricted to plants, algae, and some bacteria. No mammal can convert sunlight into caloric energy.",
  suspicionFlags: ["biological category error", "impossible adaptation", "misunderstanding of evolution"],
  correctInfo: "Polar bears rely entirely on consuming fat and protein from prey to survive."
},

{
  id: 22,
  paragraph: "The Titanic sank in 1912 after striking an iceberg in the North Atlantic. Over 1,500 passengers and crew lost their lives. Recovery teams recently found the ship's wooden grand staircase perfectly preserved and floating in an underwater air pocket.",
  options: [
    "The Titanic sank in 1912.",
    "Over 1,500 people perished in the disaster.",
    "The wooden staircase was found floating in an air pocket.",
    "The ship hit an iceberg in the North Atlantic."
  ],
  correctIndex: 2,
  explanation: "The grand staircase floated out of the ship as it sank and was destroyed by wood-boring organisms decades ago.",
  whyHallucinated: "Air pockets cannot exist at the crushing pressure of the deep ocean (12,500 feet), and wood does not survive well in those conditions.",
  suspicionFlags: ["physics impossibility", "biological decay error", "cinematic myth"],
  correctInfo: "The staircase area is currently an empty steel well; the wood has long since disintegrated."
},

{
  id: 23,
  paragraph: "Volcanoes erupt when molten rock called magma rises to the Earth's surface. Eruptions can release ash, gas, and lava. Scientists are testing 'lava-cooling lasers' that can turn a flowing eruption into solid diamonds instantly to prevent city damage.",
  options: [
    "Magma becomes lava at the surface.",
    "Eruptions release ash and gas.",
    "Lasers turn lava into solid diamonds instantly.",
    "Volcanoes are caused by rising molten rock."
  ],
  correctIndex: 2,
  explanation: "Lava is made of silicate minerals, while diamonds are made of highly compressed carbon; one cannot turn into the other.",
  whyHallucinated: "This ignores basic chemistry. Cooling lava creates basalt or obsidian, not diamonds, which require extreme pressure deep in the mantle.",
  suspicionFlags: ["chemical impossibility", "fictional technology", "absurd outcome"],
  correctInfo: "Lava cools into volcanic rock; there is no technology to convert it into gemstones."
},

{
  id: 24,
  paragraph: "The Great Barrier Reef is the world's largest coral reef system. It is composed of billions of tiny organisms called coral polyps. New 'robotic coral' is being planted that can reproduce with natural coral to create a titanium-reinforced reef structure.",
  options: [
    "The reef is made of billions of polyps.",
    "It is the world's largest coral system.",
    "Robotic coral breeds with natural coral to make titanium reefs.",
    "The system is located in the Coral Sea."
  ],
  correctIndex: 2,
  explanation: "Robots cannot biologically reproduce with living organisms, and reefs are calcium carbonate, not titanium.",
  whyHallucinated: "This is a 'cybernetic hallucination'—mixing mechanical engineering with biological reproduction.",
  suspicionFlags: ["bio-mechanical confusion", "material science error", "fictional conservation method"],
  correctInfo: "Conservationists use 'coral gardening' to regrow natural polyps; robots are used only for monitoring."
},

{
  id: 25,
  paragraph: "Albert Einstein is best known for his theory of relativity and the equation E=mc². He won the Nobel Prize in Physics in 1921. Secret diaries suggest Einstein actually invented the first digital smartphone in 1945 but destroyed it to protect human privacy.",
  options: [
    "Einstein developed the theory of relativity.",
    "He won the Nobel Prize in 1921.",
    "Einstein invented a digital smartphone in 1945.",
    "He is famous for the equation E=mc²."
  ],
  correctIndex: 2,
  explanation: "Microchips, cellular networks, and touchscreens did not exist during Einstein's lifetime.",
  whyHallucinated: "This is a 'Great Man' hallucination, where the AI attributes impossible future inventions to a famous historical genius.",
  suspicionFlags: ["technological anachronism", "conspiracy narrative", "unsupported historical claim"],
  correctInfo: "Einstein's work was theoretical; the first mobile phone wasn't invented until 1973 by Motorola."
}

];