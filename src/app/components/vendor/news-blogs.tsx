import Link from "next/link";

import type { VendorProfile } from "../../types/models";

interface NewsBlogsProps {
  vendor: VendorProfile;
}

const NewsBlogs = ({ vendor }: NewsBlogsProps) => {
  if (!vendor.news.length) {
    return null;
  }

  return (
    <section className="py-5 bg-white" id="news">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">News &amp; blogs</h2>
            <p className="text-secondary mb-0">
              Stay informed with the latest articles, announcements, and insights from {vendor.name}.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {vendor.news.map((article) => (
            <div className="col-md-4" key={article.id}>
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body d-flex flex-column gap-2">
                  <small className="text-muted">{article.publishedOn}</small>
                  <h5 className="fw-semibold">{article.title}</h5>
                  <p className="text-secondary flex-grow-1">{article.excerpt}</p>
                  <Link href={article.link} className="btn btn-sm btn-outline-primary">
                    Read article
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

export default NewsBlogs;
