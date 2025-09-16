import { BsBriefcase, BsCupHot, BsHeartPulse, BsHouseCheck, BsLaptop, BsPalette, BsShop } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import type {
  Activity,
  Business,
  Category,
  NewsArticle,
  Promotion,
  Testimonial,
} from "../types/models";

export const landingCategories: Category[] = [
  {
    id: "hospitality",
    name: "Hospitality",
    slug: "hospitality",
    icon: BsCupHot,
    description: "Restaurants, cafés, and catering services.",
    featured: true,
  },
  {
    id: "wellness",
    name: "Health & Wellness",
    slug: "health-wellness",
    icon: BsHeartPulse,
    description: "Gyms, spas, and personal care experts.",
    featured: true,
  },
  {
    id: "events",
    name: "Events & Wedding",
    slug: "events-wedding",
    icon: BsPalette,
    description: "Event planners, venues, and stylists.",
    featured: true,
  },
  {
    id: "technology",
    name: "Technology",
    slug: "technology",
    icon: BsLaptop,
    description: "IT consultants, developers, and tech shops.",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    slug: "real-estate",
    icon: BsHouseCheck,
    description: "Agents, brokers, and property services.",
  },
  {
    id: "professional",
    name: "Professional Services",
    slug: "professional-services",
    icon: BsBriefcase,
    description: "Consultants, legal, and accounting services.",
  },
  {
    id: "retail",
    name: "Retail & Boutiques",
    slug: "retail",
    icon: BsShop,
    description: "Independent retailers and specialty stores.",
  },
  {
    id: "creative",
    name: "Creative Studios",
    slug: "creative-studios",
    icon: FaRegLightbulb,
    description: "Design, marketing, and creative agencies.",
  },
];

