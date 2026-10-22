/**
 * Centralized specifications and feature definitions for JustRide Aventura.
 * Single source of truth across the web application.
 */

export const technicalSpecs = [
  { label: 'Product', value: 'JustRide Aventura', note: 'Smart Motorcycle Navigation Device' },
  { label: 'Display size', value: '1.75-inch circular display', note: 'High-contrast rider-focused interface' },
  { label: 'Battery capacity', value: '1000 mAh', note: 'Built-in rechargeable battery' },
  { label: 'Target battery runtime', value: '10–12 hours', note: 'Target operating time; depends on brightness, connectivity, and usage' },
  { label: 'Connectivity', value: 'Bluetooth', note: 'Low Energy wireless connection' },
  { label: 'Navigation', value: 'Turn-by-turn', note: 'Directional guidance with route context' },
  { label: 'Call features', value: 'Incoming call alerts & supported controls', note: 'Caller identification with accept/decline' },
  { label: 'Notifications', value: 'Smartphone notifications', note: 'Alerts from connected smartphone applications' },
  { label: 'Music controls', value: 'Play, pause, previous, next', note: 'Supported audio playback controls' },
  { label: 'Mounting', value: 'Twist-and-lock', note: 'Convenient attachment and removal system' },
  { label: 'Hardware controls', value: 'Dedicated physical power button', note: 'Tactile control with emerald ring indicator' },
  { label: 'Mobile app', value: 'Dedicated JustRide companion application', note: 'Device settings, routes, and ride preferences' },
  { label: 'Ride tracking', value: 'Trip distance & ride history', note: 'Track distance, routes, and travel logs' },
];

export const heroSpecs = [
  { icon: 'Compass', value: '1.75"', label: 'Circular Display', note: 'Rider-optimized daylight contrast' },
  { icon: 'BatteryCharging', value: '1000 mAh', label: 'Battery Capacity', note: 'Built-in rechargeable cell' },
  { icon: 'Clock', value: '10–12 hrs', label: 'Target Runtime', note: 'Full-day riding endurance' },
  { icon: 'Bluetooth', value: 'BLE 5.0', label: 'Connectivity', note: 'Instant smartphone sync' },
];

export const specCategories = [
  {
    id: 'display',
    title: 'Display & Vision',
    icon: 'Compass',
    tag: 'HARDWARE',
    items: [
      { label: 'Screen size', value: '1.75-inch circular display', note: 'Active circular area' },
      { label: 'Interface', value: 'High-contrast rider UI', note: 'Daylight readable' },
      { label: 'Metrics', value: 'Turn cues, distance & speed', note: 'Zero visual clutter' },
    ],
  },
  {
    id: 'battery',
    title: 'Battery & Power',
    icon: 'BatteryCharging',
    tag: 'POWER',
    items: [
      { label: 'Battery capacity', value: '1000 mAh integrated', note: 'Built-in rechargeable cell' },
      { label: 'Target runtime', value: '10–12 hours', note: 'Depends on brightness & usage' },
      { label: 'Charging', value: 'USB-C fast charging', note: 'Universal connector' },
    ],
  },
  {
    id: 'navigation',
    title: 'Navigation & Guidance',
    icon: 'Layers',
    tag: 'SOFTWARE',
    items: [
      { label: 'Routing', value: 'Turn-by-turn guidance', note: 'Directional maneuvers' },
      { label: 'Route context', value: 'Live street distance & arrows', note: 'Synchronized in real-time' },
      { label: 'GPS engine', value: 'Smartphone paired GPS', note: 'Powered by companion app' },
    ],
  },
  {
    id: 'connectivity',
    title: 'Calls & Smart Alerts',
    icon: 'PhoneCall',
    tag: 'WIRELESS',
    items: [
      { label: 'Wireless protocol', value: 'Bluetooth Low Energy (BLE)', note: 'Continuous low-power link' },
      { label: 'Caller alerts', value: 'Incoming caller identification', note: 'Accept & decline controls' },
      { label: 'Notifications', value: 'Smartphone app alerts', note: 'Glanceable cues' },
    ],
  },
  {
    id: 'controls',
    title: 'Audio & Hardware Controls',
    icon: 'Music',
    tag: 'CONTROLS',
    items: [
      { label: 'Music playback', value: 'Play, pause, next, previous', note: 'Glove-friendly control' },
      { label: 'Power control', value: 'Physical power button', note: 'Tactile side button' },
      { label: 'LED indicator', value: 'Emerald status ring', note: 'Instant device state' },
    ],
  },
  {
    id: 'build',
    title: 'Mounting & Application',
    icon: 'Smartphone',
    tag: 'SYSTEM',
    items: [
      { label: 'Mounting system', value: 'Twist-and-lock mount', note: 'Vibration-resistant latch' },
      { label: 'Companion app', value: 'Dedicated JustRide app', note: 'iOS & Android supported' },
      { label: 'Ride tracking', value: 'Trip distance & ride logs', note: 'Stored in mobile app' },
    ],
  },
];

