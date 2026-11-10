export interface EquipmentItem {
  id: string;
  name: string;
  category: 'cardio' | 'strength' | 'functional' | 'legs';
  categoryLabel: string;
  description: string;
  targetMuscle: string;
  workoutPurpose: string;
  branchId: 'op-road' | 'fatehgunj';
  branchName: string;
  image: string;
  alt: string;
  specs: string[];
}

export interface LocationBranch {
  id: 'op-road' | 'fatehgunj';
  name: string;
  city: string;
  locality: string;
  badge: string;
  isFlagship: boolean;
  address: string;
  contactNumber: string;
  contactNumberFormatted: string;
  whatsappUrl: string;
  hoursSummary: string;
  highlights: string;
  photo: string;
  photoAlt: string;
  googleMapsUrl: string;
  timings: {
    day: string;
    hours: string;
  }[];
}

export interface FounderProfile {
  id: string;
  name: string;
  role: string;
  badgeLabel: string;
  experience: string;
  bio: string;
  quote: string;
  certifications: string[];
  keyHighlights: string[];
  image: string;
  alt: string;
  instagramHandle: string;
  instagramUrl: string;
  branchName: string;
}

export interface TrainerProfile {
  id: string;
  name: string;
  role: string;
  badgeLabel: string;
  isSeniorTrainer?: boolean;
  experience: string;
  qualification?: string;
  bio: string;
  certifications: string[];
  image: string;
  alt: string;
  instagramHandle: string;
  instagramUrl: string;
  branchName: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  /** Body weight before the journey, in kg. */
  beforeKg: number;
  /** Body weight after the journey, in kg. */
  afterKg: number;
  /** Ready-made transformation graphic (before / after). */
  image: string;
  alt: string;
}

export const BRAND_ASSETS = {
  logo: '/assets/aistudio/image_1ee5e714.png',
  heroBg: '/assets/aistudio/IMG_9415_47bd5aea.webp',
  // Default primary contact (Fatehgunj)
  defaultPhone: '6354661053',
  defaultPhoneFormatted: '+91 6354661053',
  // OP Road branch specific
  opRoadPhone: '6354661053',
  opRoadPhoneFormatted: '+91 6354661053',
  // Fatehgunj branch specific
  fatehgunPhone: '6354661053',
  fatehgunPhoneFormatted: '+91 6354661053',
  instagramUrl: 'https://www.instagram.com/fitxfreakgym/',
  instagramHandle: '@fitxfreakgym',
  youtubeUrl: 'https://youtube.com/@fitxfreak',
  facebookUrl: 'https://facebook.com/fitxfreakvadodara',
};

export const WHY_US_FEATURES = [
  {
    icon: 'fitness_center',
    title: 'Olympic & Imported Equipment',
    description:
      'Vadodara’s highest-grade biomechanical machines, heavy calibrated dumbbells, and competition lifting platforms across OP Road and Fatehgunj.',
  },
  {
    icon: 'verified',
    title: 'Certified Personal Trainers',
    description:
      'Led by Founder Irfan Shaikh and Senior Trainer Shehab Pathan (15 Yrs Exp), our certified coaching team builds a training plan around your goals.',
  },
  {
    icon: 'bolt',
    title: 'Luxury Obsidian Atmosphere',
    description:
      'Acoustically tuned sound systems, neon adrenaline lighting, and a high-energy workout environment engineered for intense beast focus.',
  },
  {
    icon: 'schedule',
    title: 'Flexible Everyday Timings',
    description:
      'Early morning 06:00 AM to 11:00 PM late evening access so you can train whenever your busy schedule permits.',
  },
  {
    icon: 'group',
    title: 'Custom Transformation Programs',
    description:
      'Targeted personalized tracks for fat loss, muscle hypertrophy, powerlifting, functional HIIT, and strength building.',
  },
  {
    icon: 'sanitizer',
    title: 'Ultra-Hygienic & Air Conditioned',
    description:
      'Hospital-grade air filtration, continuous sanitization protocols, luxury shower facilities, and pristine workout floors across both clubs.',
  },
];

