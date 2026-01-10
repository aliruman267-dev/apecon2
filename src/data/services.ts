import cctvCamera from "@/assets/cctv-camera.jpg";
import videoDoorbell from "@/assets/video-doorbell.jpg";
import alarmKeypad from "@/assets/alarm-keypad.jpg";
import intercomSystem from "@/assets/intercom-system.jpg";
import networkConnectivity from "@/assets/network-connectivity.jpg";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  whyApecon: string;
}

export const services: Service[] = [
  {
    id: "alarm",
    title: "ALARM",
    shortDescription: "Reliable wireless and wired alarm systems to protect your home or business from intruders.",
    description: "Protect your property with our professional intruder alarm systems. We offer both wireless and wired configurations to suit any building type, from modern smart homes to traditional properties. Our alarms are designed for reliability and rapid response.",
    image: alarmKeypad,
    features: [
      "Wireless and wired sensor options",
      "Door, window, and motion sensors",
      "Smartphone app control and alerts",
      "24/7 monitoring service available",
      "Battery backup for power outages",
      "Pet-friendly sensor options"
    ],
    benefits: [
      "Immediate alerts to intrusion attempts",
      "Deter burglars before they enter",
      "Lower home insurance costs",
      "Professional monitoring options",
      "Peace of mind at all times"
    ],
    useCases: [
      "Residential properties of all sizes",
      "Commercial buildings and offices",
      "Retail stores and warehouses",
      "Schools and public buildings"
    ],
    whyApecon: "Apecon's alarm installations are tailored to your property's unique layout. We use only trusted, reliable equipment and offer optional 24/7 monitoring services to ensure rapid response when you need it most."
  },
  {
    id: "cctv",
    title: "CCTV",
    shortDescription: "Professional CCTV systems with flexible wireless and wired options for complete property surveillance.",
    description: "Keep your property under constant watch with our professional-grade CCTV systems. We offer both wireless and wired solutions, tailored to your specific requirements, ensuring reliable coverage and crystal-clear footage day and night.",
    image: cctvCamera,
    features: [
      "HD & 4K camera resolution options",
      "Wireless and hardwired installation choices",
      "Night vision with infrared technology",
      "Remote viewing via smartphone and tablet",
      "Motion-activated recording and alerts",
      "Cloud and local NVR storage options"
    ],
    benefits: [
      "Deter criminal activity with visible cameras",
      "24/7 monitoring of your premises",
      "Evidence collection for incidents",
      "Remote access from anywhere in the world",
      "Reduced insurance premiums"
    ],
    useCases: [
      "Residential homes and apartments",
      "Retail shops and commercial premises",
      "Warehouses and industrial sites",
      "Office buildings and car parks"
    ],
    whyApecon: "Apecon provides expert CCTV installation with a focus on optimal camera placement and system reliability. Our engineers ensure you get maximum coverage with minimum equipment, backed by ongoing support and maintenance."
  },
  {
    id: "video-doorbell",
    title: "VIDEO DOORBELL",
    shortDescription: "Smart video doorbells that let you see and speak to visitors from anywhere using your smartphone.",
    description: "Never miss a visitor again with our smart video doorbell solutions. See, hear, and speak to anyone at your door from your smartphone, whether you're at home, at work, or on holiday. Our systems integrate seamlessly with your existing security setup.",
    image: videoDoorbell,
    features: [
      "HD video with wide-angle lens",
      "Two-way audio communication",
      "Motion detection with instant alerts",
      "Night vision for 24/7 visibility",
      "Cloud recording and playback",
      "Integration with smart home systems"
    ],
    benefits: [
      "Answer your door from anywhere",
      "Deter package thieves and intruders",
      "Record all doorstep activity",
      "Peace of mind when away from home",
      "Easy installation and setup"
    ],
    useCases: [
      "Family homes and flats",
      "Rental properties and Airbnb",
      "Small businesses and offices",
      "Elderly relatives' homes"
    ],
    whyApecon: "We install and configure video doorbells that work perfectly with your home Wi-Fi and existing security systems. Apecon ensures reliable connectivity and provides full training on how to use your new device."
  },
  {
    id: "intercom",
    title: "INTERCOM",
    shortDescription: "Modern audio and video intercom systems for secure entry control at homes and commercial buildings.",
    description: "Control access to your property with our professional intercom systems. From simple audio intercoms to advanced video entry systems with remote unlock capabilities, we provide solutions that enhance security while adding convenience.",
    image: intercomSystem,
    features: [
      "Audio and video intercom options",
      "Remote door release functionality",
      "Multi-unit and multi-building support",
      "Integration with access control systems",
      "Smartphone connectivity for remote answering",
      "Vandal-resistant outdoor panels"
    ],
    benefits: [
      "Screen visitors before granting access",
      "Remote entry control from anywhere",
      "Enhanced building security",
      "Professional appearance for businesses",
      "Convenient communication between areas"
    ],
    useCases: [
      "Residential properties with gated entry",
      "Apartment blocks and housing estates",
      "Commercial offices and business parks",
      "Schools and healthcare facilities"
    ],
    whyApecon: "Apecon designs and installs intercom systems that match your specific access control needs. Our solutions are scalable, reliable, and backed by professional support and maintenance services."
  },
  {
    id: "it-network-solution",
    title: "IT NETWORK SOLUTION",
    shortDescription: "Professional network infrastructure setup including routers, switches, and Wi-Fi solutions.",
    description: "A robust network is the backbone of modern security systems. Apecon provides comprehensive network connectivity services, from structured cabling to enterprise-grade Wi-Fi solutions, ensuring your security devices and business operations run smoothly.",
    image: networkConnectivity,
    features: [
      "Structured cabling and network design",
      "Enterprise-grade router and switch installation",
      "Mesh Wi-Fi for full property coverage",
      "Network security and firewall setup",
      "PoE (Power over Ethernet) solutions",
      "Network monitoring and maintenance"
    ],
    benefits: [
      "Reliable connectivity for all devices",
      "Seamless security system integration",
      "Future-proof infrastructure",
      "Improved business productivity",
      "Expert troubleshooting and support"
    ],
    useCases: [
      "Offices requiring reliable internet",
      "Homes with smart security systems",
      "Warehouses and large commercial spaces",
      "Multi-building business campuses"
    ],
    whyApecon: "Our network engineers design and install infrastructure that supports today's demands and tomorrow's growth. Apecon ensures your security systems have the reliable connectivity they need to function flawlessly."
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesForNavbar = () => {
  return services.map(service => ({
    name: service.title,
    path: `/services/${service.id}`
  }));
};

export const getServicesForPreview = (count: number = 5) => {
  return services.slice(0, count);
};

export const serviceOptions = [
  "ALARM",
  "CCTV",
  "VIDEO DOORBELL",
  "INTERCOM",
  "IT NETWORK SOLUTION"
];
