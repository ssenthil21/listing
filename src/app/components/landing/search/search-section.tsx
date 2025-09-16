"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { landingCategories } from "../../../data/landing";
import BusinessCard from "../business-card";
import { useSearch } from "../../search/search-context";

import "swiper/css";

const CATEGORY_IMAGES = [
  "/img/cats/catt-1.jpg",
  "/img/cats/catt-2.jpg",
  "/img/cats/catt-3.jpg",
  "/img/cats/catt-4.jpg",
  "/img/cats/catt-5.jpg",
  "/img/cats/catt-6.jpg",
  "/img/cats/catt-7.jpg",
  "/img/cats/catt-8.jpg",
];

const SearchSection = () => {
  const router = useRouter();
  const { results, query, isSearching, clearSearch } = useSearch();

  const hasQuery = Boolean(query.location.trim() || query.keywords.trim());
  const hasResults = results.length > 0;

  const trendingCategories = useMemo(
    () =>
      landingCategories.map((category, index) => ({
        ...category,
        image: CATEGORY_IMAGES[index % CATEGORY_IMAGES.length],
      })),
    []
  );

  const handleCategoryNavigate = (slug: string) => {
    router.push(`/list-layout-01?category=${slug}`);
  };

  return (
    <section className="py-5 bg-white" id="categories" aria-live="polite">
      <div className="container">
        <div className="row align-items-center justify-content-center mb-4">
          <div className="col-xl-7 col-lg-8 col-md-11 col-sm-12">
            <div className="secHeading-wrap text-center">
              <h3 className="sectionHeading">
                Hot &amp; Trending <span className="text-primary">Categories</span>
              </h3>
              <p>Explore all types of popular category for submit your listings</p>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-xl-12">
            <Swiper
              slidesPerView={6}
              spaceBetween={24}
              modules={[Autoplay]}
              loop={true}
              autoplay={{ delay: 2200, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
                1400: { slidesPerView: 6 },
              }}
            >
              {trendingCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <SwiperSlide className="singleCategory" key={category.id}>
                    <button
                      type="button"
                      className="categoryBox"
                      onClick={() => handleCategoryNavigate(category.slug)}
                      aria-label={`Browse ${category.name}`}
                    >
                      <div className="categoryCapstions">
                        <div className="catsIcons">
                          <div className="icoBoxx">
                            <Icon aria-hidden={true} />
                          </div>
                        </div>
                        <div className="catsTitle">
                          <h5>{category.name}</h5>
                        </div>
                        <div className="CatsLists">
                          <span className="categorycounter">{category.description}</span>
                        </div>
                      </div>
                      <Image
                        src={category.image}
                        width={400}
                        height={260}
                        className="img-fluid"
                        alt={`${category.name} background`}
                      />
                    </button>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        {hasQuery && (
          <div className="mt-5">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-4">
              <div>
                <h2 className="fw-bold mb-1">Search results</h2>
                <p className="mb-0 text-secondary">
                  Showing matches for <strong>{query.keywords || "all services"}</strong> in {" "}
                  <strong>{query.location || "all locations"}</strong>
                </p>
              </div>
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={clearSearch}>
                Clear search
              </button>
            </div>

            {isSearching && <div className="alert alert-info">Searching businesses...</div>}

            {hasResults ? (
              <div className="row g-4">
                {results.map((business) => (
                  <div className="col-md-6 col-lg-4" key={business.id}>
                    <BusinessCard business={business} />
                  </div>
                ))}
              </div>
            ) : (
              !isSearching && (
                <div className="alert alert-warning" role="status">
                  No listings matched your filters. Try broadening your keywords or exploring another category above.
                </div>
              )
            )}
          </div>
        )}

        {!hasQuery && !isSearching && (
          <div className="mt-4">
            <h6 className="fw-semibold">Related tools</h6>
            <div className="d-flex flex-wrap gap-2">
              <Link href="#promotions" className="badge bg-soft-primary text-primary rounded-pill px-3 py-2">
                View VIP promotions
              </Link>
              <Link href="#testimonials" className="badge bg-soft-primary text-primary rounded-pill px-3 py-2">
                Hear from customers
              </Link>
              <Link href="#news" className="badge bg-soft-primary text-primary rounded-pill px-3 py-2">
                Explore platform news
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchSection;
