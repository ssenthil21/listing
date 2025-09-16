"use client";

import { Suspense, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  BsGeoAlt,
  BsPatchCheckFill,
  BsSearch,
  BsStar,
  BsSuitHeart,
} from "react-icons/bs";

import NavbarUnauthenticated from "../components/landing/header/navbar-unauthenticated";
import Footer from "../components/footer/footer";
import BackToTop from "../components/back-to-top";
import SearchForm from "../components/landing/search/search-form";
import { SearchProvider, useSearch } from "../components/search/search-context";
import { landingBusinesses, landingCategories } from "../data/landing";
import type { SearchFormValues } from "../types/models";
import {
  createSearchParams,
  isDefaultRatingRange,
  parseSearchParams,
} from "../utils/search";

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

const ListingsContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { query, results, performSearch, isSearching } = useSearch();

  const parsedQuery = useMemo(() => parseSearchParams(searchParams), [searchParams]);
  const [parsedMinRating, parsedMaxRating] = parsedQuery.ratingRange;

  useEffect(() => {
    performSearch(parsedQuery);
  }, [
    performSearch,
    parsedQuery.location,
    parsedQuery.keywords,
    parsedMinRating,
    parsedMaxRating,
  ]);

  const handleSearch = (values: SearchFormValues) => {
    const params = createSearchParams(values);
    router.push(`/listings?${params.toString()}`);
  };

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

  const businessResults = results.length ? results : landingBusinesses;
  const showEmptyState =
    !isSearching &&
    results.length === 0 &&
    Boolean(query.location.trim() || query.keywords.trim());

  const summaryKeywords = query.keywords || "all services";
  const summaryLocation = query.location || "all locations";

  return (
    <>
      <NavbarUnauthenticated />

      <div
        className="image-cover hero-banner bg-primary"
        style={{ backgroundImage: "url('/img/banner-6.jpg')" }}
        data-overlay="5"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="position-relative text-start mt-4 text-white">
                <h2 className="fw-semibold">Discover listings tailored to your search</h2>
                <p className="fs-5 fw-light text-white-50">
                  Explore curated results from QTick and connect with trusted partners in seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-relative d-flex flex-column mt-n3 z-2">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-11 col-lg-12 col-md-12 col-12">
              <SearchForm onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row align-items-center justify-content-between mb-4">
            <div className="col-xl-7 col-lg-8 col-md-12">
              <h5 className="mb-1 fw-semibold">
                Showing {results.length || landingBusinesses.length} {results.length === 1 ? "listing" : "listings"}
              </h5>
              <p className="text-secondary mb-0">
                Filtering for <strong>{summaryKeywords}</strong> in <strong>{summaryLocation}</strong>
                {!isDefaultRatingRange(query.ratingRange) && (
                  <>
                    {" "}with ratings between {query.ratingRange[0].toFixed(1)}★ and {" "}
                    {query.ratingRange[1].toFixed(1)}★
                  </>
                )}
              </p>
            </div>
            <div className="col-xl-5 col-lg-4 col-md-12 text-md-end mt-3 mt-lg-0">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => router.push("/grid-layout-01")}
              >
                Preview classic grid layout
              </button>
            </div>
          </div>

          {showEmptyState ? (
            <div className="alert alert-warning" role="status">
              No listings matched your filters. Try adjusting your keywords or lowering the minimum rating.
            </div>
          ) : (
            <div className="row align-items-center justify-content-center g-xl-4 g-3">
              {businessResults.map((business) => {
                const primaryCategory = business.categories[0];
                const categoryMeta = primaryCategory ? categoryLookup.get(primaryCategory) : undefined;
                const CategoryIcon = categoryMeta?.icon;
                const categoryName = categoryMeta?.name ?? "Featured";
                const categoryStyle = categoryMeta?.style ?? "";

                return (
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" key={business.id}>
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
                                <span className="badge badge-xs text-uppercase listOpen">
                                  {business.isPaid ? "Featured" : "Verified"}
                                </span>
                                <span className="badge badge-xs badge-transparent">
                                  <BsStar className="me-1" aria-hidden={true} />
                                  {business.rating.toFixed(1)}★
                                </span>
                              </div>
                            </div>
                            <Image
                              src={business.heroImage}
                              width={600}
                              height={420}
                              sizes="(max-width: 768px) 100vw, 50vw"
                              style={{ width: "100%", height: "100%" }}
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
                              {CategoryIcon ? <CategoryIcon aria-hidden={true} size={22} /> : <BsPatchCheckFill />}
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
                                  {CategoryIcon ? (
                                    <CategoryIcon aria-hidden={true} size={18} />
                                  ) : (
                                    <BsSearch aria-hidden={true} size={18} />
                                  )}
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
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
};

const ListingsFallback = () => (
  <>
    <NavbarUnauthenticated />
    <div className="container py-5 my-5 text-center" role="status" aria-live="polite">
      <div className="spinner-border text-primary" role="presentation" aria-hidden={true} />
      <p className="mt-3 mb-0 fw-medium text-secondary">Loading listings…</p>
    </div>
    <Footer />
  </>
);

const ListingsPage = () => (
  <SearchProvider dataset={landingBusinesses}>
    <Suspense fallback={<ListingsFallback />}>
      <ListingsContent />
    </Suspense>
  </SearchProvider>
);

export default ListingsPage;
