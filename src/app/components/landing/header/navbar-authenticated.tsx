"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { BsChevronDown, BsDoorOpenFill } from "react-icons/bs";

import { useAuth } from "../../providers/auth-context";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard-user" },
  { label: "My Listings", href: "/dashboard-my-listings" },
  { label: "Categories", href: "#categories" },
  { label: "Support", href: "/help-center" },
];

const NavbarAuthenticated = () => {
  const { user, logOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm border-bottom">
      <div className="container py-3">
        <div className="d-flex align-items-center justify-content-between">
          <Link href="/" className="navbar-brand fw-bold fs-4 text-primary">
            Qtick Biz Profile
          </Link>
          <button
            className="btn btn-link d-lg-none"
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <IoClose size={28} /> : <FiMenu size={28} />}
          </button>
          <nav className="d-none d-lg-flex align-items-center gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-secondary fw-semibold">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="d-none d-lg-flex align-items-center gap-3">
            <Link href="/dashboard-add-listing" className="btn btn-outline-primary px-3">
              Join with us
            </Link>
            <div className="dropdown">
              <button
                className="btn btn-light d-flex align-items-center gap-2"
                type="button"
                onClick={() => setIsProfileOpen((prev) => !prev)}
                aria-expanded={isProfileOpen}
              >
                <div className="rounded-circle overflow-hidden" style={{ width: 36, height: 36 }}>
                  <Image
                    src={user?.avatar ?? "/img/team-1.jpg"}
                    alt={user?.name ?? "User avatar"}
                    width={36}
                    height={36}
                    className="object-fit-cover"
                  />
                </div>
                <span className="fw-semibold">{user?.name ?? "My Profile"}</span>
                <BsChevronDown />
              </button>
              {isProfileOpen && (
                <ul className="dropdown-menu dropdown-menu-end show mt-2">
                  <li>
                    <Link className="dropdown-item" href="/dashboard-profile">
                      View profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/dashboard-my-bookings">
                      Bookings
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item d-flex align-items-center gap-2" onClick={logOut}>
                      <BsDoorOpenFill /> Sign out
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="mt-3 border-top pt-3 d-lg-none">
            <nav className="d-flex flex-column gap-3 mb-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-secondary fw-semibold">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="d-flex flex-column gap-2">
              <Link href="/dashboard-add-listing" className="btn btn-outline-primary w-100">
                Join with us
              </Link>
              <button className="btn btn-light w-100 d-flex align-items-center justify-content-center gap-2" onClick={logOut}>
                <BsDoorOpenFill /> Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarAuthenticated;
