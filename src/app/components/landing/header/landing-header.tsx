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
            <div className="col-lg-6 col-xl-5">
              <div className="d-flex flex-column gap-3 text-white">
                <span className="badge bg-soft-light text-white align-self-start px-3 py-2 rounded-pill fw-semibold">
                  Business directory reimagined
                </span>
                <h1 className="display-5 fw-bold">
                  Find {user ? "your next client" : "businesses"} with confidence
                </h1>
                <p className="lead text-white-50 mb-0">
                  QTick connects customers with curated vendors across hospitality, wellness, technology, and more.
                  {" "}
                  {user
                    ? "Manage your presence and convert visits into bookings."
                    : "Browse trusted listings, read real reviews, and unlock exclusive promotions."}
                </p>
                <div>
                  <Link href="/pricing" className="btn btn-outline-light btn-sm text-uppercase fw-semibold px-4">
                    View plans
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 ms-xl-auto">
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
