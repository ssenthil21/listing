"use client";
import Link from "next/link";

import { useAuth } from "../../providers/auth-context";
import NavbarAuthenticated from "./navbar-authenticated";
import NavbarUnauthenticated from "./navbar-unauthenticated";
import SearchForm from "../search/search-form";

const LandingHeader = () => {
  const { user } = useAuth();

  return (
    <header className="landing-header bg-light">
      {user ? <NavbarAuthenticated /> : <NavbarUnauthenticated />}
      <div className="container py-5">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7">
            <div className="d-flex flex-column gap-3">
              <span className="badge bg-soft-primary text-primary align-self-start px-3 py-2 rounded-pill fw-semibold">
                Business directory reimagined
              </span>
              <h1 className="display-5 fw-bold text-dark">
                Find {user ? "your next client" : "businesses"} with confidence
              </h1>
              <p className="lead text-secondary">
                Qtick Biz Profile connects customers with curated vendors across hospitality, wellness,
                technology, and more. {user ? "Manage your presence and convert visits into bookings." : "Browse trusted listings, read real reviews, and unlock exclusive promotions."}
              </p>
              <div className="card border-0 shadow-sm rounded-4 advertising-slot" aria-label="Featured advertising">
                <div className="card-body d-flex flex-column flex-md-row align-items-md-center gap-3">
                  <div>
                    <small className="text-uppercase text-muted fw-bold">Sponsored Highlight</small>
                    <h6 className="mb-1 fw-semibold">Boost your visibility with VIP promotions</h6>
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
          <div className="col-lg-5">
            <SearchForm />
            <div className="mt-3 p-3 bg-white rounded-4 shadow-sm" aria-live="polite">
              <h6 className="fw-semibold mb-1">Why Qtick?</h6>
              <ul className="list-unstyled mb-0 text-secondary small">
                <li>Verified reviews keep quality front and centre.</li>
                <li>Smart filters deliver results based on your location and intent.</li>
                <li>Vendors gain actionable insights and lead generation tools.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