export const landingBusinesses: Business[] = [
  {
    id: "stellar-events",
    name: "Stellar Event Planners",
    slug: "stellar-event-planners",
    tagline: "Crafting unforgettable celebrations",
    description:
      "Stellar Event Planners delivers bespoke wedding and corporate experiences with meticulous attention to detail and a full-service team of stylists, coordinators, and production experts.",
    location: "Los Angeles, CA",
    categories: ["events", "creative"],
    rating: 4.9,
    reviewCount: 164,
    isPaid: true,
    heroImage: "/img/list-3.jpg",
    gallery: [
      { id: "stellar-1", type: "image", src: "/img/list-3.jpg", alt: "Decorated wedding venue" },
      { id: "stellar-2", type: "image", src: "/img/list-7.jpg", alt: "Outdoor ceremony setup" },
      { id: "stellar-3", type: "image", src: "/img/list-9.jpg", alt: "Corporate gala reception" },
    ],
    services: [
      { id: "stellar-service-1", name: "Full-Service Planning", summary: "Concept, vendor management, and on-site coordination." },
      { id: "stellar-service-2", name: "Event Styling", summary: "In-house décor, floral artistry, and lighting design." },
    ],
    offers: [
      {
        id: "stellar-offer-1",
        title: "Complimentary Venue Walkthrough",
        description: "Schedule a free planning consultation and tour our partner venues.",
        expiresOn: "2025-03-31",
        isSponsored: true,
      },
    ],
    testimonials: [
      {
        id: "stellar-testimonial-1",
        author: "Chelsea Morgan",
        role: "Bride",
        rating: 5,
        content: "Our day was effortless thanks to Stellar's proactive planning team.",
        avatar: "/img/team-4.jpg",
      },
    ],
    reviews: [
      {
        id: "stellar-review-1",
        author: "James Porter",
        rating: 5,
        date: "2024-11-09",
        comment: "Impeccable attention to detail and seamless vendor coordination.",
      },
    ],
    promotions: [
      {
        id: "stellar-promo-1",
        title: "Premium Spotlight Listing",
        description: "Featured in the top carousel for couples searching in Los Angeles.",
        vendorName: "Stellar Event Planners",
        expiresOn: "2025-02-28",
        isPaid: true,
      },
    ],
    activities: [
      {
        id: "stellar-activity-1",
        title: "Published real wedding inspiration",
        description: "Dive into our destination wedding checklist for 2025 couples.",
        publishedOn: "2024-12-18",
        category: "Blog",
        link: "#",
      },
    ],
    news: [
      {
        id: "stellar-news-1",
        title: "Top 10 décor trends for modern receptions",
        excerpt: "Discover the design details couples are requesting for 2025 ceremonies.",
        publishedOn: "2024-12-01",
        link: "#",
      },
    ],
    team: [
      { id: "stellar-team-1", name: "Riley Summers", role: "Creative Director", photo: "/img/team-2.jpg" },
      { id: "stellar-team-2", name: "Monica Lu", role: "Lead Planner", photo: "/img/team-3.jpg" },
    ],
    contactEmail: "hello@stellarevents.com",
    contactPhone: "+1 (323) 555-9012",
    website: "https://stellarevents.example.com",
    socialLinks: {
      instagram: "https://instagram.com/stellarevents",
      pinterest: "https://pinterest.com/stellarevents",
    },
  },
  {
    id: "green-garden",
    name: "Green Garden Wellness Spa",
    slug: "green-garden-wellness",
    tagline: "Holistic treatments for mind and body",
    description:
      "Green Garden offers restorative spa rituals, personalised wellness plans, and eco-conscious products for a balanced lifestyle.",
    location: "Portland, OR",
    categories: ["wellness"],
    rating: 4.7,
    reviewCount: 98,
    isPaid: true,
    heroImage: "/img/list-4.jpg",
    gallery: [
      { id: "green-1", type: "image", src: "/img/list-4.jpg", alt: "Spa lounge" },
      { id: "green-2", type: "image", src: "/img/list-8.jpg", alt: "Massage therapy" },
      { id: "green-3", type: "image", src: "/img/list-10.jpg", alt: "Wellness products" },
    ],
    services: [
      { id: "green-service-1", name: "Signature Massage", summary: "Therapeutic treatment using organic oils." },
      { id: "green-service-2", name: "Detox Facial", summary: "Botanical skincare for radiant results." },
      { id: "green-service-3", name: "Wellness Coaching", summary: "Personalised plans from certified therapists." },
    ],
    offers: [
      {
        id: "green-offer-1",
        title: "VIP Membership Launch",
        description: "Join now for 15% off seasonal treatments and access exclusive events.",
        expiresOn: "2025-04-30",
        isSponsored: true,
      },
    ],
    testimonials: [
      {
        id: "green-testimonial-1",
        author: "Maya Thompson",
        role: "Member",
        rating: 5,
        content: "Every visit feels like a mini retreat – the staff truly cares.",
        avatar: "/img/team-5.jpg",
      },
    ],
    reviews: [
      {
        id: "green-review-1",
        author: "Lucia Fernandez",
        rating: 5,
        date: "2024-10-12",
        comment: "Beautiful ambience and thoughtful service packages.",
      },
    ],
    promotions: [
      {
        id: "green-promo-1",
        title: "Homepage hero placement",
        description: "Featured for wellness searches across the Pacific Northwest.",
        vendorName: "Green Garden Wellness Spa",
        expiresOn: "2025-01-31",
        isPaid: true,
      },
    ],
    activities: [
      {
        id: "green-activity-1",
        title: "Hosted detox workshop",
        description: "An interactive session on building sustainable wellness routines.",
        publishedOn: "2024-11-30",
        category: "Events",
        link: "#",
      },
    ],
    news: [
      {
        id: "green-news-1",
        title: "Herbal rituals to reset for spring",
        excerpt: "Our therapists share their at-home care essentials.",
        publishedOn: "2024-12-18",
        link: "#",
      },
    ],
    team: [
      { id: "green-team-1", name: "Sophie Nolan", role: "Founder", photo: "/img/team-6.jpg" },
      { id: "green-team-2", name: "Evan Patel", role: "Lead Therapist", photo: "/img/team-1.jpg" },
    ],
    contactEmail: "hello@greengarden.com",
    contactPhone: "+1 (503) 555-8123",
    website: "https://greengardenspa.example.com",
  },
  {
    id: "metro-realty",
    name: "Metro Realty Collective",
    slug: "metro-realty-collective",
    tagline: "Where modern living meets expert guidance",
    description:
      "Metro Realty Collective pairs clients with dedicated neighbourhood experts and data-driven insights to secure dream properties across urban centres.",
    location: "Chicago, IL",
    categories: ["real-estate", "professional"],
    rating: 4.8,
    reviewCount: 142,
    isPaid: false,
    heroImage: "/img/list-2.jpg",
    gallery: [
      { id: "metro-1", type: "image", src: "/img/list-2.jpg", alt: "Modern downtown apartment" },
      { id: "metro-2", type: "image", src: "/img/list-11.jpg", alt: "Agent meeting with clients" },
    ],
    services: [
      { id: "metro-service-1", name: "Buyer Representation", summary: "Negotiation support and property tours tailored to your goals." },
      { id: "metro-service-2", name: "Seller Strategy", summary: "Listing preparation, staging, and digital marketing." },
      { id: "metro-service-3", name: "Investment Advisory", summary: "Market research and portfolio planning for investors." },
    ],
    offers: [
      {
        id: "metro-offer-1",
        title: "Complimentary Market Report",
        description: "Receive quarterly insights for your neighbourhood.",
      },
    ],
    testimonials: [
      {
        id: "metro-testimonial-1",
        author: "Devon Harper",
        role: "First-time buyer",
        rating: 5,
        content: "The team made every step transparent and manageable.",
      },
    ],
    reviews: [
      {
        id: "metro-review-1",
        author: "Linette Gray",
        rating: 4,
        date: "2024-09-04",
        comment: "Responsive, detail-oriented agents who truly advocate for clients.",
      },
    ],
    activities: [
      {
        id: "metro-activity-1",
        title: "Shared smart home buying checklist",
        description: "Download our updated relocation guide for 2025 movers.",
        publishedOn: "2024-12-08",
        category: "Resource",
        link: "#",
      },
    ],
    news: [
      {
        id: "metro-news-1",
        title: "Navigating low-inventory markets",
        excerpt: "Learn strategies to stay competitive in bidding wars.",
        publishedOn: "2024-11-15",
        link: "#",
      },
    ],
    team: [
      { id: "metro-team-1", name: "Marcus Lee", role: "Broker", photo: "/img/team-8.jpg" },
    ],
  },
  {
    id: "tech-forward",
    name: "Tech Forward Labs",
    slug: "tech-forward-labs",
    tagline: "Innovation partners for digital-first brands",
    description:
      "Tech Forward Labs builds scalable digital products, offers CX strategy, and powers growth for startups and enterprise teams.",
    location: "Austin, TX",
    categories: ["technology", "creative"],
    rating: 4.6,
    reviewCount: 87,
    isPaid: true,
    heroImage: "/img/list-6.jpg",
    gallery: [
      { id: "tech-1", type: "image", src: "/img/list-6.jpg", alt: "Developers collaborating" },
      { id: "tech-2", type: "image", src: "/img/list-12.jpg", alt: "User experience workshop" },
    ],
    services: [
      { id: "tech-service-1", name: "Product Discovery", summary: "From research to proof of concept in four weeks." },
      { id: "tech-service-2", name: "Design Systems", summary: "Accessible and scalable UI kits for distributed teams." },
      { id: "tech-service-3", name: "Growth Experiments", summary: "Data-led CRO programmes with measurable ROI." },
    ],
    offers: [
      {
        id: "tech-offer-1",
        title: "Q1 Innovation Sprint",
        description: "Book a discovery sprint and receive a roadmap workshop on us.",
        expiresOn: "2025-03-15",
        isSponsored: true,
      },
    ],
    testimonials: [
      {
        id: "tech-testimonial-1",
        author: "Priya Menon",
        role: "VP Product",
        rating: 5,
        content: "They shipped our MVP in record time without sacrificing quality.",
        avatar: "/img/team-7.jpg",
      },
    ],
    reviews: [
      {
        id: "tech-review-1",
        author: "Andrei Popescu",
        rating: 4,
        date: "2024-08-19",
        comment: "Transparent project cadence and outstanding communication.",
      },
    ],
    promotions: [
      {
        id: "tech-promo-1",
        title: "Featured webinar series",
        description: "Sponsor of our quarterly SMB technology roundtable.",
        vendorName: "Tech Forward Labs",
        expiresOn: "2025-04-05",
        isPaid: true,
      },
    ],
    activities: [
      {
        id: "tech-activity-1",
        title: "Hosted a design thinking workshop",
        description: "Sharing frameworks for inclusive digital experiences.",
        publishedOn: "2024-12-22",
        category: "Event",
        link: "#",
      },
    ],
    news: [
      {
        id: "tech-news-1",
        title: "AI roadmap for customer service teams",
        excerpt: "Practical steps for integrating AI copilots into service flows.",
        publishedOn: "2024-12-10",
        link: "#",
      },
    ],
    team: [
      { id: "tech-team-1", name: "Linh Tran", role: "Managing Partner", photo: "/img/team-9.jpg" },
      { id: "tech-team-2", name: "Jordan Smith", role: "Engineering Lead", photo: "/img/team-10.jpg" },
    ],
  },
];

