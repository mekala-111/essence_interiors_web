export type ProjectDetail = {
  slug: string;
  name: string;
  location: string;
  category: string;
  area: string;
  year: string;
  concept: string;
  rooms: string[];
  materials: string[];
  testimonial: { quote: string; name: string; project: string };
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const RAW_PROJECTS: Omit<ProjectDetail, "slug">[] = [
  {
    name: "The Modern Villa",
    location: "Hyderabad",
    category: "Villa",
    area: "4,500 sq.ft.",
    year: "2024",
    concept:
      "The brief called for a home that felt calm and expansive — we opened up the ground floor into a single flowing volume, using warm stone and timber to anchor each zone without walls.",
    rooms: ["Living Room", "Dining", "Kitchen", "Master Bedroom", "Guest Bedroom", "Bathroom"],
    materials: ["Italian Marble", "Teak Wood", "Brushed Brass", "Linen Fabric", "Natural Stone", "Ambient Lighting"],
    testimonial: {
      quote: "Essence turned a difficult layout into the most functional, beautiful home we could imagine.",
      name: "The Reddy Family",
      project: "Villa · Hyderabad",
    },
  },
  {
    name: "Serene Residence",
    location: "Bangalore",
    category: "Residential",
    area: "3,200 sq.ft.",
    year: "2023",
    concept:
      "A young family wanted a home that felt quiet against a busy city — we leaned into soft neutrals, deep-set joinery and diffused lighting to slow every room down.",
    rooms: ["Living Room", "Dining", "Kitchen", "Master Bedroom", "Kids Bedroom", "Study"],
    materials: ["Oak Veneer", "Limewash Paint", "Cane Webbing", "Bouclé Fabric", "Terrazzo", "Brass Hardware"],
    testimonial: {
      quote: "Every corner of our home now feels intentional. Essence listened to how we actually live.",
      name: "Ananya & Rohit Sharma",
      project: "Residential · Bangalore",
    },
  },
  {
    name: "Luxury Apartment",
    location: "Mumbai",
    category: "Apartment",
    area: "2,100 sq.ft.",
    year: "2024",
    concept:
      "A high-rise apartment with sweeping views needed interiors that wouldn't compete with the skyline — we kept the palette restrained and let the materials do the talking.",
    rooms: ["Living Room", "Dining", "Kitchen", "Master Bedroom", "Home Office", "Balcony Lounge"],
    materials: ["Book-matched Marble", "Smoked Oak", "Fluted Glass", "Velvet Upholstery", "Matte Brass", "Wool Rugs"],
    testimonial: {
      quote: "Sophisticated without ever feeling cold. It genuinely feels like the best version of our home.",
      name: "Priya Menon",
      project: "Apartment · Mumbai",
    },
  },
  {
    name: "Elegant Workspace",
    location: "Hyderabad",
    category: "Commercial",
    area: "6,000 sq.ft.",
    year: "2023",
    concept:
      "A growing team needed an office that supported focus and collaboration in equal measure — we zoned the floor plate around light, acoustics and movement.",
    rooms: ["Reception", "Open Workspace", "Meeting Room", "Boardroom", "Breakout Lounge", "Pantry"],
    materials: ["Engineered Wood", "Acoustic Felt", "Powder-coated Steel", "Frosted Glass", "Polished Concrete", "Task Lighting"],
    testimonial: {
      quote: "From the first sketch to final handover, communication was clear and the execution flawless.",
      name: "Vikram Reddy",
      project: "Commercial Office · Hyderabad",
    },
  },
  {
    name: "Timeless Bedroom",
    location: "Pune",
    category: "Residential",
    area: "1,800 sq.ft.",
    year: "2022",
    concept:
      "A compact home built entirely around a single, generous master suite — every material choice was made to make the small footprint feel unhurried.",
    rooms: ["Master Bedroom", "Walk-in Wardrobe", "Ensuite Bathroom", "Reading Nook", "Living Room", "Kitchenette"],
    materials: ["Handloom Linen", "White Oak", "Honed Marble", "Rattan", "Brushed Nickel", "Plaster Finish"],
    testimonial: {
      quote: "They transformed a difficult layout into the most functional, beautiful home we could imagine.",
      name: "The Kapoor Family",
      project: "Residential · Pune",
    },
  },
  {
    name: "Modern Kitchen",
    location: "Chennai",
    category: "Residential",
    area: "400 sq.ft.",
    year: "2024",
    concept:
      "A dedicated modular kitchen brief focused on storage discipline and daily flow, built around a working island that anchors the whole plan.",
    rooms: ["Kitchen Island", "Pantry Wall", "Breakfast Counter", "Utility Nook", "Dining Corner", "Storage Wall"],
    materials: ["Quartz Countertop", "Matte Laminate", "Stainless Steel", "Handleless Fittings", "LED Strip Lighting", "Anti-skid Tile"],
    testimonial: {
      quote: "The attention to detail on materials and finishes was remarkable. Every corner feels considered.",
      name: "Neha Malhotra",
      project: "Residential · Chennai",
    },
  },
  {
    name: "Urban Restaurant",
    location: "Goa",
    category: "Hospitality",
    area: "3,500 sq.ft.",
    year: "2023",
    concept:
      "A coastal restaurant brief asked for atmosphere first — we built the space around natural texture, low warm light and sightlines to the open kitchen.",
    rooms: ["Main Dining", "Bar", "Private Dining", "Open Kitchen", "Outdoor Deck", "Waiting Lounge"],
    materials: ["Reclaimed Timber", "Terracotta Tile", "Rattan Weave", "Blackened Steel", "Linen Drapery", "Warm Brass"],
    testimonial: {
      quote: "Essence understood exactly what we wanted before we could put it into words. The result feels effortless.",
      name: "Lumen Café Ownership",
      project: "Hospitality · Goa",
    },
  },
  {
    name: "North Star Offices",
    location: "HITEC City",
    category: "Office Spaces",
    area: "6,000 sq.ft.",
    year: "2024",
    concept:
      "A tech company's new headquarters needed to feel premium without losing warmth — the design balances corporate polish with natural material texture.",
    rooms: ["Reception", "Collaboration Hub", "Focus Pods", "Boardroom", "Cafeteria", "Terrace Lounge"],
    materials: ["Terrazzo Flooring", "Walnut Veneer", "Brushed Bronze", "Recycled Felt", "Glass Partitions", "Statement Lighting"],
    testimonial: {
      quote: "A workspace our whole team is genuinely proud to bring clients into.",
      name: "North Star Leadership Team",
      project: "Office Spaces · HITEC City",
    },
  },
];

export const PROJECTS: ProjectDetail[] = RAW_PROJECTS.map((p) => ({ ...p, slug: slugify(p.name) }));

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, count = 3): ProjectDetail[] {
  const others = PROJECTS.filter((p) => p.slug !== slug);
  return others.slice(0, count);
}