export const LOCATIONS: LocationBranch[] = [
  {
    id: 'op-road',
    name: 'FIT X FREAK – OP Road',
    city: 'Vadodara, Gujarat',
    locality: 'Old Padra Road',
    badge: 'OP Road Flagship · 7-8th Floor',
    isFlagship: true,
    address:
      '7-8th Floor, Avishkar Complex, Old Padra Road, Near McDonald\'s, Opposite Bankars Heart Hospital, Near GEB, IOC Nagar, Haripura, Vadodara, Gujarat – 390007',
    contactNumber: '6354661053',
    contactNumberFormatted: '+91 6354661053',
    whatsappUrl: 'https://wa.me/916354661053',
    hoursSummary: 'Mon - Sat: 06:00 AM - 10:00 PM',
    highlights: '7-8th Floor Rooftop Elevation, Imported Biomechanical Racks, Olympic Free Weight Deck',
    photo: '/assets/aistudio/IMG_9409_cd54590e.webp',
    photoAlt: 'Training floor at FIT X FREAK – OP Road Gym, Vadodara',
    googleMapsUrl: 'https://maps.google.com/?q=Avishkar+Complex+Old+Padra+Road+Vadodara+Gujarat+390007',
    timings: [
      { day: 'Monday - Friday', hours: '06:00 AM - 10:00 PM' },
      { day: 'Saturday', hours: '06:00 AM - 10:00 PM' },
      
    ],
  },
  {
    id: 'fatehgunj',
    name: 'FIT X FREAK – Fatehgunj',
    city: 'Vadodara, Gujarat',
    locality: 'Fatehgunj',
    badge: 'Fatehgunj Prime Hub',
    isFlagship: false,
    address: 'Jayesh Colony, Fatehgunj, Vadodara, Gujarat – 390008',
    contactNumber: '6354661053',
    contactNumberFormatted: '+91 6354661053',
    whatsappUrl: 'https://wa.me/916354661053',
    hoursSummary: 'Mon - Sat: 06:00 AM - 10:00 PM',
    highlights: 'High-Octane Hypertrophy Floor, Cable Suites, Personal Coaching Arena',
    photo: '/assets/aistudio/IMG-20261014-WA0005_2dac4c14.webp',
    photoAlt: 'Training floor at FIT X FREAK – Fatehgunj Gym, Vadodara',
    googleMapsUrl: 'https://maps.google.com/?q=Jayesh+Colony+Fatehgunj+Vadodara+Gujarat+390008',
    timings: [
      { day: 'Monday - Friday', hours: '06:00 AM - 11:00 PM' },
      { day: 'Saturday', hours: '06:00 AM - 10:00 PM' },
     
    ],
  },
];

// ==========================================
// FOUNDER PROFILE (Prominently displayed)
// ==========================================
export const FOUNDER: FounderProfile = {
  id: 'founder-irfan',
  name: 'Irfan Shaikh',
  role: 'Founder',
  badgeLabel: 'FOUNDER',
  experience: 'Founder & Visionary Head Coach',
  bio: 'Founder and visionary behind FIT X FREAK Vadodara. Under his leadership and coaching philosophy, hundreds of athletes and fitness enthusiasts have achieved life-changing body transformations across our OP Road and Fatehgunj clubs. Driven by a passion for relentless discipline, biomechanical precision, and elite gym culture in Gujarat.',
  quote: 'FIT X FREAK was built to give Vadodara an uncompromising workout atmosphere where raw beast energy meets imported luxury equipment.',
  certifications: [
    'Founder & Head Coach',
    'Transformation Specialist',
    'Gym Management & Fitness Leadership',
    'Biomechanical Movement & Hypertrophy Expert',
  ],
  keyHighlights: [
    '500+ Documented Client Transformations',
    'Dual Flagship Gyms in Vadodara: OP Road & Fatehgunj',
    'Curated Olympic Lifting & Imported Machinery Suites',
    'Elite Certified Coaching Team',
  ],
  image: '/assets/aistudio/IRFAN_SHAIKH_2fc42d39.webp',
  alt: 'Irfan Shaikh - Founder of FIT X FREAK Vadodara',
  instagramHandle: '@irfanshaikh_fit',
  instagramUrl: 'https://www.instagram.com/fitxfreakgym/',
  branchName: 'OP Road & Fatehgunj',
};

