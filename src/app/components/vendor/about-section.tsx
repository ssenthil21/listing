import type { VendorProfile } from "../../types/models";

interface AboutSectionProps {
  vendor: VendorProfile;
}

const AboutSection = ({ vendor }: AboutSectionProps) => {
  return (
    <section className="py-5 bg-light" id="about">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">About us</h2>
            <p className="text-secondary lead">{vendor.description}</p>
            <div className="bg-white rounded-4 shadow-sm p-4">
              <h6 className="fw-semibold">Our mission</h6>
              <p className="mb-0 text-secondary">
                We champion meaningful customer experiences through tailored services and a transparent booking journey. Our team works alongside clients to deliver measurable impact and unforgettable moments.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-white rounded-4 shadow-sm p-4 h-100">
              <h6 className="fw-semibold mb-3">Essential information</h6>
              <dl className="row mb-0">
                <dt className="col-5 text-secondary">Address</dt>
                <dd className="col-7">{vendor.address}</dd>
                <dt className="col-5 text-secondary">Location</dt>
                <dd className="col-7">{vendor.location}</dd>
                <dt className="col-5 text-secondary">Working hours</dt>
                <dd className="col-7">{vendor.workingHours}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
