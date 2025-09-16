"use client";

import { createContext, useContext, useMemo, useState, useCallback } from "react";
import type { Business, SearchContextValue, SearchFormValues } from "../../types/models";
import { landingBusinesses } from "../../data/landing";
import { useAuth } from "../providers/auth-context";
import {
  createDefaultSearchValues,
  filterBusinesses,
  normaliseSearchValues,
} from "../../utils/search";

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

interface SearchProviderProps {
  children: React.ReactNode;
  dataset?: Business[];
}

export const SearchProvider = ({ children, dataset = landingBusinesses }: SearchProviderProps) => {
  const [query, setQuery] = useState<SearchFormValues>(() => createDefaultSearchValues());
  const [results, setResults] = useState<Business[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const { updatePreferences } = useAuth();

  const performSearch = useCallback(
    (values: SearchFormValues) => {
      setIsSearching(true);
      const normalisedValues = normaliseSearchValues(values);
      setQuery(normalisedValues);
      const matches = filterBusinesses(normalisedValues, dataset);
      setResults(matches);
      setIsSearching(false);

      if (matches.length) {
        const categories = new Set<string>();
        matches.forEach((business) => {
          business.categories.forEach((category) => categories.add(category));
        });
        updatePreferences(Array.from(categories));
      }
    },
    [dataset, updatePreferences]
  );

  const clearSearch = useCallback(() => {
    setQuery(createDefaultSearchValues());
    setResults([]);
    setIsSearching(false);
  }, []);

  const value = useMemo<SearchContextValue>(
    () => ({
      query,
      results,
      isSearching,
      performSearch,
      clearSearch,
    }),
    [query, results, isSearching, performSearch, clearSearch]
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
