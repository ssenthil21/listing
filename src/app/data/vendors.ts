import type { VendorProfile } from "../types/models";
import { landingBusinesses } from "./landing";

const vendorSpecifics: Record<string, { address: string; workingHours: string }> = {
  "stellar-events": {
    address: "401 Wilshire Blvd, Suite 210, Los Angeles, CA",
    workingHours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
  "green-garden": {
    address: "88 Alberta Street, Portland, OR",
    workingHours: "Daily: 8:00 AM - 8:00 PM",
  },
  "metro-realty": {
    address: "121 Southport Ave, Chicago, IL",
    workingHours: "Mon - Fri: 9:00 AM - 7:00 PM",
  },
  "tech-forward": {
    address: "77 Innovation Way, Austin, TX",
    workingHours: "Mon - Fri: 8:00 AM - 6:00 PM",
  },
};

export const vendorProfiles: VendorProfile[] = landingBusinesses.map((business) => {
  const specifics = vendorSpecifics[business.id] ?? {
    address: business.location,
    workingHours: "Contact for schedule",
  };

  return {
    ...business,
    address: specifics.address,
    workingHours: specifics.workingHours,
    news: business.news ?? [],
    team: business.team ?? [],
    testimonials: business.testimonials,
    reviews: business.reviews,
    offers: business.offers,
    services: business.services,
    gallery: business.gallery,
    activities: business.activities,
  };
});

export const getVendorBySlug = (slug: string) =>
  vendorProfiles.find((vendor) => vendor.slug === slug);
