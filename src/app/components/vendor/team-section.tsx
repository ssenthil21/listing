import type { VendorProfile } from "../../types/models";

interface TeamSectionProps {
  vendor: VendorProfile;
}

const TeamSection = ({ vendor }: TeamSectionProps) => {
  if (!vendor.team.length) {
    return null;
  }

  return (
    <section className="py-5 bg-light" id="team">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">Meet the team</h2>
            <p className="text-secondary mb-0">
              The experts behind every project deliver a personal, tailored experience.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {vendor.team.map((member) => (
            <div className="col-md-4 col-lg-3" key={member.id}>
              <div className="bg-white rounded-4 shadow-sm text-center p-4 h-100">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="rounded-circle mb-3"
                  style={{ width: 96, height: 96, objectFit: "cover" }}
                />
                <h6 className="fw-semibold mb-1">{member.name}</h6>
                <p className="text-secondary mb-0">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
