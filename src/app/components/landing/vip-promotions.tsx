import Link from "next/link";

import { landingPromotions } from "../../data/landing";

const VipPromotions = () => {
  return (
    <section className="py-5" id="promotions">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">VIP promotions (offers)</h2>
            <p className="text-secondary mb-0">
              Highlighted offers from vendors investing in premium placement. Promotions are marked as paid content for full transparency.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {landingPromotions.map((promotion) => (
            <div className="col-md-4" key={promotion.id}>
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body d-flex flex-column gap-2">
                  <span className="badge bg-warning text-dark align-self-start">Paid Promotion</span>
                  <h5 className="fw-semibold">{promotion.title}</h5>
                  <p className="text-secondary small flex-grow-1">{promotion.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{promotion.vendorName}</small>
                    {promotion.expiresOn && (
                      <small className="text-danger fw-semibold">Ends {promotion.expiresOn}</small>
                    )}
                  </div>
                  <Link href="#" className="btn btn-sm btn-primary align-self-start">
                    Claim offer
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VipPromotions;