// ==========================================
// CERTIFIED TRAINERS (Exclusively Coaches)
// 1. Shehab Pathan – Senior Trainer
// 2. Ronak Parmar (Raunak) – Trainer
// 3. Arif Shaikh – Trainer
// 4. David Macwan – Trainer
// 5. Rehan Nanno – Trainer
// 6. Ahmad Shaikh – Trainer
// 7. Taukeer – Trainer
// 8. Taksh – Trainer
// 9. Aehfaz – Trainer
// ==========================================
export const TRAINERS: TrainerProfile[] = [
  {
    id: 'tr-shehab',
    name: 'Shehab Pathan',
    role: 'Senior Trainer & Master Coach',
    badgeLabel: 'SENIOR TRAINER',
    isSeniorTrainer: true,
    experience: '15 Years Experience',
    bio: 'Senior fitness authority with 15 years in strength training, biomechanics, and martial arts. Specializes in advanced hypertrophy periodization, high-performance conditioning, and postural rehabilitation.',
    certifications: [
      'Certification in Fitness and Nutrition',
      'Diploma from K11 Fitness Academy',
      'AKFA – Kettlebell Certification',
      'Physique Elite – Level 1',
      'Physique Elite – Level 2',
      'CrossFit Certification',
      'Karate Black Belt',
    ],
    image: '/assets/aistudio/Shehab_pathan_72151612.webp',
    alt: 'Shehab Pathan - Senior Trainer at FIT X FREAK Vadodara',
    instagramHandle: '@shehabpathan_fit',
    instagramUrl: 'https://www.instagram.com/fitxfreakgym/',
    branchName: 'OP Road & Fatehgunj',
  },
  {
    id: 'tr-ronak',
    name: 'Ronak Parmar (Raunak)',
    role: 'Fitness Coach & Conditioning Specialist',
    badgeLabel: 'TRAINER',
    experience: 'Certified Fitness Trainer',
    bio: 'Dynamic and results-driven trainer specializing in hypertrophy training, metabolic conditioning, and personal strength coaching at FIT X FREAK Vadodara.',
    certifications: ['Certified Fitness Trainer', 'Strength & Hypertrophy Specialist', 'Functional Movement'],
    image: '/assets/aistudio/Ronak_parmar_a178fc4a.webp',
    alt: 'Ronak Parmar (Raunak) - Trainer at FIT X FREAK Vadodara',
    instagramHandle: '@ronakparmar_fit',
    instagramUrl: 'https://www.instagram.com/fitxfreakgym/',
    branchName: 'OP Road & Fatehgunj',
  },
  {
    id: 'tr-arif',
    name: 'Arif Shaikh',
    role: 'Certified Fitness Trainer',
    badgeLabel: 'TRAINER',
    experience: '5 Years Experience',
    bio: 'Dedicated personal trainer specializing in progressive overload, customized muscle building splits, and body recomposition routines.',
    certifications: ['Certification in Fitness'],
    image: '/assets/aistudio/Arif__c997aac4.webp',
    alt: 'Arif Shaikh - Trainer at FIT X FREAK Vadodara',
    instagramHandle: '@arifshaikh_fit',
    instagramUrl: 'https://www.instagram.com/fitxfreakgym/',
    branchName: 'OP Road & Fatehgunj',
  },
  {
    id: 'tr-david',
    name: 'David Macwan',
    role: 'Fitness Trainer',
    badgeLabel: 'TRAINER',
    experience: '2.5 Years Experience',
    qualification: '12th Pass',
    bio: 'Focused and energetic trainer motivating members through structured resistance training, endurance routines, and form perfection.',
    certifications: ['Fitness Training (General)'],
    image: '/assets/aistudio/David_Macwan_98ba9382.webp',
    alt: 'David Macwan - Trainer at FIT X FREAK Vadodara',
    instagramHandle: '@davidmacwan_fit',
    instagramUrl: 'https://www.instagram.com/fitxfreakgym/',
    branchName: 'OP Road & Fatehgunj',
  },
  {
    id: 'tr-rehan',
    name: 'Rehan Nanno',
    role: 'Certified Fitness Coach',
    badgeLabel: 'TRAINER',
    experience: '2 Years Experience',
    qualification: 'Currently pursuing B.Com Honours',
    bio: 'INFS Certified fitness coach combining academic discipline with practical nutritional guidance and functional strength workouts.',
    certifications: ['INFS Certified'],
    image: '/assets/aistudio/REHAN_c5cf0a11.webp',
    alt: 'Rehan Nanno - INFS Certified Trainer at FIT X FREAK',
    instagramHandle: '@rehannanno_fit',
    instagramUrl: 'https://www.instagram.com/fitxfreakgym/',
    branchName: 'OP Road & Fatehgunj',
  },
  {
    id: 'tr-ahmad',
    name: 'Ahmad Shaikh',
    role: 'Certified Fitness Trainer',
    badgeLabel: 'TRAINER',
    experience: '2 Years Experience',
    bio: 'Goal-oriented coach focusing on beginner lifting foundations, core stability, and athletic fat loss programs.',
    certifications: ['Certification in Fitness'],
    image: '/assets/aistudio/Ahmad_faaf40c0.webp',
    alt: 'Ahmad Shaikh - Trainer at FIT X FREAK Vadodara',
    instagramHandle: '@ahmadshaikh_fit',
    instagramUrl: 'https://www.instagram.com/fitxfreakgym/',
    branchName: 'OP Road & Fatehgunj',
  },
  {
    id: 'tr-taukeer',
    name: 'Taukeer',
    role: 'Personal Fitness Coach',
    badgeLabel: 'TRAINER',
    experience: 'Certified Fitness Coach',
    bio: 'Committed to empowering members with high-intensity strength programs, core conditioning, and customized workout splits.',
    certifications: ['Personal Fitness Training', 'Functional Strength & Conditioning'],
    image: '/assets/aistudio/Taukeer_80671ce4.webp',
    alt: 'Taukeer - Trainer at FIT X FREAK Vadodara',
    instagramHandle: '@taukeer_fit',
    instagramUrl: 'https://www.instagram.com/fitxfreakgym/',
    branchName: 'OP Road & Fatehgunj',
  },
  {
    id: 'tr-taksh',
    name: 'Taksh',
    role: 'Personal Fitness Coach',
    badgeLabel: 'TRAINER',
    experience: 'Certified Fitness Coach',
    bio: 'Passionate about athletic performance, progressive overload fundamentals, and injury-free functional muscle gain.',
    certifications: ['Certified Fitness Trainer', 'Form & Mobility Training'],
    image: '/assets/aistudio/Taksh_746a2d0c.webp',
    alt: 'Taksh - Trainer at FIT X FREAK Vadodara',
    instagramHandle: '@taksh_fit',
    instagramUrl: 'https://www.instagram.com/fitxfreakgym/',
    branchName: 'OP Road & Fatehgunj',
  },
  {
    id: 'tr-aehfaz',
    name: 'Aehfaz',
    role: 'Personal Fitness Coach',
    badgeLabel: 'TRAINER',
    experience: 'Certified Fitness Coach',
    bio: 'Specializes in resistance training routines, cardiovascular fitness, and structured body transformation guidance.',
    certifications: ['Strength Training Specialist', 'Body Conditioning'],
    image: '/assets/aistudio/Aehfaz__be8fda2d.webp',
    alt: 'Aehfaz - Trainer at FIT X FREAK Vadodara',
    instagramHandle: '@aehfaz_fit',
    instagramUrl: 'https://www.instagram.com/fitxfreakgym/',
    branchName: 'OP Road & Fatehgunj',
  },
];

