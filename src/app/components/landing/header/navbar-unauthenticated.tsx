"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { BsPersonPlus, BsBoxArrowInRight } from "react-icons/bs";

import { useAuth } from "../../providers/auth-context";
import type { User } from "../../../types/models";
import Brand from "./brand";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Demo", href: "/demo" },
  { label: "Vendors", href: "/list-layout-01" },
  { label: "Categories", href: "#categories" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blogs", href: "#news" },
];

const demoUser: User = {
  id: "demo-user",
  name: "Avery Jenkins",
  email: "avery.jenkins@example.com",
  avatar: "/img/team-3.jpg",
  location: "New York, NY",
};

const NavbarUnauthenticated = () => {
  const { logIn } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogin = () => {
    logIn(demoUser);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-white shadow-sm border-bottom">
      <div className="container py-3">
        <div className="d-flex align-items-center justify-content-between">
          <Brand />
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
          <div className="d-none d-lg-flex align-items-center gap-2">
            <Link href="/register" className="btn btn-outline-primary px-3">
              <BsPersonPlus className="me-2" /> Join with us
            </Link>
            <button type="button" className="btn btn-primary" onClick={handleLogin}>
              <BsBoxArrowInRight className="me-2" /> Login &amp; Sign Up
            </button>
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
              <Link href="/register" className="btn btn-outline-primary w-100">
                <BsPersonPlus className="me-2" /> Join with us
              </Link>
              <button type="button" className="btn btn-primary" onClick={handleLogin}>
                <BsBoxArrowInRight className="me-2" /> Login &amp; Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarUnauthenticated;
