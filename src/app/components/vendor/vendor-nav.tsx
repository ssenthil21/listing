"use client";

import NavbarAuthenticated from "../landing/header/navbar-authenticated";
import NavbarUnauthenticated from "../landing/header/navbar-unauthenticated";
import { useAuth } from "../providers/auth-context";

const VendorNav = () => {
  const { user } = useAuth();
  return user ? <NavbarAuthenticated /> : <NavbarUnauthenticated />;
};

export default VendorNav;