// OP ROAD EQUIPMENT (Source: GYM EQUIPMENTS o.p road.zip)
export const OP_ROAD_EQUIPMENT: EquipmentItem[] = [
  {
    id: 'eq-op-1',
    name: 'Commercial Treadmill & Studio Spin Bike Suite',
    category: 'cardio',
    categoryLabel: 'Cardio',
    description:
      'FitKing W-919 heavy motorized treadmills with shock-absorption running tracks and precision studio spin bikes for intense cardiovascular conditioning.',
    targetMuscle: 'Full Body / Cardio & Lower Body',
    workoutPurpose: 'Walking, running, aerobic stamina building, HIIT sprints, and high-volume calorie expenditure.',
    branchId: 'op-road',
    branchName: 'FIT X FREAK – OP Road',
    image: '/assets/aistudio/IMG_9409_cd54590e.webp',
    alt: 'Commercial Treadmills and Spin Bikes at FIT X FREAK OP Road Vadodara',
    specs: ['FitKing W-919 Commercial Motor', 'Up to 22 km/h Sprint Speed', 'Shock-Absorbing Orthopedic Belt'],
  },
  {
    id: 'eq-op-2',
    name: 'Being Strong Leg Extension & Seated Leg Curl',
    category: 'legs',
    categoryLabel: 'Legs',
    description:
      'Heavy-duty Being Strong selectorized machine designed for isolated quadriceps extension and seated hamstring curl execution with ergonomic pivot pads.',
    targetMuscle: 'Quadriceps & Hamstrings',
    workoutPurpose: 'Isolated knee extension and flexion for lower-body muscle definition and knee joint stabilization.',
    branchId: 'op-road',
    branchName: 'FIT X FREAK – OP Road',
    image: '/assets/aistudio/IMG_9410_1d770f93.webp',
    alt: 'Being Strong Leg Extension and Curl Machine at FIT X FREAK OP Road',
    specs: ['Adjustable Shin Rollers', 'Variable Cam Resistance Ratio', 'Heavy Selectorized Pin Stack'],
  },
  {
    id: 'eq-op-3',
    name: '45° Plate-Loaded Linear Bearing Leg Press',
    category: 'legs',
    categoryLabel: 'Legs',
    description:
      'Commercial 45-degree angle sled featuring an extra-wide diamond footplate, heavy-gauge steel frame, and dual hand safety catches.',
    targetMuscle: 'Quadriceps, Glutes, Hamstrings & Calves',
    workoutPurpose: 'Heavy lower-body compound pressing without spinal loading, maximizing quad hypertrophy and leg power.',
    branchId: 'op-road',
    branchName: 'FIT X FREAK – OP Road',
    image: '/assets/aistudio/IMG_9411_8ba97b0e.webp',
    alt: '45 Degree Leg Press Machine at FIT X FREAK OP Road Vadodara',
    specs: ['700 kg Load Capacity', 'Extra-Wide Footplate', 'Dual Hand Safety Stops'],
  },
  {
    id: 'eq-op-4',
    name: 'Olympic Deadlift Platform & Competition Bumper Plates',
    category: 'strength',
    categoryLabel: 'Strength',
    description:
      'IWF-standard shock-absorbing hardwood lifting platform paired with a knurled Olympic competition barbell, calibrated rubber bumper plates, and Deadlift Leaderboard.',
    targetMuscle: 'Hamstrings, Glutes, Erector Spinae, Traps & Forearms',
    workoutPurpose: 'Heavy deadlifts, clean pulls, powerlifting, and maximal posterior-chain power development.',
    branchId: 'op-road',
    branchName: 'FIT X FREAK – OP Road',
    image: '/assets/aistudio/IMG_9415_47bd5aea.webp',
    alt: 'Olympic Deadlift Platform with Barbell and Plates at FIT X FREAK OP Road',
    specs: ['Solid Hardwood Center Drop Zone', 'IWF Calibrated Bumper Plates', '20kg Knurled Powerlifting Barbell'],
  },
  {
    id: 'eq-op-5',
    name: 'Plate-Loaded Incline Chest Press & Lat Row Bay',
    category: 'strength',
    categoryLabel: 'Strength',
    description:
      'Converging biomechanical lever-arm press station that replicates natural chest pressing biomechanics with independent left/right resistance.',
    targetMuscle: 'Upper Pectorals, Anterior Deltoids & Triceps',
    workoutPurpose: 'Upper chest hypertrophy and controlled unilateral pressing without barbell joint strain.',
    branchId: 'op-road',
    branchName: 'FIT X FREAK – OP Road',
    image: '/assets/aistudio/IMG_9417_ca51d3a3.webp',
    alt: 'Plate Loaded Incline Chest Press Machine at FIT X FREAK OP Road',
    specs: ['Converging Axis Movement', 'Independent Arm Resistance', 'High-Density Ergonomic Lumbar Seat'],
  },
  {
    id: 'eq-op-6',
    name: 'Powerlifting Squat Rack & Free Weight Deck',
    category: 'strength',
    categoryLabel: 'Strength',
    description:
      'Commercial gauge steel power cage with multi-level J-cups, safety spotter arms, pull-up handles, and rubberized Olympic weight trees.',
    targetMuscle: 'Quadriceps, Glutes, Core & Upper Body',
    workoutPurpose: 'Compound squats, overhead presses, barbell lunges, and heavy free-weight barbell training.',
    branchId: 'op-road',
    branchName: 'FIT X FREAK – OP Road',
    image: '/assets/aistudio/IMG_9418_265c8ef6.webp',
    alt: 'Squat Rack and Barbells at FIT X FREAK OP Road',
    specs: ['Heavy-Gauge 3x3 Steel Box Tubing', 'UHMW Bar Protective Liners', 'Multi-Grip Pull-Up Bars'],
  },
  {
    id: 'eq-op-7',
    name: 'Hall of Fame & Member Transformation Board',
    category: 'functional',
    categoryLabel: 'Results Wall',
    description:
      'Dedicated results showcase displaying verified before-and-after client transformations achieved under Founder Irfan Sir and the coaching team.',
    targetMuscle: 'Full Body Transformation & Body Recomposition',
    workoutPurpose: 'Documented fat loss and muscle building progress tracking for FIT X FREAK members.',
    branchId: 'op-road',
    branchName: 'FIT X FREAK – OP Road',
    image: '/assets/aistudio/IMG_9414_5d5d9fb5.webp',
    alt: 'Member Transformation Hall of Fame Wall at FIT X FREAK OP Road',
    specs: ['Dozens of Documented Transformations', 'Coach-Specific Transformation Logs', 'Real Member Weight Loss Records'],
  },
];

