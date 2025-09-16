import Link from "next/link";

import { landingNews } from "../../data/landing";

const NewsSection = () => {
  return (
    <section className="py-5 bg-white" id="news">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">Latest updates</h2>
            <p className="text-secondary mb-0">
              Learn how QTick is evolving and how to get the most from your business profile.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {landingNews.map((article) => (
            <div className="col-md-4" key={article.id}>
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body d-flex flex-column gap-2">
                  <small className="text-muted">{article.publishedOn}</small>
                  <h5 className="fw-semibold">{article.title}</h5>
                  <p className="text-secondary flex-grow-1">{article.excerpt}</p>
                  <Link href={article.link} className="btn btn-sm btn-outline-primary">
                    Continue reading
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

export default NewsSection;