export const landingTestimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    author: "Daniel Reed",
    role: "Vendor Partner",
    rating: 5,
    content: "QTick helped us reach a 30% increase in qualified leads within the first month.",
    avatar: "/img/team-2.jpg",
  },
  {
    id: "testimonial-2",
    author: "Iris Abbot",
    role: "Verified Customer",
    rating: 4.5,
    content: "I love how easy it is to filter businesses by neighbourhood and service type.",
    avatar: "/img/team-3.jpg",
  },
  {
    id: "testimonial-3",
    author: "Moses Okafor",
    role: "Agency Owner",
    rating: 5,
    content: "The paid promotions keep our brand top-of-mind for high-intent searchers.",
    avatar: "/img/team-1.jpg",
  },
];

export const landingActivities: Activity[] = [
  {
    id: "activity-1",
    title: "QTick launches vendor academy",
    description: "Upskill with on-demand workshops on brand storytelling and lead nurturing.",
    publishedOn: "2024-12-05",
    category: "Announcement",
    link: "#",
  },
  {
    id: "activity-2",
    title: "Insights: What customers searched in November",
    description: "Explore trending industries and keywords from 50k+ platform searches.",
    publishedOn: "2024-11-26",
    category: "Blog",
    link: "#",
  },
  {
    id: "activity-3",
    title: "Partner spotlight: Stellar Event Planners",
    description: "Learn how Stellar translated platform leads into premium bookings.",
    publishedOn: "2024-11-18",
    category: "Case Study",
    link: "#",
  },
];

