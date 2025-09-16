"use client";

import { useMemo } from "react";

import { landingBusinesses } from "../../data/landing";
import BusinessCard from "./business-card";
import { useAuth } from "../providers/auth-context";
import { useSearch } from "../search/search-context";

const PopularBusinesses = () => {
  const { user } = useAuth();
  const { results, query } = useSearch();

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
    <section className="py-5 bg-light" id="popular">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">Most popular businesses</h2>
            {user ? (
              <p className="text-secondary mb-0">
                Curated for you using paid listings and your recent interests in {query.keywords || "various services"}.
              </p>
            ) : (
              <p className="text-secondary mb-0">
                Discover trending premium vendors selected from our featured partners.
              </p>
            )}
          </div>
        </div>
        <div className="row g-4">
          {businesses.map((business) => (
            <div className="col-md-6 col-lg-4" key={business.id}>
              <BusinessCard business={business} />
            </div>
          ))}
        </div>
        {results.length > 0 && (
          <div className="alert alert-success mt-4" role="status">
            We used your latest search for <strong>{query.keywords}</strong> in {" "}
            <strong>{query.location}</strong> to prioritise similar businesses.
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularBusinesses;