// FATEHGUNJ EQUIPMENT (Source: GYM EQUIPMENTS Fathegunj.zip)
export const FATEHGUNJ_EQUIPMENT: EquipmentItem[] = [
  {
    id: 'eq-fat-1',
    name: 'Commercial Motorized Cardio Treadmills',
    category: 'cardio',
    categoryLabel: 'Cardio',
    description:
      'Commercial high-speed treadmills featuring digital workout metrics, variable incline settings, and impact-cushioned running belts.',
    targetMuscle: 'Cardiovascular System & Lower Body',
    workoutPurpose: 'Cardiovascular endurance, HIIT intervals, aerobic fat burning, and warm-up conditioning.',
    branchId: 'fatehgunj',
    branchName: 'FIT X FREAK – Fatehgunj',
    image: '/assets/aistudio/IMG-20261014-WA0005_2dac4c14.webp',
    alt: 'Cardio Treadmill Section at FIT X FREAK Fatehgunj Vadodara',
    specs: ['Up to 22 km/h Running Speed', '15% Motorized Incline', 'Cushioned Shock Absorption'],
  },
  {
    id: 'eq-fat-2',
    name: 'Rubber Hex Dumbbell Station & Adjustable Benches',
    category: 'strength',
    categoryLabel: 'Strength',
    description:
      'Full range commercial dumbbells paired with commercial multi-angle incline, decline, and flat benches for free-weight movements.',
    targetMuscle: 'Full Body / Shoulders, Chest, Arms & Back',
    workoutPurpose: 'Unilateral dumbbell presses, bicep curls, lateral raises, dumbbell rows, and targeted muscle sculpting.',
    branchId: 'fatehgunj',
    branchName: 'FIT X FREAK – Fatehgunj',
    image: '/assets/aistudio/IMG-20261014-WA0009_03227aeb.webp',
    alt: 'Dumbbell Zone and Benches at FIT X FREAK Fatehgunj Gym',
    specs: ['Full Weight Increments from 2.5kg to 45kg+', 'Multi-Angle Incline/Decline Benches', 'Mirror-Lined Free Weight Wall'],
  },
  {
    id: 'eq-fat-3',
    name: 'Biomechanical Plate-Loaded Shoulder & Chest Press',
    category: 'strength',
    categoryLabel: 'Strength',
    description:
      'Selectorized converging press machine designed to match natural human shoulder articulation with counterbalanced levers.',
    targetMuscle: 'Deltoids, Upper Pectorals & Triceps',
    workoutPurpose: 'Overhead shoulder pressing, upper pectoral development, and controlled deltoid hypertrophy.',
    branchId: 'fatehgunj',
    branchName: 'FIT X FREAK – Fatehgunj',
    image: '/assets/aistudio/IMG-20261014-WA0011_61b98dda.webp',
    alt: 'Biomechanical Press Machine at FIT X FREAK Fatehgunj',
    specs: ['Biomechanical Converging Movement', 'Quick-Pin Height Adjustment', 'Smooth Cable & Pulley Tracking'],
  },
  {
    id: 'eq-fat-4',
    name: 'Multi-Stack Cable Crossover & Functional Pulley Station',
    category: 'functional',
    categoryLabel: 'Functional',
    description:
      'Multi-station dual pulley cable tower with high/low adjustable car tracks, tricep ropes, straight bars, and close-grip attachments.',
    targetMuscle: 'Chest, Biceps, Triceps, Lats & Core',
    workoutPurpose: 'Cable chest flyes, tricep pushdowns, cable curls, face pulls, and continuous resistance isolation.',
    branchId: 'fatehgunj',
    branchName: 'FIT X FREAK – Fatehgunj',
    image: '/assets/aistudio/IMG-20261014-WA0013_7bb3d484.webp',
    alt: 'Cable Crossover Station at FIT X FREAK Fatehgunj Gym Vadodara',
    specs: ['Multi-Stack Stations', 'Aircraft Grade Steel Cables', 'Comprehensive Cable Attachments'],
  },
  {
    id: 'eq-fat-5',
    name: 'Seated Cable Row & Lat Hypertrophy Station',
    category: 'strength',
    categoryLabel: 'Strength',
    description:
      'Selectorized low-row machine with textured foot bracing plates and ergonomic handles for isolated mid-back retraction.',
    targetMuscle: 'Latissimus Dorsi, Rhomboids & Middle Trapezius',
    workoutPurpose: 'Horizontal pulling exercises to build back thickness, lat width, and improve posterior posture.',
    branchId: 'fatehgunj',
    branchName: 'FIT X FREAK – Fatehgunj',
    image: '/assets/aistudio/IMG-20261014-WA0018_7cb025be.webp',
    alt: 'Seated Row and Back Machine at FIT X FREAK Fatehgunj',
    specs: ['Contoured Comfort Seat', 'Direct Resistance Pulley Ratio', 'Heavy 120kg Weight Stack'],
  },
  {
    id: 'eq-fat-6',
    name: 'Leg Extension & Lower Body Isolation Suite',
    category: 'legs',
    categoryLabel: 'Legs',
    description:
      'Precision leg extension machine with self-aligning shin rollers, quick-pull seat pin, and heavy selectorized weight stack.',
    targetMuscle: 'Quadriceps & Patellar Tendon Stabilizers',
    workoutPurpose: 'Isolated knee extension for quadriceps definition, teardrop (VMO) growth, and pre-exhaust leg training.',
    branchId: 'fatehgunj',
    branchName: 'FIT X FREAK – Fatehgunj',
    image: '/assets/aistudio/IMG-20261014-WA0020_0041d054.webp',
    alt: 'Leg Extension Machine at FIT X FREAK Fatehgunj',
    specs: ['Adjustable Backrest & Shin Rollers', 'Self-Aligning Roller Pad', 'Full Quadriceps Isolation'],
  },
];