export const landingPromotions: Promotion[] = [
  {
    id: "promo-1",
    title: "Wellness Winter Escape",
    description: "Save 20% on weekday bookings at Green Garden Wellness Spa.",
    vendorName: "Green Garden Wellness Spa",
    expiresOn: "2025-02-15",
    isPaid: true,
  },
  {
    id: "promo-2",
    title: "Tech Forward Discovery Sprint",
    description: "Kick-start your 2025 roadmap with our facilitated innovation sprint.",
    vendorName: "Tech Forward Labs",
    expiresOn: "2025-03-05",
    isPaid: true,
  },
  {
    id: "promo-3",
    title: "Metro Realty Concierge Tours",
    description: "Book a neighbourhood tour and receive curated listings within 24 hours.",
    vendorName: "Metro Realty Collective",
    expiresOn: "2025-01-20",
    isPaid: true,
  },
];

export const landingNews: NewsArticle[] = [
  {
    id: "news-1",
    title: "How QTick personalises discovery for returning users",
    excerpt: "Understand the data signals that power our recommendation engine.",
    publishedOn: "2024-12-12",
    link: "#",
  },
  {
    id: "news-2",
    title: "Best practices for crafting high-converting vendor profiles",
    excerpt: "Use storytelling frameworks that transform browsers into booked clients.",
    publishedOn: "2024-11-30",
    link: "#",
  },
  {
    id: "news-3",
    title: "Introducing VIP promotions for seasonal campaigns",
    excerpt: "Drive urgency with limited-time offers featuring premium placement.",
    publishedOn: "2024-11-20",
    link: "#",
  },
];
