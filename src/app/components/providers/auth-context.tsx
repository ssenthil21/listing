"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { AuthContextValue, User } from "../../types/models";
import { clearStoredUser, getStoredUser, storeUser } from "../../utils/auth";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = getStoredUser();
    if (storedUser) {
      setUser({ ...storedUser, isReturning: true });
    }
    setIsLoading(false);
  }, []);

  const logIn = (newUser: User) => {
    const enrichedUser: User = {
      ...newUser,
      isReturning: true,
    };
    setUser(enrichedUser);
    storeUser(enrichedUser);
  };

  const logOut = () => {
    setUser(null);
    clearStoredUser();
  };

  const updatePreferences = (preferences: string[]) => {
    setUser((prev) => {
      if (!prev) {
        return prev;
      }

      const existingPreferences = prev.preferences ?? [];
      const merged = Array.from(new Set([...existingPreferences, ...preferences]));
      const updatedUser: User = {
        ...prev,
        preferences: merged,
        searchHistory: [...(prev.searchHistory ?? []), ...preferences],
      };
      storeUser(updatedUser);
      return updatedUser;
    });
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isLoading,
      logIn,
      logOut,
      updatePreferences,
    }),
    [user, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