// UNIFIED GYM EQUIPMENT: Best commercial hardware curated across both OP Road & Fatehgunj
export const UNIFIED_EQUIPMENT: EquipmentItem[] = [
  ...OP_ROAD_EQUIPMENT.filter((item) => item.id !== 'eq-op-7'),
  ...FATEHGUNJ_EQUIPMENT,
];

// Fallback alias
export const ALL_EQUIPMENT: EquipmentItem[] = UNIFIED_EQUIPMENT;

// ==========================================
// PROVEN RESULTS IN VADODARA
// Each entry renders one card in the "Proven Results" section.
// To add a member: drop the graphic into /public/assets/aistudio and add an entry here.
// ==========================================
export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-nitish',
    name: 'Nitish Kumar Singh',
    beforeKg: 52,
    afterKg: 64,
    image: '/assets/aistudio/52_to_64_kg__Stronger_Transformation_72da4994.webp',
    
    alt: 'Nitish Kumar Singh transformation journey at FIT X FREAK Vadodara: 62 kg to 68 kg, 6 kg lean muscle gain',
  },
  {
    id: 'story-anmol',
    name: 'Anmol Gupta',
    beforeKg: 52,
    afterKg: 68,
    image: '/assets/aistudio/Nitish_s_62_68_kg_Transformation_2683f972.webp',
    alt: 'Anmol Gupta transformation journey at FIT X FREAK Vadodara: 52 kg to 64 kg, 12 kg lean muscle gain',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'Vadodara Best Gym',
    question: 'Which is the best gym in Vadodara for fitness and muscle building?',
    answer:
      'FIT X FREAK (also searched as FitX Freak Gym) is a leading gym in Vadodara with two branches: 1) OP Road (7-8th Floor, Avishkar Complex, Old Padra Road) and 2) Fatehgunj (Jayesh Colony). Owned and led by Coach Irfan Shaikh with Senior Trainer Shehab Pathan (15 Yrs Exp), we provide imported biomechanical equipment and verified transformation plans.',
  },
  {
    category: 'Gym Near Me Vadodara',
    question: 'Where are the FIT X FREAK gym locations in Vadodara and how do I contact them?',
    answer:
      'FIT X FREAK has 2 prime locations in Vadodara: 1) OP Road: 7-8th Floor, Avishkar Complex, Old Padra Road, near McDonald\'s (Call: 6354661053), and 2) Fatehgunj: Jayesh Colony, Fatehgunj (Call: 6354661053). Both branches are open for walk-ins and enquiries, and each has direct Google Maps navigation.',
  },
  {
    category: 'Trainers & Leadership',
    question: 'Who are the trainers at FIT X FREAK Vadodara and what are their qualifications?',
    answer:
      'FIT X FREAK is owned by Irfan Shaikh and staffed with certified coaches led by Senior Trainer Shehab Pathan (15 Years Experience, K11 Fitness Academy, AKFA Kettlebell, Physique Elite Level 1 & 2, CrossFit, Karate Black Belt), Arif Shaikh (5 Years, Certification in Fitness), Rehan Nanno (INFS Certified), David Macwan (2.5 Years Experience), and Ahmad Shaikh (Certification in Fitness).',
  },
  {
    category: 'Gym Equipment',
    question: 'What equipment is installed at FIT X FREAK OP Road and Fatehgunj?',
    answer:
      'We house heavy-duty commercial equipment including FitKing motorized treadmills, Being Strong leg extension/curl units, 45° plate-loaded linear leg presses, Olympic deadlift hardwood platforms, multi-stack cable crossover towers, and heavy dumbbells up to 45kg+.',
  },
  {
    category: 'Enquiry & Trial Pass',
    question: 'How do I book a workout session or enquire for my preferred branch?',
    answer:
      'Fill out the enquiry form on this website, select your preferred branch (OP Road or Fatehgunj), and submit. Your details will be instantly dispatched to WhatsApp on the exact branch contact number (+91 6354661053).',
  },
];
