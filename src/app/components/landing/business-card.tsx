"use client";

import Image from "next/image";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";

import type { Business } from "../../types/models";

interface BusinessCardProps {
  business: Business;
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-4">
      <div className="position-relative" style={{ height: 200 }}>
        <Image
          src={business.heroImage}
          alt={business.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-fit-cover rounded-top-4"
        />
        {business.isPaid && (
          <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-3">
            Sponsored
          </span>
        )}
      </div>
      <div className="card-body d-flex flex-column gap-2">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="card-title mb-0">{business.name}</h5>
          <span className="badge bg-light text-dark">
            <BsStarFill className="text-warning me-1" /> {business.rating.toFixed(1)}
          </span>
        </div>
        <p className="text-secondary small mb-0">{business.tagline}</p>
        <p className="text-muted small mb-0">{business.location}</p>
        <div className="d-flex flex-wrap gap-1 mt-1">
          {business.categories.map((category) => (
            <span key={category} className="badge bg-soft-primary text-primary">
              {category}
            </span>
          ))}
        </div>
        <p className="text-secondary small mb-0">
          {business.reviewCount} verified review{business.reviewCount === 1 ? "" : "s"}
        </p>
        <Link href={`/vendor/${business.slug}`} className="btn btn-outline-primary mt-auto">
          View profile
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
