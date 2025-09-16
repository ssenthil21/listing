"use client";
import Link from "next/link";

import { useAuth } from "../../providers/auth-context";
import NavbarAuthenticated from "./navbar-authenticated";
import NavbarUnauthenticated from "./navbar-unauthenticated";
import SearchForm from "../search/search-form";

const LandingHeader = () => {
  const { user } = useAuth();

  return (
    <header className="landing-hero">
      {user ? <NavbarAuthenticated /> : <NavbarUnauthenticated />}
      <div
        className="landing-hero__banner image-cover"
        style={{ backgroundImage: "url('/img/banner-6.jpg')" }}
        data-overlay="6"
      >
        <div className="landing-hero__content container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <div className="d-flex flex-column gap-3 text-white">
                <span className="badge bg-soft-light text-white align-self-start px-3 py-2 rounded-pill fw-semibold">
                  Business directory reimagined
                </span>
                <h1 className="display-5 fw-bold">
                  Find {user ? "your next client" : "businesses"} with confidence
                </h1>
                <p className="lead text-white-50 mb-0">
                  Qtick Biz Profile connects customers with curated vendors across hospitality, wellness,
                  technology, and more. {user ? "Manage your presence and convert visits into bookings." : "Browse trusted listings, read real reviews, and unlock exclusive promotions."}
                </p>
                <div className="card border-0 shadow-sm rounded-4 advertising-slot mt-3" aria-label="Featured advertising">
                  <div className="card-body d-flex flex-column flex-md-row align-items-md-center gap-3">
                    <div>
                      <small className="text-uppercase text-muted fw-bold">Sponsored Highlight</small>
                      <h6 className="mb-1 fw-semibold text-dark">Boost your visibility with VIP promotions</h6>
                      <p className="mb-0 text-secondary small">
                        Upgrade to a paid placement and appear in premium search results across Qtick.
                      </p>
                    </div>
                    <Link href="/pricing" className="btn btn-outline-primary ms-md-auto">
                      View Plans
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ms-lg-auto">
              <div className="landing-hero__form">
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
