import type { Metadata } from "next";
import { notFound } from "next/navigation";

import VendorNav from "../../components/vendor/vendor-nav";
import VendorHeader from "../../components/vendor/vendor-header";
import MediaSlider from "../../components/vendor/media-slider";
import AboutSection from "../../components/vendor/about-section";
import OffersSection from "../../components/vendor/offers-section";
import ServicesSection from "../../components/vendor/services-section";
import VendorTestimonialsSection from "../../components/vendor/testimonials-section";
import ReviewsSection from "../../components/vendor/reviews-section";
import AppointmentCta from "../../components/vendor/appointment-cta";
import NewsBlogs from "../../components/vendor/news-blogs";
import TeamSection from "../../components/vendor/team-section";
import Footer from "../../components/footer/footer";
import BackToTop from "../../components/back-to-top";
import { getVendorBySlug, vendorProfiles } from "../../data/vendors";

interface VendorPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: VendorPageProps): Promise<Metadata> {
  const vendor = getVendorBySlug(params.id);
  if (!vendor) {
    return {
      title: "Vendor not found | Qtick",
    };
  }

  return {
    title: `${vendor.name} | Qtick Vendor Profile`,
    description: vendor.tagline,
  };
}

export function generateStaticParams() {
  return vendorProfiles.map((vendor) => ({ id: vendor.slug }));
}

const VendorPage = ({ params }: VendorPageProps) => {
  const vendor = getVendorBySlug(params.id);

  if (!vendor) {
    notFound();
  }

  return (
    <>
      <VendorNav />
      <VendorHeader vendor={vendor} />
      <MediaSlider vendor={vendor} />
      <AboutSection vendor={vendor} />
      <OffersSection vendor={vendor} />
      <ServicesSection vendor={vendor} />
      <VendorTestimonialsSection vendor={vendor} />
      <ReviewsSection vendor={vendor} />
      <AppointmentCta vendor={vendor} />
      <NewsBlogs vendor={vendor} />
      <TeamSection vendor={vendor} />
      <Footer />
      <BackToTop />
    </>
  );
};

export default VendorPage;
