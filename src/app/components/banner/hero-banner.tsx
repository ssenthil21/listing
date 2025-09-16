import Link from 'next/link';
import { BsMouse } from 'react-icons/bs';
import React from 'react';

interface HeroBannerProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function HeroBanner({ backgroundImage, title, subtitle, children }: HeroBannerProps) {
  return (
    <div
      className="image-cover hero-header position-relative"
      style={{ backgroundImage: `url('${backgroundImage}')`, minHeight: '50vh' }}
      data-overlay="6"
    >
      <div className="container">
        <div className="row justify-content-center align-items-center mb-5 pt-lg-0 pt-5">
          <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12">
            <div className="position-relative text-center">
              <h1>{title}</h1>
              <p className="subtitle">{subtitle}</p>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className="mousedrop z-1">
        <Link href="#mains" className="mousewheel">
          <BsMouse className="" />
        </Link>
      </div>
    </div>
  );
}
