"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { BsBriefcase, BsGeoAlt, BsPatchCheckFill, BsStar, BsSuitHeart } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { landingBusinesses, landingCategories } from "../../data/landing";
import { useAuth } from "../providers/auth-context";
import { useSearch } from "../search/search-context";
import { isDefaultRatingRange } from "../../utils/search";

import "swiper/css";
import "swiper/css/pagination";

const ratingClass = (rating: number) => {
  if (rating >= 4.7) {
    return "excellent";
  }
  if (rating >= 4.4) {
    return "good";
  }
  if (rating >= 4.0) {
    return "midium";
  }
  return "poor";
};

const PopularBusinesses = () => {
  const { user } = useAuth();
  const { results, query } = useSearch();

  const categoryLookup = useMemo(() => {
    const entries = landingCategories.map((category, index) => [
      category.id,
      {
        icon: category.icon,
        name: category.name,
        style: `cats-${(index % 10) + 1}`,
      },
    ] as const);
    return new Map(entries);
  }, []);

  const businesses = useMemo(() => {
    const paidListings = landingBusinesses.filter((business) => business.isPaid);

    if (!user) {
      return paidListings;
    }

    const preferenceMatches = landingBusinesses.filter((business) =>
      user.preferences?.some((preference) => business.categories.includes(preference))
    );

    const personalised = preferenceMatches.length ? preferenceMatches : paidListings;
    const unique = new Map(personalised.map((business) => [business.id, business]));
    paidListings.forEach((business) => {
      if (!unique.has(business.id)) {
        unique.set(business.id, business);
      }
    });

    return Array.from(unique.values());
  }, [user]);

  return (
    <section className="py-5 light-top-gredient" id="popular">
      <div className="container">
        <div className="row align-items-center justify-content-center mb-4">
          <div className="col-xl-7 col-lg-8 col-md-11 col-sm-12">
            <div className="secHeading-wrap text-center">
              <h3 className="sectionHeading">
                Trending &amp; Popular <span className="text-primary">Listings</span>
              </h3>
              <p>Explore Hot &amp; Popular Business Listings</p>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-xl-12">
            <Swiper
              slidesPerView={4}
              spaceBetween={15}
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1440: { slidesPerView: 4 },
              }}
            >
              {businesses.map((business) => {
                const primaryCategoryId = business.categories[0];
                const categoryMeta = primaryCategoryId ? categoryLookup.get(primaryCategoryId) : undefined;
                const CategoryIcon = categoryMeta?.icon ?? BsBriefcase;
                const categoryName = categoryMeta?.name ?? "Featured";
                const categoryStyle = categoryMeta?.style ?? "";

                return (
                  <SwiperSlide className="singleItem" key={business.id}>
                    <div className="listingitem-container">
                      <div className="singlelisting-item">
                        <div className="listing-top-item">
                          <Link
                            href={`/single-listing-01?listing=${business.slug}`}
                            className="topLink"
                            aria-label={`View details for ${business.name}`}
                          >
                            <div className="position-absolute start-0 top-0 ms-3 mt-3 z-2">
                              <div className="d-flex align-items-center justify-content-start gap-2 flex-wrap">
                                <span className="badge badge-xs text-uppercase listOpen">Premium</span>
                                <span className="badge badge-xs badge-transparent">
                                  <BsStar className="me-1" aria-hidden={true} />
                                  {business.rating.toFixed(1)}
                                </span>
                                {business.isPaid && (
                                  <span className="badge badge-xs badge-transparent">
                                    <BsPatchCheckFill className="me-1" aria-hidden={true} /> Featured
                                  </span>
                                )}
                              </div>
                            </div>
                            <Image
                              src={business.heroImage}
                              width={600}
                              height={420}
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="img-fluid"
                              alt={business.name}
                            />
                          </Link>
                          <div className="position-absolute end-0 bottom-0 me-3 mb-3 z-2">
                            <Link
                              href={`/single-listing-01?listing=${business.slug}`}
                              className="bookmarkList"
                              data-bs-toggle="tooltip"
                              data-bs-title="Save Listing"
                              aria-label={`Save ${business.name}`}
                            >
                              <BsSuitHeart className="m-0" />
                            </Link>
                          </div>
                        </div>
                        <div className="listing-middle-item">
                            <div className="listing-avatar">
                              <div className="avatarImg d-flex align-items-center justify-content-center bg-white">
                                <CategoryIcon aria-hidden={true} size={22} />
                              </div>
                            </div>
                          <div className="listing-details">
                            <h4 className="listingTitle">
                              <Link href={`/single-listing-01?listing=${business.slug}`} className="titleLink">
                                {business.name}
                                <span className="verified">
                                  <BsPatchCheckFill className="m-0" aria-hidden={true} />
                                </span>
                              </Link>
                            </h4>
                            <p>{business.tagline}</p>
                          </div>
                          <div className="listing-info-details">
                            <div className="d-flex align-items-center justify-content-start gap-2">
                              <div className="list-distance">
                                <BsGeoAlt className="mb-0 me-2" aria-hidden={true} />
                                {business.location}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listing-footer-item">
                          <div className="d-flex align-items-center justify-content-between gap-2">
                            <div className="catdWraps">
                              <div className="flex-start">
                                <span className={`catIcon ${categoryStyle}`}>
                                  <CategoryIcon aria-hidden={true} size={18} />
                                </span>
                                <span className="catTitle ms-2">{categoryName}</span>
                              </div>
                            </div>
                            <div className="listing-rates">
                              <div className="d-flex align-items-center justify-content-start gap-1">
                                <span className={`ratingAvarage ${ratingClass(business.rating)}`}>
                                  {business.rating.toFixed(1)}
                                </span>
                                <span className="overallrates">{business.reviewCount} reviews</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        {results.length > 0 && (
          <div className="alert alert-success mt-4" role="status">
            We used your latest search for <strong>{query.keywords || "all services"}</strong> in {" "}
            <strong>{query.location || "all locations"}</strong>
            {!isDefaultRatingRange(query.ratingRange) && (
              <>
                {" "}with ratings between {query.ratingRange[0].toFixed(1)}★ and {" "}
                {query.ratingRange[1].toFixed(1)}★
              </>
            )}
            {" "}to prioritise similar businesses.
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularBusinesses;
