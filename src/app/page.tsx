import LandingHeader from "./components/landing/header/landing-header";
import SearchSection from "./components/landing/search/search-section";
import CategoryGrid from "./components/landing/category-grid";
import PopularBusinesses from "./components/landing/popular-businesses";
import TestimonialsSection from "./components/landing/testimonials-section";
import RecentActivities from "./components/landing/recent-activities";
import VipPromotions from "./components/landing/vip-promotions";
import NewsSection from "./components/landing/news-section";
import Footer from "./components/footer/footer";
import BackToTop from "./components/back-to-top";
import { SearchProvider } from "./components/search/search-context";

export default function Home() {
  return (
    <SearchProvider>
      <LandingHeader />
      <SearchSection />
      <CategoryGrid />
      <PopularBusinesses />
      <TestimonialsSection />
      <RecentActivities />
      <VipPromotions />
      <NewsSection />
      <Footer />
      <BackToTop />
    </SearchProvider>
  );
}
