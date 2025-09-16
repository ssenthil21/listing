"use client";

import { FormEvent, useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useRouter } from "next/navigation";
import { BsGeoAlt, BsSearch } from "react-icons/bs";

import type { SearchFormValues } from "../../../types/models";
import { useSearch } from "../../search/search-context";
import {
  createSearchParams,
  normaliseSearchValues,
} from "../../../utils/search";

interface SearchFormProps {
  onSearch?: (values: SearchFormValues) => void;
}

const SearchForm = ({ onSearch }: SearchFormProps) => {
  const router = useRouter();
  const { performSearch, isSearching, query } = useSearch();
  const [formValues, setFormValues] = useState<SearchFormValues>(() => ({
    location: query.location,
    keywords: query.keywords,
    ratingRange: [...query.ratingRange],
  }));
  const [errors, setErrors] = useState<Partial<Record<"location" | "keywords", string>>>({});

  useEffect(() => {
    setFormValues({
      location: query.location,
      keywords: query.keywords,
      ratingRange: [...query.ratingRange],
    });
  }, [query.location, query.keywords, query.ratingRange[0], query.ratingRange[1]]);

  const validate = (values: SearchFormValues) => {
    const validationErrors: Partial<Record<"location" | "keywords", string>> = {};
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

    const searchValues = normaliseSearchValues(formValues);
    performSearch(searchValues);

    if (onSearch) {
      onSearch(searchValues);
    } else {
      const params = createSearchParams(searchValues);
      router.push(`/listings?${params.toString()}`);
    }
  };

  const handleRatingChange = (value: number | number[]) => {
    if (!Array.isArray(value)) {
      return;
    }

    setFormValues((previous) => ({
      ...previous,
      ratingRange: [Number(value[0]), Number(value[1])] as [number, number],
    }));
  };

  return (
    <form className="heroSearch style-01 shadow-sm" onSubmit={handleSubmit} aria-label="Business search">
      <div className="row gx-lg-2 gx-md-2 gx-3 gy-sm-2 gy-2">
        <div className="col-xl-10 col-lg-9 col-md-12">
          <div className="row gx-lg-2 gx-md-2 gx-3 gy-sm-2 gy-2">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="form-group">
                <label htmlFor="search-keywords" className="form-label fw-semibold text-dark visually-hidden">
                  What are you looking for?
                </label>
                <div className="mobSearch d-flex align-items-center justify-content-start">
                  <div className="flexStart ps-2 d-flex align-items-center gap-2">
                    <BsSearch className="text-primary" aria-hidden={true} />
                    <span className="fw-semibold text-dark">Find</span>
                  </div>
                  <input
                    id="search-keywords"
                    name="keywords"
                    type="text"
                    className={`form-control fs-6 fw-medium border-0 flex-grow-1 ${
                      errors.keywords ? "is-invalid" : ""
                    }`}
                    placeholder="What are you looking for?"
                    value={formValues.keywords}
                    onChange={(event) => {
                      const { value } = event.target;
                      setFormValues((previous) => ({ ...previous, keywords: value }));
                      setErrors((previous) => ({ ...previous, keywords: undefined }));
                    }}
                    aria-invalid={Boolean(errors.keywords)}
                    autoComplete="off"
                  />
                </div>
                {errors.keywords && (
                  <div className="invalid-feedback d-block">{errors.keywords}</div>
                )}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 single-border">
              <div className="form-group">
                <label htmlFor="search-location" className="form-label fw-semibold text-dark visually-hidden">
                  Where should we search?
                </label>
                <div className="mobSearch d-flex align-items-center justify-content-start">
                  <div className="flexStart ps-2 d-flex align-items-center gap-2">
                    <BsGeoAlt className="text-primary" aria-hidden={true} />
                    <span className="fw-semibold text-dark">Where</span>
                  </div>
                  <input
                    id="search-location"
                    name="location"
                    type="text"
                    className={`form-control fs-6 fw-medium border-0 flex-grow-1 ${
                      errors.location ? "is-invalid" : ""
                    }`}
                    placeholder="City, region, or postcode"
                    value={formValues.location}
                    onChange={(event) => {
                      const { value } = event.target;
                      setFormValues((previous) => ({ ...previous, location: value }));
                      setErrors((previous) => ({ ...previous, location: undefined }));
                    }}
                    aria-invalid={Boolean(errors.location)}
                    autoComplete="off"
                  />
                </div>
                {errors.location && (
                  <div className="invalid-feedback d-block">{errors.location}</div>
                )}
              </div>
            </div>
            <div className="col-12">
              <div className="form-group mb-0">
                <label className="form-label fw-semibold text-dark" id="rating-range-label">
                  Rating range
                </label>
                <div className="searchBar-single-wrap rating-range-control mt-2">
                  <Slider
                    range
                    min={0}
                    max={5}
                    step={0.5}
                    value={formValues.ratingRange}
                    onChange={handleRatingChange}
                    allowCross={false}
                    ariaLabelForHandle={["Minimum rating", "Maximum rating"]}
                    ariaValueTextFormatter={(value) => `${value.toFixed(1)} stars`}
                  />
                  <div className="rating-range__labels mt-2">
                    <span>Min: {formValues.ratingRange[0].toFixed(1)} ★</span>
                    <span>Max: {formValues.ratingRange[1].toFixed(1)} ★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-12 col-sm-12">
          <div className="form-group h-100 d-flex align-items-stretch">
            <button
              type="submit"
              className="btn btn-primary rounded-pill full-width fw-medium w-100"
              disabled={isSearching}
            >
              <BsSearch className="me-2" aria-hidden={true} />
              {isSearching ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
