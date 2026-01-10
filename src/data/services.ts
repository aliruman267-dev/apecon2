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
    title: "ALARM (WIRELESS & WIRED)",
    shortDescription:
      "Intruder alarm systems designed around your property, with reliable wireless or hardwired options.",
    description:
      "A good alarm system should fit your building—not the other way around. We install wireless and wired intruder alarms for homes and businesses, using proven sensors for doors, windows, and internal areas. Whether you need a simple setup or a fully monitored solution, we’ll design it for the layout of your property and make sure it’s easy to use day-to-day.",
    image: alarmKeypad,
    features: [
      "Wireless and wired alarm configurations",
      "Door, window, and PIR motion sensors",
      "Loud internal siren and optional external sounder",
      "Smart app alerts and arming/disarming (where supported)",
      "Battery backup to keep the system running during outages",
      "Optional 24/7 monitoring and response integration",
    ],
    benefits: [
      "Early warning before an intruder gets far",
      "Visible deterrent that reduces risk",
      "Simple daily use for families and staff",
      "Better protection for vulnerable entry points",
      "Confidence when you’re asleep or away",
    ],
    useCases: [
      "Houses, apartments, and villas",
      "Shops, offices, and small businesses",
      "Warehouses and storage units",
      "Schools, clinics, and community buildings",
    ],
    whyApecon:
      "We don’t do one-size-fits-all. Apecon surveys your property, recommends the right mix of sensors, and installs cleanly with a focus on reliability. After installation, we test everything with you and make sure you know exactly how to use it.",
  },

  {
    id: "cctv",
    title: "CCTV (WIRELESS & WIRED)",
    shortDescription:
      "Professional CCTV systems with clear day/night video and remote viewing—available in wireless or wired setups.",
    description:
      "CCTV is only useful when it records what you actually need to see. We install wireless and wired camera systems for homes and commercial sites, focusing on the right camera positions, correct angles, and dependable recording. You’ll be able to view your cameras remotely, and we’ll advise the best storage option—NVR/DVR or cloud—based on your site and internet reliability.",
    image: cctvCamera,
    features: [
      "Wireless and hardwired camera options",
      "HD / 4K camera choices depending on coverage needs",
      "Night vision for low-light and dark areas",
      "Mobile app remote viewing and playback",
      "Motion detection recording with alert options",
      "NVR/DVR storage and cloud options (site dependent)",
    ],
    benefits: [
      "Deters theft and unwanted activity",
      "Creates strong evidence if an incident happens",
      "Helps monitor entrances, parking, and blind spots",
      "Remote access anytime from your phone",
      "Improves safety for staff and family",
    ],
    useCases: [
      "Residential properties and apartment buildings",
      "Retail shops and showrooms",
      "Warehouses, factories, and yards",
      "Offices, reception areas, and car parks",
    ],
    whyApecon:
      "We plan CCTV properly—camera placement, recording setup, and network stability. You get a tidy installation, clear guidance on using the app, and support if you ever want to expand the system later.",
  },

  {
    id: "video-doorbell",
    title: "VIDEO DOORBELL",
    shortDescription:
      "See and speak to visitors from your phone, with motion alerts and recording for your doorstep.",
    description:
      "A video doorbell gives you control even when you’re not home. We install and configure smart video doorbells so they work smoothly with your Wi-Fi and deliver fast notifications. Whether it’s deliveries, guests, or unexpected callers, you can answer through your phone and keep a record of activity at the entrance.",
    image: videoDoorbell,
    features: [
      "HD video with wide viewing angle",
      "Two-way audio so you can speak to visitors",
      "Motion detection with instant notifications",
      "Night vision for round-the-clock visibility",
      "Recording and playback options (cloud/device dependent)",
      "Can be paired with chimes and smart home devices (where compatible)",
    ],
    benefits: [
      "Answer the door from anywhere",
      "Reduces doorstep theft and suspicious activity",
      "Helps manage deliveries more safely",
      "Useful for families, elderly relatives, and busy homes",
      "Quick visibility before opening the door",
    ],
    useCases: [
      "Homes, flats, and gated residences",
      "Rental properties and Airbnb",
      "Small offices and private entrances",
      "Family households with frequent deliveries",
    ],
    whyApecon:
      "We make sure the doorbell is installed correctly, connected properly, and positioned for the best view. We also help you set up notifications and show you how to use the app so it’s simple from day one.",
  },

  {
    id: "intercom",
    title: "INTERCOM",
    shortDescription:
      "Audio and video intercom systems for secure entry control in homes, apartments, and commercial sites.",
    description:
      "Intercoms make access control simple and secure. From basic audio systems to full video entry with multiple indoor stations, we install intercom solutions that suit the building and usage. The goal is clear communication, controlled entry, and a setup that lasts—especially for high-traffic entrances.",
    image: intercomSystem,
    features: [
      "Audio and video intercom options",
      "Indoor monitor stations and outdoor door panels",
      "Remote door/gate release (system dependent)",
      "Multi-unit support for apartments and offices",
      "Weather-resistant and vandal-resistant outdoor options",
      "Can integrate with access control in larger setups",
    ],
    benefits: [
      "Screen visitors before allowing entry",
      "Improves security at shared entrances",
      "Convenient for families and staff",
      "Adds professionalism to commercial buildings",
      "Reduces unwanted access and tailgating risk",
    ],
    useCases: [
      "Villas and houses with gates",
      "Apartment buildings and shared entrances",
      "Office receptions and business centers",
      "Clinics, schools, and managed properties",
    ],
    whyApecon:
      "Apecon helps you choose an intercom that matches your entry points and daily flow, then installs it cleanly with proper testing. We focus on reliability—clear audio, strong video, and dependable door release where required.",
  },

  {
    id: "network-connectivity",
    title: "NETWORK CONNECTIVITY SERVICES",
    shortDescription:
      "Reliable networking for security systems and businesses—Wi-Fi, cabling, switches, routers, and troubleshooting.",
    description:
      "Most security issues start with weak connectivity. We provide network connectivity services that keep CCTV, doorbells, alarms, and business devices running smoothly. From structured cabling and PoE to Wi-Fi coverage improvements, we build stable networks that don’t drop out when you need them most.",
    image: networkConnectivity,
    features: [
      "Network assessment and coverage planning",
      "Structured cabling and clean cable management",
      "Router, switch, and access point installation",
      "Wi-Fi improvement and dead-spot fixing (mesh where needed)",
      "PoE setup for cameras and network devices",
      "Basic network security setup (passwords, segmentation, firewall where applicable)",
    ],
    benefits: [
      "Stable performance for CCTV and smart security devices",
      "Better Wi-Fi coverage across the property",
      "Reduced downtime and fewer random disconnects",
      "Cleaner installations with proper cabling",
      "Easier future expansion when you add more devices",
    ],
    useCases: [
      "Homes with smart security and multiple devices",
      "Offices that need reliable connectivity",
      "Sites running IP cameras and PoE systems",
      "Warehouses and larger properties needing strong coverage",
    ],
    whyApecon:
      "We don’t just ‘add another router’. Apecon designs the network properly so your security systems stay online and perform reliably. You’ll get a tidy install, clear documentation, and support for future upgrades.",
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};

export const getServicesForNavbar = () => {
  return services.map((service) => ({
    name: service.title,
    path: `/services/${service.id}`,
  }));
};

export const getServicesForPreview = (count: number = 5) => {
  return services.slice(0, count);
};

export const serviceOptions = [
  "ALARM (WIRELESS & WIRED)",
  "CCTV (WIRELESS & WIRED)",
  "VIDEO DOORBELL",
  "INTERCOM",
  "NETWORK CONNECTIVITY SERVICES",
];
