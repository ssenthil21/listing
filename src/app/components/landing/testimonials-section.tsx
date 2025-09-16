"use client";

import { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";

import { landingTestimonials } from "../../data/landing";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsCount = landingTestimonials.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % testimonialsCount);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [testimonialsCount]);

  const activeTestimonial = landingTestimonials[activeIndex];

  return (
    <section className="py-5 bg-white" id="testimonials">
      <div className="container">
        <div className="row align-items-start g-4">
          <div className="col-lg-5">
            <h2 className="fw-bold">What people say about Qtick</h2>
            <p className="text-secondary">
              Real reviews from vendors and customers demonstrate how Qtick drives trust and growth on both
              sides of the marketplace.
            </p>
            <div className="d-flex gap-2 mt-3">
              {landingTestimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  className={`btn btn-sm ${index === activeIndex ? "btn-primary" : "btn-outline-primary"}`}
                  aria-label={`Show testimonial from ${testimonial.author}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="col-lg-7" aria-live="polite">
            <div className="card shadow-sm border-0 rounded-4 h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={activeTestimonial.avatar ?? "/img/team-1.jpg"}
                    alt={activeTestimonial.author}
                    className="rounded-circle"
                    style={{ width: 64, height: 64, objectFit: "cover" }}
                  />
                  <div>
                    <h5 className="mb-0">{activeTestimonial.author}</h5>
                    <small className="text-secondary">{activeTestimonial.role}</small>
                    <div className="text-warning mt-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <BsStarFill
                          key={index}
                          className={index < Math.round(activeTestimonial.rating) ? "" : "opacity-25"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="lead text-secondary">“{activeTestimonial.content}”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
