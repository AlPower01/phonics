import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteLayout } from "@/components/site-layout";
import { articles, reviews } from "@/data/site";

export default function SearchPage() {
  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell max-w-[920px] space-y-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
          <h1 className="text-5xl">Search the library</h1>
          <div className="surface-card rounded-[24px] p-6">
            <input className="min-h-12 w-full rounded-2xl border border-[rgba(16,36,63,0.12)] bg-white px-4" placeholder="Search phonics terms, guides, reviews, and glossary entries" />
          </div>
          <div className="grid gap-4">
            {[...articles.slice(0, 4).map((article) => ({
              title: article.title,
              href: `/${article.silo}/${article.cluster}/${article.slug}/`,
              description: article.excerpt,
            })), ...reviews.slice(0, 2).map((review) => ({
              title: review.name,
              href: `/reviews/${review.slug}/`,
              description: review.summary,
            }))].map((item) => (
              <Link key={item.href} href={item.href} className="surface-card rounded-[22px] p-5">
                <h2 className="text-2xl">{item.title}</h2>
                <p className="mt-2">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
