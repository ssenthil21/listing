import Link from "next/link";

import type { VendorProfile } from "../../types/models";

interface AppointmentCtaProps {
  vendor: VendorProfile;
}

const AppointmentCta = ({ vendor }: AppointmentCtaProps) => {
  return (
    <section className="py-5 bg-primary text-white">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">Ready to book an appointment?</h2>
            <p className="mb-0">
              Tell us about your goals and we&apos;ll schedule a consultation with {vendor.name} within one business day.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <div className="d-flex flex-column flex-lg-row gap-2 justify-content-lg-end">
              {vendor.contactEmail && (
                <Link href={`mailto:${vendor.contactEmail}`} className="btn btn-light">
                  Email us
                </Link>
              )}
              {vendor.contactPhone && (
                <Link href={`tel:${vendor.contactPhone}`} className="btn btn-outline-light">
                  Call now
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCta;
