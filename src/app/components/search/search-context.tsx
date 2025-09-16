"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Business, SearchContextValue, SearchFormValues } from "../../types/models";
import { landingBusinesses } from "../../data/landing";
import { useAuth } from "../providers/auth-context";

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

const defaultQuery: SearchFormValues = {
  location: "",
  keywords: "",
};

const normalise = (value: string) => value.trim().toLowerCase();

const filterBusinesses = (values: SearchFormValues, dataset: Business[]): Business[] => {
  const locationTerm = normalise(values.location);
  const keywordTerm = normalise(values.keywords);

  return dataset.filter((business) => {
    const matchesLocation =
      !locationTerm || normalise(business.location).includes(locationTerm);

    if (!matchesLocation) {
      return false;
    }

    if (!keywordTerm) {
      return true;
    }

    const keywordSources = [
      business.name,
      business.tagline,
      business.description,
      business.categories.join(" "),
    ].map(normalise);

    return keywordSources.some((source) => source.includes(keywordTerm));
  });
};

interface SearchProviderProps {
  children: React.ReactNode;
  dataset?: Business[];
}

export const SearchProvider = ({ children, dataset = landingBusinesses }: SearchProviderProps) => {
  const [query, setQuery] = useState<SearchFormValues>(defaultQuery);
  const [results, setResults] = useState<Business[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const { updatePreferences } = useAuth();

  const performSearch = (values: SearchFormValues) => {
    setIsSearching(true);
    const trimmedValues = {
      location: values.location.trim(),
      keywords: values.keywords.trim(),
    };
    setQuery(trimmedValues);
    const matches = filterBusinesses(trimmedValues, dataset);
    setResults(matches);
    setIsSearching(false);

    if (matches.length) {
      const categories = new Set<string>();
      matches.forEach((business) => {
        business.categories.forEach((category) => categories.add(category));
      });
      updatePreferences(Array.from(categories));
    }
  };

  const clearSearch = () => {
    setQuery(defaultQuery);
    setResults([]);
  };

  const value = useMemo<SearchContextValue>(
    () => ({
      query,
      results,
      isSearching,
      performSearch,
      clearSearch,
    }),
    [query, results, isSearching]
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
