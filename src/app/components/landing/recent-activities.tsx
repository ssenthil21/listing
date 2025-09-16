import Link from "next/link";

import { landingActivities } from "../../data/landing";

const RecentActivities = () => {
  return (
    <section className="py-5 bg-light" id="activities">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">Recent activities &amp; resources</h2>
            <p className="text-secondary mb-0">
              Stay informed with platform updates, community stories, and educational content from QTick.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {landingActivities.map((activity) => (
            <div className="col-md-4" key={activity.id}>
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body d-flex flex-column gap-2">
                  <span className="badge bg-soft-primary text-primary align-self-start">
                    {activity.category}
                  </span>
                  <h5 className="fw-semibold">{activity.title}</h5>
                  <p className="text-secondary small flex-grow-1">{activity.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{activity.publishedOn}</small>
                    <Link href={activity.link} className="btn btn-sm btn-outline-primary">
                      Read more
                    </Link>
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

export default RecentActivities;
