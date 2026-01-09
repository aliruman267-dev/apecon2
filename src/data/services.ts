import homeSecurity from "@/assets/home-security.jpg";
import businessSecurity from "@/assets/business-security.jpg";
import monitoringCenter from "@/assets/monitoring-center.jpg";
import installation from "@/assets/installation.jpg";
import cctvCamera from "@/assets/cctv-camera.jpg";
import videoDoorbell from "@/assets/video-doorbell.jpg";
import securityAlarm from "@/assets/security-alarm.jpg";
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
    id: "cctv",
    title: "CCTV (Wireless & Wired)",
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
    title: "Video Door Bell",
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
    id: "security-alarm",
    title: "Security Alarm (Wireless & Wired)",
    shortDescription: "Reliable alarm systems with wireless and wired configurations to protect your home or business.",
    description: "Protect your property with our professional alarm systems. We offer both wireless and wired configurations to suit any building type, from modern smart homes to traditional properties. Our alarms are designed for reliability and rapid response.",
    image: securityAlarm,
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
    id: "network-connectivity",
    title: "Network Connectivity Services",
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
  },
  {
    id: "home-security",
    title: "Home Security",
    shortDescription: "Comprehensive home security camera systems with high resolution and remote monitoring for peace of mind.",
    description: "Protect your family and property with our comprehensive home security camera systems. Our professional-grade solutions provide 24/7 surveillance with crystal-clear video quality, ensuring you always have eyes on what matters most.",
    image: homeSecurity,
    features: [
      "High-definition 4K camera resolution",
      "Advanced night vision technology",
      "Remote access via smartphone app",
      "Intelligent motion detection alerts",
      "Flexible cloud and local storage",
      "Weather-resistant outdoor cameras",
      "Two-way audio communication",
      "Smart home integration"
    ],
    benefits: [
      "Peace of mind knowing your family is protected",
      "Deter potential intruders with visible cameras",
      "Monitor your property remotely",
      "Reduce insurance premiums",
      "Evidence collection in case of incidents"
    ],
    useCases: [
      "Single-family homes",
      "Apartments and flats",
      "Holiday homes",
      "Properties with gardens and outbuildings"
    ],
    whyApecon: "Apecon specialises in home security solutions that are tailored to your property and lifestyle. Our friendly engineers provide a thorough survey and install systems that offer complete coverage and ease of use."
  },
  {
    id: "business-systems",
    title: "Business Systems",
    shortDescription: "Scalable security solutions designed for commercial properties, from small offices to large enterprises.",
    description: "Robust, reliable, and scalable security solutions designed for commercial properties of all sizes. From small retail shops to large corporate offices, our business security systems are tailored to meet your specific operational needs.",
    image: businessSecurity,
    features: [
      "Multi-site centralised monitoring",
      "Access control integration",
      "Employee activity monitoring",
      "Advanced analytics and reporting",
      "Scalable infrastructure",
      "IT infrastructure integration",
      "Point-of-sale monitoring",
      "License plate recognition"
    ],
    benefits: [
      "Reduce theft and shrinkage",
      "Improve employee productivity",
      "Ensure security compliance",
      "Protect valuable assets",
      "Enhanced customer and staff safety"
    ],
    useCases: [
      "Retail stores and shopping centres",
      "Office buildings",
      "Warehouses and distribution centres",
      "Manufacturing facilities"
    ],
    whyApecon: "We understand the unique security challenges facing UK businesses. Apecon designs systems that protect your assets, monitor operations, and scale with your growth—all backed by reliable local support."
  },
  {
    id: "camera-systems",
    title: "Camera Systems",
    shortDescription: "State-of-the-art IP and analog cameras with high-definition video and remote monitoring capabilities.",
    description: "State-of-the-art IP and analog camera systems offering high-definition video capture and advanced remote monitoring capabilities. We supply and install the latest technology from leading manufacturers.",
    image: installation,
    features: [
      "Wide range of IP and analog cameras",
      "Pan-Tilt-Zoom (PTZ) functionality",
      "Ultra-wide angle coverage",
      "Vandal-proof and weatherproof housings",
      "Professional certified installation",
      "Maintenance and support packages",
      "Thermal imaging options",
      "Facial recognition capabilities"
    ],
    benefits: [
      "Maximum coverage with fewer cameras",
      "Reliable all-weather operation",
      "Long-lasting equipment with warranty",
      "Future-proof technology",
      "Expert camera placement guidance"
    ],
    useCases: [
      "Commercial and industrial sites",
      "Public spaces and car parks",
      "Schools and universities",
      "Healthcare facilities"
    ],
    whyApecon: "Apecon's certified engineers have years of experience installing camera systems across the UK. We recommend and install only trusted equipment, ensuring you get the best quality and value for your investment."
  },
  {
    id: "monitoring",
    title: "24/7 Monitoring",
    shortDescription: "Round-the-clock Security Operations Center monitoring for complete peace of mind.",
    description: "Our Security Operations Center provides round-the-clock monitoring services, ensuring your property is always protected. Our trained operators respond immediately to alerts, providing you with complete peace of mind.",
    image: monitoringCenter,
    features: [
      "24/7 live monitoring",
      "Instant alert response",
      "Emergency services dispatch",
      "Video verification of alarms",
      "Dedicated support team",
      "Regular security reports",
      "Mobile app notifications",
      "Police and emergency integration"
    ],
    benefits: [
      "Never miss a security event",
      "Professional response to every alert",
      "Reduced false alarm fines",
      "Faster emergency response",
      "Regular security assessments"
    ],
    useCases: [
      "High-value residential properties",
      "Commercial premises",
      "Vacant buildings",
      "Construction sites"
    ],
    whyApecon: "Our UK-based monitoring centre is staffed by trained security professionals who know how to respond quickly and effectively. Apecon's monitoring service gives you true peace of mind, day and night."
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

export const getServicesForPreview = (count: number = 4) => {
  return services.slice(0, count);
};
