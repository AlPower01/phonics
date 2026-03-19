import { clsx } from "clsx";

import { articles, clusters, getArticle, reviews, silos } from "@/data/site";

export function formatScore(score: number) {
  return score.toFixed(1);
}

export function pillStyle(color: string) {
  return {
    backgroundColor: "#f1f1f3",
    color: "#3f3f46",
  };
}

export function scoreTone(score: number) {
  if (score >= 4.6) return "bg-zinc-800";
  if (score >= 4.2) return "bg-zinc-700";
  if (score >= 3.8) return "bg-zinc-600";
  return "bg-zinc-500";
}

export function resolveTitleFromHref(href: string) {
  if (href.startsWith("/reviews/")) {
    return reviews.find((review) => href.includes(review.slug))?.name ?? href;
  }

  if (href.startsWith("/glossary/")) {
    return href;
  }

  const parts = href.split("/").filter(Boolean);
  if (parts.length === 3) {
    const resolvedArticle = getArticle(parts[0], parts[1], parts[2]);
    if (resolvedArticle) return resolvedArticle.title;
  }

  const article = articles.find((item) => href.includes(`/${item.cluster}/${item.slug}/`));
  if (article) return article.title;

  const cluster = clusters.find((item) => href === item.overviewUrl);
  if (cluster) return cluster.title;

  const silo = silos.find((item) => href === item.href);
  if (silo) return silo.label;

  return href;
}

export function resolveArticleFromHref(href: string) {
  const parts = href.split("/").filter(Boolean);
  if (parts.length !== 3) return undefined;
  return getArticle(parts[0], parts[1], parts[2]);
}

export function cn(...inputs: Parameters<typeof clsx>) {
  return clsx(inputs);
}
