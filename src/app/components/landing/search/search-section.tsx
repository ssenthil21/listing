"use client";

import Link from "next/link";

import { landingCategories } from "../../../data/landing";
import BusinessCard from "../business-card";
import { useSearch } from "../../search/search-context";

const SearchSection = () => {
  const { results, query, isSearching, clearSearch } = useSearch();
  const hasQuery = Boolean(query.location.trim() || query.keywords.trim());
  const hasResults = results.length > 0;

  return (
    <section className="py-5" aria-live="polite">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-4">
          <div>
            <h2 className="fw-bold mb-1">Search results</h2>
            {hasQuery ? (
              <p className="mb-0 text-secondary">
                Showing matches for <strong>{query.keywords || "all services"}</strong> in {" "}
                <strong>{query.location || "all locations"}</strong>
              </p>
            ) : (
              <p className="mb-0 text-secondary">Use the search box above to explore businesses.</p>
            )}
          </div>
          {hasQuery && (
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={clearSearch}>
              Clear search
            </button>
          )}
        </div>

        {isSearching && <div className="alert alert-info">Searching businesses...</div>}

        {hasQuery ? (
          hasResults ? (
            <div className="row g-4">
              {results.map((business) => (
                <div className="col-md-6 col-lg-4" key={business.id}>
                  <BusinessCard business={business} />
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-warning" role="status">
              No listings matched your filters. Try broadening your keywords or browsing by category below.
            </div>
          )
        ) : (
          <div className="row g-3" role="list">
            {landingCategories.slice(0, 6).map((category) => (
              <div className="col-6 col-md-4 col-lg-3" key={category.id} role="listitem">
                <div className="border rounded-4 p-3 h-100">
                  <category.icon className="text-primary mb-2" size={24} aria-hidden={true} />
                  <h6 className="fw-semibold mb-1">{category.name}</h6>
                  <p className="text-secondary small mb-0">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

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
      </div>
    </section>
  );
};

export default SearchSection;
