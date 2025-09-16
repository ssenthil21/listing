"use client";

import { FormEvent, useEffect, useState } from "react";
import { BsGeoAlt, BsSearch } from "react-icons/bs";

import type { SearchFormValues } from "../../../types/models";
import { useSearch } from "../../search/search-context";

interface SearchFormProps {
  onSearch?: (values: SearchFormValues) => void;
}

const SearchForm = ({ onSearch }: SearchFormProps) => {
  const { performSearch, isSearching, query } = useSearch();
  const [formValues, setFormValues] = useState<SearchFormValues>(query);
  const [errors, setErrors] = useState<Partial<Record<keyof SearchFormValues, string>>>({});

  useEffect(() => {
    setFormValues(query);
  }, [query.location, query.keywords]);

  const validate = (values: SearchFormValues) => {
    const validationErrors: Partial<Record<keyof SearchFormValues, string>> = {};
    if (!values.location.trim()) {
      validationErrors.location = "Please provide a city or region.";
    }
    if (!values.keywords.trim()) {
      validationErrors.keywords = "Tell us what you are looking for.";
    }
    return validationErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(formValues);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    performSearch(formValues);
    onSearch?.(formValues);
  };

  return (
    <form className="p-4 bg-white shadow rounded-4" onSubmit={handleSubmit} aria-label="Business search">
      <div className="mb-3">
        <label htmlFor="search-location" className="form-label fw-semibold">
          Location
        </label>
        <div className="input-group">
          <span className="input-group-text bg-white">
            <BsGeoAlt />
          </span>
          <input
            id="search-location"
            name="location"
            type="text"
            className={`form-control ${errors.location ? "is-invalid" : ""}`}
            placeholder="City, region, or postcode"
            value={formValues.location}
            onChange={(event) =>
              setFormValues((previous) => ({ ...previous, location: event.target.value }))
            }
          />
          {errors.location && <div className="invalid-feedback">{errors.location}</div>}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="search-keywords" className="form-label fw-semibold">
          Keywords
        </label>
        <div className="input-group">
          <span className="input-group-text bg-white">
            <BsSearch />
          </span>
          <input
            id="search-keywords"
            name="keywords"
            type="text"
            className={`form-control ${errors.keywords ? "is-invalid" : ""}`}
            placeholder="Service, business, or category"
            value={formValues.keywords}
            onChange={(event) =>
              setFormValues((previous) => ({ ...previous, keywords: event.target.value }))
            }
          />
          {errors.keywords && <div className="invalid-feedback">{errors.keywords}</div>}
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" disabled={isSearching}>
          <BsSearch className="me-2" /> {isSearching ? "Searching..." : "Search"}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
