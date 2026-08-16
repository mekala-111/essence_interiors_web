export const SITE = "https://essenceinteriors.co.in";

export const SITE_DESCRIPTION =
  "Interior designers in Hyderabad for homes, villas, modular kitchens and turnkey interiors. Essence Interiors designs and executes residential and commercial spaces in Nallagandla and across Hyderabad.";

export const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: "Essence Interiors",
  url: SITE,
  telephone: "+919666199943",
  email: "info@essenceinteriors.co.in",
  image: `${SITE}/images/luxury-interior-design-hyderabad-01.jpg`,
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
  areaServed: ["Hyderabad", "Nallagandla", "Gachibowli", "Gopanpalle"],
  openingHours: "Mo-Sa 10:00-19:00",
  priceRange: "₹₹₹",
  sameAs: [
    "https://www.instagram.com/essenceinteriors.hyd",
    "https://www.facebook.com/share/1CrC9pQ8sb/",
    "https://www.youtube.com/@EssenceInteriors-hyd",
  ],
};
