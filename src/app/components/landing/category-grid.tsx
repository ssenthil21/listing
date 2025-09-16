"use client";

import { useRouter } from "next/navigation";

import { landingCategories } from "../../data/landing";

const CategoryGrid = () => {
  const router = useRouter();

  const handleNavigate = (slug: string) => {
    router.push(`/list-layout-01?category=${slug}`);
  };

  return (
    <section className="py-5 bg-white" id="categories">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">Browse by category</h2>
            <p className="text-secondary mb-0">
              Explore trending business categories and connect with verified vendors.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {landingCategories.map((category) => (
            <div className="col-6 col-md-4 col-xl-3" key={category.id}>
              <button
                type="button"
                className="w-100 text-start border rounded-4 p-4 h-100 bg-light-hover"
                onClick={() => handleNavigate(category.slug)}
              >
                <category.icon className="text-primary mb-3" size={28} aria-hidden="true" />
                <h5 className="fw-semibold mb-1">{category.name}</h5>
                <p className="text-secondary small mb-0">{category.description}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
