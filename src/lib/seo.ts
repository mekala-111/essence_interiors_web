export const SITE = "https://essenceinteriors.co.in";

export const SITE_DESCRIPTION =
  "Best interior designers in Hyderabad & Telangana. Award-winning luxury interior design for homes, villas, apartments, modular kitchens, commercial offices & turnkey projects. 10+ years experience, 1000+ spaces designed.";

export const AREAS_SERVED = [
  "Hyderabad",
  "Telangana",
  "Nallagandla",
  "Gachibowli",
  "Gopanpalle",
  "Jubilee Hills",
  "Banjara Hills",
  "Kondapur",
  "HITEC City",
  "Madhapur",
  "Indiranagar",
  "Secunderabad",
  "Abdullapurmet",
  "Khajaguda",
];

export const KEYWORDS = [
  // Primary location keywords
  "interior designers in Hyderabad",
  "interior design in Hyderabad",
  "interior designer Hyderabad",
  "home interior designers Hyderabad",
  "best interior designers Hyderabad",
  "luxury interior designers Hyderabad",
  
  // Telangana specific
  "interior designers in Telangana",
  "interior design Telangana",
  "home interiors Telangana",
  
  // Service-based keywords
  "residential interior design",
  "commercial interior design",
  "office interiors",
  "apartment interiors",
  "villa interiors",
  "modular kitchen design",
  "turnkey interior projects",

  // Long-tail keywords
  "luxury home interiors Hyderabad",
  "affordable luxury interiors Hyderabad",
  "modern interior design Hyderabad",
  "contemporary interiors Hyderabad",
  "interior design company Hyderabad",
  "residential interior design Hyderabad",
  "commercial interior design Hyderabad",
  "villa interior designers Hyderabad",
  "apartment interior designers Hyderabad",
  "modular kitchen designers Hyderabad",
  "kitchen interior design Hyderabad",
  "office interior design Hyderabad",
  "restaurant interior design Hyderabad",
  
  // Area-specific keywords
  "interior designers Nallagandla",
  "interior designers Gachibowli",
  "interior designers Jubilee Hills",
  "interior designers Banjara Hills",
  "interior design Kondapur",
  "interior design HITEC City",
  
  // Trend keywords
  "contemporary home design",
  "modern luxury interiors",
  "minimalist interior design",
  "scandinavian interior design",
  "industrial interior design",
  "interior design consultation",
  "end to end interior execution",
];

export const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InteriorDesigner"],
  name: "Essence Interiors",
  description: SITE_DESCRIPTION,
  url: SITE,
  telephone: "+919666199943",
  email: "info@essenceinteriors.co.in",
  image: `${SITE}/images/luxury-interior-design-hyderabad-01.jpg`,
  logo: `${SITE}/images/essence-interiors-hyderabad-logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "HUDA Layout, Gopanpalle, Nallagandla",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500019",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4676365,
    longitude: 78.3076287,
  },
  areaServed: AREAS_SERVED.map((area) => ({
    "@type": "City",
    name: area,
  })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  priceRange: "₹₹₹",
  sameAs: [
    "https://www.instagram.com/essenceinteriors.hyd",
    "https://www.facebook.com/share/1CrC9pQ8sb/",
    "https://www.youtube.com/@EssenceInteriors-hyd",
    "https://www.pinterest.com/essenceinteriors",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "250",
  },
};

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Essence Interiors",
  description: SITE_DESCRIPTION,
  url: SITE,
  logo: `${SITE}/images/essence-interiors-hyderabad-logo.png`,
  sameAs: [
    "https://www.instagram.com/essenceinteriors.hyd",
    "https://www.facebook.com/share/1CrC9pQ8sb/",
    "https://www.youtube.com/@EssenceInteriors-hyd",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+919666199943",
    email: "info@essenceinteriors.co.in",
  },
};

export const SERVICES_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Essence Interiors",
  url: SITE,
  image: `${SITE}/images/luxury-interior-design-hyderabad-01.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "HUDA Layout, Gopanpalle, Nallagandla",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500019",
    addressCountry: "IN",
  },
  hasOfferingDescription: [
    {
      "@type": "Offer",
      name: "Residential Interior Design",
      description: "Custom residential interior design and execution for homes and apartments",
      areaServed: AREAS_SERVED,
    },
    {
      "@type": "Offer",
      name: "Commercial Interior Design",
      description: "Office and commercial space interior design",
      areaServed: AREAS_SERVED,
    },
    {
      "@type": "Offer",
      name: "Luxury Villa Design",
      description: "Premium villa interior design",
      areaServed: AREAS_SERVED,
    },
    {
      "@type": "Offer",
      name: "Modular Kitchen Design",
      description: "Modern modular kitchen design and installation",
      areaServed: AREAS_SERVED,
    },
    {
      "@type": "Offer",
      name: "Turnkey Interior Projects",
      description: "End-to-end interior design and execution",
      areaServed: AREAS_SERVED,
    },
  ],
};
