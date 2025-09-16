'use client';

import type { User } from "../types/models";

const STORAGE_KEY = "qtick-auth-user";

export const getStoredUser = (): User | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    return JSON.parse(raw) as User;
  } catch (error) {
    console.error("Failed to parse stored user", error);
    return null;
  }
};

export const storeUser = (user: User) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
};

export const clearStoredUser = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
};
