import { BsStarFill } from "react-icons/bs";

import type { VendorProfile } from "../../types/models";

interface VendorTestimonialsSectionProps {
  vendor: VendorProfile;
}

const VendorTestimonialsSection = ({ vendor }: VendorTestimonialsSectionProps) => {
  if (!vendor.testimonials.length) {
    return null;
  }

  return (
    <section className="py-5 bg-light" id="vendor-testimonials">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">Testimonials</h2>
            <p className="text-secondary mb-0">
              Hear from clients who experienced our services first-hand.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {vendor.testimonials.map((testimonial) => (
            <div className="col-md-6" key={testimonial.id}>
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img
                    src={testimonial.avatar ?? "/img/team-1.jpg"}
                    alt={testimonial.author}
                    className="rounded-circle"
                    style={{ width: 56, height: 56, objectFit: "cover" }}
                  />
                  <div>
                    <h6 className="mb-0">{testimonial.author}</h6>
                    <small className="text-secondary">{testimonial.role}</small>
                    <div className="text-warning">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <BsStarFill key={index} className={index < testimonial.rating ? "" : "opacity-25"} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-secondary mb-0">“{testimonial.content}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorTestimonialsSection;
