import Image from "next/image";
import Link from "next/link";
import { BsStarFill, BsTelephone, BsGeoAlt } from "react-icons/bs";

import type { VendorProfile } from "../../types/models";

interface VendorHeaderProps {
  vendor: VendorProfile;
}

const VendorHeader = ({ vendor }: VendorHeaderProps) => {
  return (
    <section className="vendor-hero position-relative text-white">
      <div className="vendor-hero__media">
        <Image
          src={vendor.heroImage}
          alt={`${vendor.name} hero`}
          fill
          priority
          sizes="100vw"
          className="object-fit-cover"
        />
        <div className="vendor-hero__overlay" />
      </div>
      <div className="container position-relative py-5">
        <div className="row">
          <div className="col-lg-8">
            <span className="badge bg-primary text-uppercase mb-3">Featured Vendor</span>
            <h1 className="display-4 fw-bold">{vendor.name}</h1>
            <p className="lead">{vendor.tagline}</p>
            <div className="d-flex flex-wrap gap-3 align-items-center mt-3">
              <span className="d-inline-flex align-items-center gap-2">
                <BsStarFill className="text-warning" />
                <span className="fw-semibold">{vendor.rating.toFixed(1)}</span>
                <small className="text-white-50">({vendor.reviewCount} reviews)</small>
              </span>
              <span className="d-inline-flex align-items-center gap-2">
                <BsGeoAlt />
                {vendor.location}
              </span>
              <span className="d-inline-flex align-items-center gap-2">
                <BsTelephone />
                <Link href={`tel:${vendor.contactPhone ?? ""}`} className="text-white text-decoration-none">
                  {vendor.contactPhone ?? "Contact vendor"}
                </Link>
              </span>
            </div>
            <div className="d-flex flex-wrap gap-2 mt-4">
              {vendor.categories.map((category) => (
                <span key={category} className="badge bg-soft-light text-light border border-light">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorHeader;