export const featureGroups = [
  {
    id: 'navigation-display',
    badge: '01 / CLARITY ON THE ROAD',
    title: 'Navigation & Display',
    lead: 'Large, readable navigation engineered specifically for motorcycle handlebars.',
    features: [
      {
        title: 'Turn-by-Turn Navigation',
        desc: 'Clear visual route guidance showing your next maneuver, remaining distance, and upcoming turns at a single glance without distraction.',
      },
      {
        title: '1.75-Inch Circular Display',
        desc: 'Generous circular screen with a high-contrast layout designed for instant daylight readability while riding.',
      },
      {
        title: 'Live Route Context',
        desc: 'Essential route information synchronized continuously from your smartphone companion app over Bluetooth Low Energy.',
      },
    ],
  },
  {
    id: 'connectivity-controls',
    badge: '02 / SMART CONNECTIVITY',
    title: 'Connectivity & Controls',
    lead: 'Stay connected and in control without ever reaching for your smartphone.',
    features: [
      {
        title: 'Smart Call Controls',
        desc: 'View caller identification instantly and manage supported call actions without taking your phone out of your pocket.',
      },
      {
        title: 'Smart Notifications',
        desc: 'Receive convenient, glanceable notifications from connected smartphone applications while on the move.',
      },
      {
        title: 'Music Controller',
        desc: 'Manage audio playback on the go with quick controls for play, pause, previous track, and next track.',
      },
      {
        title: 'Bluetooth Wireless Pairing',
        desc: 'Reliable, low-latency connection designed for stable continuous communication between phone and device.',
      },
    ],
  },
  {
    id: 'battery-tracking',
    badge: '03 / ENDURANCE & DATA',
    title: 'Battery & Ride Tracking',
    lead: 'Built for long-distance touring, day rides, and daily commuting.',
    features: [
      {
        title: '1000 mAh Built-in Battery',
        desc: 'Rechargeable internal battery designed to provide steady, all-day power throughout your journeys.',
      },
      {
        title: '10–12 Hours Target Runtime',
        desc: 'Target operating runtime on a single charge. Actual runtime varies based on display brightness, connection status, and usage.',
      },
      {
        title: 'Comprehensive Ride Tracking',
        desc: 'Log trip distance, travel time, and route history automatically into your companion application.',
      },
    ],
  },
  {
    id: 'mounting-ergonomics',
    badge: '04 / BUILT FOR RIDERS',
    title: 'Mounting & Everyday Use',
    lead: 'Rugged hardware designed to withstand vibration and glove-friendly operation.',
    features: [
      {
        title: 'Twist-and-Lock Mechanism',
        desc: 'Quick, secure mechanical mounting system allowing convenient attachment and detachment in seconds.',
      },
      {
        title: 'Physical Power Button',
        desc: 'Tactile side button with emerald ring illumination, effortlessly operable even while wearing thick riding gloves.',
      },
      {
        title: 'Dedicated Mobile Application',
        desc: 'Plan routes, customize preferences, review ride statistics, and keep device firmware updated with ease.',
      },
    ],
  },
];

export const uiScreens = [
  {
    id: 'clock',
    specifications: [['Display', '1.75-inch circular'], ['Ride data', 'Time, date & distance'], ['Battery life', '10–12 hours']],
    label: 'Overview',
    tagline: 'Your ride at a glance',
    title: 'Time, date and distance.',
    description: 'See the time, date, distance travelled and battery percentage in one view. Target battery life is 10–12 hours; actual runtime depends on brightness, connectivity and usage.',
    alt: 'Aventura home screen showing time, date, distance travelled and 85 percent battery remaining',
    highlights: ['Time & date', 'Distance travelled', 'Battery percentage', '1.75-inch display'],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    specifications: [['Guidance', 'Turn-by-turn & route map'], ['Connection', 'Bluetooth to your phone'], ['Routing', 'JustRide companion app']],
    tagline: 'Turn-by-turn guidance',
    title: 'Turn-by-Turn Guidance',
    description: 'Get next-turn directions, distance and route context from the JustRide companion app over Bluetooth.',
    image: '/src/assets/device-front-nav.png',
    alt: 'JustRide Aventura showing turn-by-turn navigation with green route and distance',
    highlights: ['Large directional arrow', 'Distance countdown', 'Route map context', 'Speed limit indicator'],
  },
  {
    id: 'calls',
    label: 'Call Alerts',
    specifications: [['Caller details', 'Name & number'], ['Controls', 'Accept / decline where supported'], ['Connection', 'Paired smartphone']],
    tagline: 'Incoming call notifications',
    title: 'Incoming Call Management',
    description: 'See incoming caller details and accept or decline calls where supported by your connected phone.',
    image: '/src/assets/device-caller.png',
    alt: 'JustRide Aventura showing incoming call screen with caller identification',
    highlights: ['Caller ID & number', 'Supported call controls', 'High-contrast typography', 'Glanceable alerts'],
  },
  {
    id: 'music',
    label: 'Music Control',
    specifications: [['Playback', 'Play / pause'], ['Tracks', 'Previous / next'], ['Track details', 'Title, artist & progress']],
    tagline: 'Media playback controls',
    title: 'Integrated Music Controller',
    description: 'View track information and control supported playback from your connected phone.',
    image: '/src/assets/device-music.png',
    alt: 'JustRide Aventura showing music playback controls with track title and progress bar',
    highlights: ['Track title & artist', 'Playback progress bar', 'Play / Pause control', 'Skip & previous track'],
  },
];
