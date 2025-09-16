import type { Business, SearchFormValues } from "../types/models";

type ParamReader = {
  get: (name: string) => string | null;
};

type ParamRecord = Record<string, string | string[] | undefined>;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const normaliseText = (value: string) => value.trim().toLowerCase();

export const DEFAULT_RATING_RANGE: [number, number] = [0, 5];

const normaliseRange = (range?: [number, number]): [number, number] => {
  if (!range) {
    return [...DEFAULT_RATING_RANGE];
  }

  const [start, end] = range;
  const min = clamp(Math.min(start, end), DEFAULT_RATING_RANGE[0], DEFAULT_RATING_RANGE[1]);
  const max = clamp(Math.max(start, end), DEFAULT_RATING_RANGE[0], DEFAULT_RATING_RANGE[1]);

  return [min, max];
};

export const createDefaultSearchValues = (): SearchFormValues => ({
  location: "",
  keywords: "",
  ratingRange: [...DEFAULT_RATING_RANGE],
});

const readParam = (source: ParamReader | ParamRecord | undefined, key: string): string | null => {
  if (!source) {
    return null;
  }

  if (typeof (source as ParamReader).get === "function") {
    return (source as ParamReader).get(key);
  }

  const value = (source as ParamRecord)[key];
  if (Array.isArray(value)) {
    return value.length ? value[0] ?? null : null;
  }

  return value ?? null;
};

const parseNumber = (value: string | null, fallback: number) => {
  if (value === null || value === undefined) {
    return fallback;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const parseSearchParams = (
  params?: ParamReader | ParamRecord
): SearchFormValues => {
  const location = (readParam(params, "location") ?? "").trim();
  const keywords = (readParam(params, "keywords") ?? "").trim();

  const minRatingRaw = parseNumber(readParam(params, "minRating"), DEFAULT_RATING_RANGE[0]);
  const maxRatingRaw = parseNumber(readParam(params, "maxRating"), DEFAULT_RATING_RANGE[1]);
  const ratingRange = normaliseRange([minRatingRaw, maxRatingRaw]);

  return {
    location,
    keywords,
    ratingRange,
  };
};

export const filterBusinesses = (
  values: SearchFormValues,
  dataset: Business[]
): Business[] => {
  const locationTerm = normaliseText(values.location);
  const keywordTerm = normaliseText(values.keywords);
  const [minRating, maxRating] = normaliseRange(values.ratingRange);

  return dataset.filter((business) => {
    const matchesLocation =
      !locationTerm || normaliseText(business.location).includes(locationTerm);

    if (!matchesLocation) {
      return false;
    }

    if (keywordTerm) {
      const keywordSources = [
        business.name,
        business.tagline,
        business.description,
        business.categories.join(" "),
      ].map(normaliseText);

      const matchesKeywords = keywordSources.some((source) => source.includes(keywordTerm));

      if (!matchesKeywords) {
        return false;
      }
    }

    const withinRating = business.rating >= minRating && business.rating <= maxRating;

    return withinRating;
  });
};

export const createSearchParams = (values: SearchFormValues) => {
  const params = new URLSearchParams();

  const location = values.location.trim();
  const keywords = values.keywords.trim();
  const [minRating, maxRating] = normaliseRange(values.ratingRange);

  if (location) {
    params.set("location", location);
  }

  if (keywords) {
    params.set("keywords", keywords);
  }

  if (minRating > DEFAULT_RATING_RANGE[0]) {
    params.set("minRating", minRating.toString());
  }

  if (maxRating < DEFAULT_RATING_RANGE[1]) {
    params.set("maxRating", maxRating.toString());
  }

  return params;
};

export const isDefaultRatingRange = (range: [number, number]) => {
  const [minRating, maxRating] = normaliseRange(range);
  return minRating === DEFAULT_RATING_RANGE[0] && maxRating === DEFAULT_RATING_RANGE[1];
};

export const normaliseSearchValues = (values: SearchFormValues): SearchFormValues => ({
  location: values.location.trim(),
  keywords: values.keywords.trim(),
  ratingRange: normaliseRange(values.ratingRange),
});
