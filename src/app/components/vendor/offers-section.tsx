import { BsPatchCheckFill } from "react-icons/bs";

import type { VendorProfile } from "../../types/models";

interface OffersSectionProps {
  vendor: VendorProfile;
}

const OffersSection = ({ vendor }: OffersSectionProps) => {
  if (!vendor.offers.length) {
    return null;
  }

  return (
    <section className="py-5 bg-white" id="offers">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">Current offers</h2>
            <p className="text-secondary mb-0">
              Discover exclusive promotions available for a limited time. Sponsored offers are clearly marked.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {vendor.offers.map((offer) => (
            <div className="col-md-6" key={offer.id}>
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body d-flex flex-column gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <BsPatchCheckFill className="text-primary" />
                    <h5 className="mb-0 fw-semibold">{offer.title}</h5>
                  </div>
                  <p className="text-secondary flex-grow-1 mb-0">{offer.description}</p>
                  {offer.terms && <small className="text-muted">{offer.terms}</small>}
                  {offer.expiresOn && (
                    <small className="text-danger fw-semibold">Valid until {offer.expiresOn}</small>
                  )}
                  {offer.isSponsored && (
                    <span className="badge bg-warning text-dark align-self-start">Sponsored offer</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
