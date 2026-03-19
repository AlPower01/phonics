"use client";

import { useMemo, useState } from "react";

import { Review } from "@/data/site";
import { ReviewCard } from "@/components/review-card";

const defaultFilters = {
  age: "All",
  platform: "All",
  price: "All",
  rating: "All",
  sort: "Top Rated",
};

export function FilterBar({ reviews }: { reviews: Review[] }) {
  const [filters, setFilters] = useState(defaultFilters);

  const filtered = useMemo(() => {
    let next = [...reviews];

    if (filters.platform !== "All") {
      next = next.filter((review) => review.platforms.includes(filters.platform));
    }

    if (filters.price !== "All") {
      next = next.filter((review) => review.price === filters.price);
    }

    if (filters.rating !== "All") {
      const min = Number(filters.rating.replace("+", ""));
      next = next.filter((review) => review.overall >= min);
    }

    if (filters.sort === "Newest") {
      next = next.sort((a, b) => Date.parse(b.updated) - Date.parse(a.updated));
    } else if (filters.sort === "Price") {
      next = next.sort((a, b) => a.price.localeCompare(b.price));
    } else {
      next = next.sort((a, b) => b.overall - a.overall);
    }

    return next;
  }, [filters, reviews]);

  const selectClassName =
    "min-h-11 rounded-2xl border border-[rgba(16,36,63,0.12)] bg-white px-4 text-sm font-bold text-ink-900";

  return (
    <div className="space-y-6">
      <div className="surface-card sticky top-20 z-20 rounded-[24px] p-4">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          <select className={selectClassName} value={filters.age} onChange={(event) => setFilters({ ...filters, age: event.target.value })}>
            <option>All</option>
            <option>3-4</option>
            <option>4-5</option>
            <option>5-6</option>
            <option>6-7</option>
            <option>7+</option>
          </select>
          <select className={selectClassName} value={filters.platform} onChange={(event) => setFilters({ ...filters, platform: event.target.value })}>
            <option>All</option>
            <option>iOS</option>
            <option>Android</option>
            <option>Web</option>
          </select>
          <select className={selectClassName} value={filters.price} onChange={(event) => setFilters({ ...filters, price: event.target.value })}>
            <option>All</option>
            <option>Freemium</option>
            <option>Subscription</option>
          </select>
          <select className={selectClassName} value={filters.rating} onChange={(event) => setFilters({ ...filters, rating: event.target.value })}>
            <option>All</option>
            <option>4+</option>
            <option>4.5+</option>
          </select>
          <select className={selectClassName} value={filters.sort} onChange={(event) => setFilters({ ...filters, sort: event.target.value })}>
            <option>Top Rated</option>
            <option>Newest</option>
            <option>Price</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <strong className="text-sm text-ink-900">Showing {filtered.length} of {reviews.length} reviews</strong>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((review) => (
          <ReviewCard key={review.slug} review={review} />
        ))}
      </div>
    </div>
  );
}
