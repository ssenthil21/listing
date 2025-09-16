"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGlobe, BsTelephone, BsEnvelope, BsPinMap } from "react-icons/bs";

import type { MediaItem, VendorProfile } from "../../types/models";

interface MediaSliderProps {
  vendor: VendorProfile;
}

const MediaSlider = ({ vendor }: MediaSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mediaItems = vendor.gallery;

  useEffect(() => {
    if (!mediaItems.length) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % mediaItems.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [mediaItems.length]);

  const activeMedia = mediaItems[activeIndex];

  const renderMedia = (media: MediaItem) => {
    if (media.type === "video") {
      return (
        <video controls className="w-100 h-100 rounded-4 object-fit-cover">
          <source src={media.src} />
          Your browser does not support embedded video.
        </video>
      );
    }

    return (
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes="(max-width: 992px) 100vw, 60vw"
        className="object-fit-cover rounded-4"
        priority={activeIndex === 0}
      />
    );
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="position-relative vendor-slider" style={{ minHeight: 420 }}>
              {activeMedia ? renderMedia(activeMedia) : <div className="bg-light rounded-4" />}
            </div>
            <div className="d-flex flex-wrap gap-3 mt-3">
              {mediaItems.map((media, index) => (
                <button
                  key={media.id}
                  type="button"
                  className={`thumb ${index === activeIndex ? "thumb--active" : ""}`}
                  aria-label={`Show media ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <Image
                    src={media.thumbnail ?? media.src}
                    alt={media.alt}
                    width={96}
                    height={72}
                    className="object-fit-cover rounded-3"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body d-flex flex-column gap-3">
                <h4 className="fw-semibold">Business details</h4>
                <div className="d-flex align-items-start gap-3">
                  <BsPinMap className="text-primary" />
                  <div>
                    <h6 className="mb-1">Address</h6>
                    <p className="mb-0 text-secondary">{vendor.address}</p>
                  </div>
                </div>
                {vendor.contactPhone && (
                  <div className="d-flex align-items-start gap-3">
                    <BsTelephone className="text-primary" />
                    <div>
                      <h6 className="mb-1">Phone</h6>
                      <Link href={`tel:${vendor.contactPhone}`} className="text-secondary">
                        {vendor.contactPhone}
                      </Link>
                    </div>
                  </div>
                )}
                {vendor.contactEmail && (
                  <div className="d-flex align-items-start gap-3">
                    <BsEnvelope className="text-primary" />
                    <div>
                      <h6 className="mb-1">Email</h6>
                      <Link href={`mailto:${vendor.contactEmail}`} className="text-secondary">
                        {vendor.contactEmail}
                      </Link>
                    </div>
                  </div>
                )}
                {vendor.website && (
                  <div className="d-flex align-items-start gap-3">
                    <BsGlobe className="text-primary" />
                    <div>
                      <h6 className="mb-1">Website</h6>
                      <Link href={vendor.website} className="text-secondary" target="_blank" rel="noopener noreferrer">
                        Visit site
                      </Link>
                    </div>
                  </div>
                )}
                <div>
                  <h6 className="mb-1">Working hours</h6>
                  <p className="text-secondary mb-0">{vendor.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSlider;
