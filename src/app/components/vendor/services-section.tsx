import { BsCheckCircle } from "react-icons/bs";

import type { VendorProfile } from "../../types/models";

interface ServicesSectionProps {
  vendor: VendorProfile;
}

const ServicesSection = ({ vendor }: ServicesSectionProps) => {
  return (
    <section className="py-5 bg-light" id="services">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">Services</h2>
            <p className="text-secondary mb-0">
              A detailed overview of the services offered, tailored packages, and expertise available from the team.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {vendor.services.map((service) => (
            <div className="col-md-6" key={service.id}>
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <div className="d-flex align-items-start gap-3">
                  <BsCheckCircle className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h5 className="fw-semibold mb-1">{service.name}</h5>
                    <p className="text-secondary mb-0">{service.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
