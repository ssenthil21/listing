import Link from "next/link";

import NavbarUnauthenticated from "../components/landing/header/navbar-unauthenticated";
import Footer from "../components/footer/footer";
import BackToTop from "../components/back-to-top";

const demoPages = [
  {
    title: "Home Layout 01",
    href: "/",
    description: "Hero search with testimonials and featured businesses.",
  },
  {
    title: "Home Layout 09",
    href: "/home-9",
    description: "Lifestyle splash layout with pill-style search controls.",
  },
  {
    title: "Listings (Smart Search)",
    href: "/listings",
    description: "Grid results powered by the slider-enabled search experience.",
  },
  {
    title: "Grid Layout 01",
    href: "/grid-layout-01",
    description: "Classic card grid with sidebar filters and pagination.",
  },
  {
    title: "Grid Layout 04",
    href: "/grid-layout-04",
    description: "Wide image cards and subtle hover states for visual brands.",
  },
  {
    title: "List Layout 01",
    href: "/list-layout-01",
    description: "Stacked listings with category chips and quick actions.",
  },
  {
    title: "Half Map Screen 01",
    href: "/half-map-01",
    description: "Split map and list view ideal for location-first browsing.",
  },
  {
    title: "Vendor Dashboard",
    href: "/dashboard-user",
    description: "Signed-in vendor workspace with performance insights.",
  },
  {
    title: "Pricing & Plans",
    href: "/pricing",
    description: "Subscription tiers highlighting features and value props.",
  },
];

const DemoPage = () => {
  return (
    <>
      <NavbarUnauthenticated />

      <section className="py-5 bg-light border-bottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-10">
              <span className="badge bg-soft-primary text-primary rounded-pill px-3 py-2 fw-semibold">
                Explore the library
              </span>
              <h1 className="display-5 fw-bold mt-3">Preview every QTick demo in one place</h1>
              <p className="lead text-secondary">
                Jump between home pages, listing grids, map views, and dashboards to choose the perfect starting point for your
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {demoPages.map((page) => (
              <div className="col-md-6 col-lg-4" key={page.href}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body d-flex flex-column gap-2">
                    <h5 className="fw-semibold mb-1">{page.title}</h5>
                    <p className="text-secondary mb-0">{page.description}</p>
                    <Link href={page.href} className="btn btn-outline-primary mt-auto align-self-start">
                      View page
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
};

export default DemoPage;
