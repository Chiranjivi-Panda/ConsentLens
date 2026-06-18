export const LEVEL_CONFIG = {
  LOW: {
    bg: "#14532d",
    text: "#86efac",
    border: "#16a34a",
    label: "LOW RISK",
  },
  MEDIUM: {
    bg: "#713f12",
    text: "#fde68a",
    border: "#ca8a04",
    label: "MEDIUM RISK",
  },
  HIGH: {
    bg: "#7c2d12",
    text: "#fdba74",
    border: "#ea580c",
    label: "HIGH RISK",
  },
  CRITICAL: {
    bg: "#450a0a",
    text: "#fca5a5",
    border: "#dc2626",
    label: "CRITICAL RISK",
  },
};

export const CATEGORY_COLORS = {
  location: "#818cf8",
  camera: "#f472b6",
  personal: "#fb923c",
  storage: "#34d399",
  system: "#60a5fa",
};

export const APP_DB = {
  instagram: {
    name: "Instagram",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    score: 74,
    level: "HIGH",
    color: "#f97316",
    summary:
      "Instagram collects your precise location, full contact list, camera, and microphone access.",
    permissions: {
      "Precise Location": {
        pts: 8,
        category: "location",
        icon: "📍",
      },
      Camera: {
        pts: 6,
        category: "camera",
        icon: "📷",
      },
      Microphone: {
        pts: 6,
        category: "camera",
        icon: "🎙️",
      },
      Contacts: {
        pts: 6,
        category: "personal",
        icon: "👥",
      },
      Storage: {
        pts: 4,
        category: "storage",
        icon: "💾",
      },
    },
    dpdp: true,
    safer: {
      name: "BeReal",
      score: 22,
    },
  },

  tiktok: {
    name: "TikTok",
    icon: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png",
    score: 89,
    level: "CRITICAL",
    color: "#ef4444",
    summary:
      "TikTok has one of the highest privacy risk profiles.",
    permissions: {
      "Precise Location": {
        pts: 8,
        category: "location",
        icon: "📍",
      },
      Camera: {
        pts: 6,
        category: "camera",
        icon: "📷",
      },
      Contacts: {
        pts: 6,
        category: "personal",
        icon: "👥",
      },
      "Device ID": {
        pts: 8,
        category: "system",
        icon: "📱",
      },
    },
    dpdp: true,
    safer: {
      name: "YouTube Shorts",
      score: 41,
    },
  },

  whatsapp: {
    name: "WhatsApp",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    score: 48,
    level: "MEDIUM",
    color: "#eab308",
    summary:
      "WhatsApp requires camera, microphone and contacts.",
    permissions: {
      Camera: {
        pts: 6,
        category: "camera",
        icon: "📷",
      },
      Microphone: {
        pts: 6,
        category: "camera",
        icon: "🎙️",
      },
      Contacts: {
        pts: 6,
        category: "personal",
        icon: "👥",
      },
    },
    dpdp: false,
    safer: {
      name: "Signal",
      score: 12,
    },
  },

  signal: {
    name: "Signal",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Signal-Logo.svg",
    score: 12,
    level: "LOW",
    color: "#22c55e",
    summary:
      "Signal is considered one of the most privacy-focused messaging apps.",
    permissions: {
      Camera: {
        pts: 6,
        category: "camera",
        icon: "📷",
      },
      Microphone: {
        pts: 6,
        category: "camera",
        icon: "🎙️",
      },
    },
    dpdp: false,
    safer: null,
  },

  facebook: {
    name: "Facebook",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    score: 87,
    level: "CRITICAL",
    color: "#ef4444",
    summary:
      "Facebook requests extensive permissions and tracking access.",
    permissions: {
      "Background Location": {
        pts: 9,
        category: "location",
        icon: "📍",
      },
      Camera: {
        pts: 6,
        category: "camera",
        icon: "📷",
      },
      Contacts: {
        pts: 6,
        category: "personal",
        icon: "👥",
      },
    },
    dpdp: true,
    safer: {
      name: "Mastodon",
      score: 14,
    },
  },

 snapchat: {
    name: "Snapchat",
    icon: "https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg",
    score: 68,
    level: "HIGH",
    summary: "Uses camera, location and contacts heavily.",
    permissions: {
      Camera:{pts:6,category:"camera",icon:"📷"},
      Location:{pts:8,category:"location",icon:"📍"},
      Contacts:{pts:6,category:"personal",icon:"👥"}
    },
    dpdp:true,
    safer:{name:"Signal",score:12}
  },
  
  telegram: {
    name:"Telegram",
    icon:"https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    score:55,
    level:"MEDIUM",
    summary:"Accesses contacts and storage.",
    permissions:{
      Contacts:{pts:6,category:"personal",icon:"👥"},
      Storage:{pts:4,category:"storage",icon:"💾"}
    },
    dpdp:false,
    safer:{name:"Signal",score:12}
  },
  
  youtube: {
    name:"YouTube",
    icon:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
    score:42,
    level:"MEDIUM",
    summary:"Collects usage analytics and watch history.",
    permissions:{
      Storage:{pts:4,category:"storage",icon:"💾"},
      Microphone:{pts:6,category:"camera",icon:"🎙️"}
    },
    dpdp:false,
    safer:null
  },
  
  truecaller: {
    name:"Truecaller",
    icon:"https://upload.wikimedia.org/wikipedia/commons/5/5e/Truecaller_logo.png",
    score:82,
    level:"CRITICAL",
    summary:"Requires extensive contact access.",
    permissions:{
      Contacts:{pts:10,category:"personal",icon:"👥"},
      Phone:{pts:8,category:"system",icon:"📱"}
    },
    dpdp:true,
    safer:{name:"Signal",score:12}
  },
  
  linkedin: {
    name:"LinkedIn",
    icon:"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    score:45,
    level:"MEDIUM",
    summary:"Collects professional profile and contacts.",
    permissions:{
      Contacts:{pts:6,category:"personal",icon:"👥"},
      Camera:{pts:4,category:"camera",icon:"📷"}
    },
    dpdp:false,
    safer:null
  },
  
  twitter: {
    name:"Twitter",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png",
    score:58,
    level:"MEDIUM",
    summary:"Tracks activity and location.",
    permissions:{
      Location:{pts:8,category:"location",icon:"📍"},
      Contacts:{pts:6,category:"personal",icon:"👥"}
    },
    dpdp:false,
    safer:{name:"Mastodon",score:14}
  },
  
  amazon: {
    name:"Amazon",
    icon:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    score:52,
    level:"MEDIUM",
    summary:"Collects shopping behavior and location.",
    permissions:{
      Location:{pts:8,category:"location",icon:"📍"},
      Storage:{pts:4,category:"storage",icon:"💾"}
    },
    dpdp:false,
    safer:null
  },
  
  flipkart: {
    name:"Flipkart",
    icon:"https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png",
    score:49,
    level:"MEDIUM",
    summary:"Uses storage and location access.",
    permissions:{
      Location:{pts:8,category:"location",icon:"📍"},
      Storage:{pts:4,category:"storage",icon:"💾"}
    },
    dpdp:false,
    safer:null
  },
  
  uber: {
    name:"Uber",
    icon:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    score:63,
    level:"HIGH",
    summary:"Requires precise location tracking.",
    permissions:{
      Location:{pts:10,category:"location",icon:"📍"},
      Contacts:{pts:4,category:"personal",icon:"👥"}
    },
    dpdp:false,
    safer:null
  },
  
  zomato: {
    name:"Zomato",
    icon:"https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    score:38,
    level:"LOW",
    summary:"Uses location for food delivery.",
    permissions:{
      Location:{pts:8,category:"location",icon:"📍"}
    },
    dpdp:false,
    safer:null
  },
  
  swiggy: {
    name:"Swiggy",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
    score:37,
    level:"LOW",
    summary:"Uses location for delivery services.",
    permissions:{
      Location:{pts:8,category:"location",icon:"📍"}
    },
    dpdp:false,
    safer:null
  },
  
  spotify: {
    name:"Spotify",
    icon:"https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    score:28,
    level:"LOW",
    summary:"Limited permissions for media usage.",
    permissions:{
      Microphone:{pts:4,category:"camera",icon:"🎙️"}
    },
    dpdp:false,
    safer:null
  },
  
  netflix: {
    name:"Netflix",
    icon:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    score:24,
    level:"LOW",
    summary:"Minimal permission requirements.",
    permissions:{
      Storage:{pts:4,category:"storage",icon:"💾"}
    },
    dpdp:false,
    safer:null
  },
  
  gmail: {
    name:"Gmail",
    icon:"https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
    score:40,
    level:"MEDIUM",
    summary:"Accesses contacts and email metadata.",
    permissions:{
      Contacts:{pts:6,category:"personal",icon:"👥"}
    },
    dpdp:false,
    safer:null
  },
  
  googlemaps: {
  name: "Google Maps",
  icon: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg",
  score: 70,
  level: "HIGH",
  summary: "Requires continuous location access.",
  permissions: {
    Location: {
      pts: 10,
      category: "location",
      icon: "📍",
    },
  },
  dpdp: false,
  safer: null,
}

};