import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ReviewCard } from "@/components/review-card";
import { SiteLayout } from "@/components/site-layout";
import { articles, parentPathways, reviews, silos } from "@/data/site";
import { resolveArticleFromHref } from "@/lib/site";

export default function ForParentsPage() {
  const parentArticles = articles.filter((article) => article.audience.includes("parent")).slice(0, 6);

  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell space-y-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "For Parents" }]} />
          <div className="rounded-[36px] border border-[rgba(0,0,0,0.08)] bg-white p-8 text-center md:p-10">
            <span className="eyebrow">Parent pathway</span>
            <h1 className="mx-auto mt-4 max-w-[22ch] text-5xl text-balance">Phonics for parents: your guide to teaching your child to read</h1>
            <p className="mx-auto mt-4 max-w-[64ch] text-lg">
              Everything you need to support your child&apos;s reading journey, with clear next-step pathways instead of a generic archive.
            </p>
          </div>

          <section className="space-y-5">
            <h2 className="text-4xl">Choose your child&apos;s reading stage</h2>
            <div className="space-y-6">
              {parentPathways.map((pathway, index) => (
                <article
                  id={pathway.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                  key={pathway.label}
                  className="surface-card scroll-mt-24 rounded-[26px] p-6"
                >
                  <div className="mb-4 flex flex-col gap-3 border-b border-[rgba(0,0,0,0.08)] pb-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <div className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-ink-500">
                        {pathway.age}
                      </div>
                      <h3 className="mb-2 text-2xl">{pathway.label}</h3>
                      <p>{pathway.summary}</p>
                    </div>
                    <div className="text-sm font-semibold text-ink-500">
                      Top 3 articles
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="font-black text-ink-900">Recommended articles</div>
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {pathway.articles.slice(0, 3).map((href) => {
                      const article = resolveArticleFromHref(href);
                      const silo = article ? silos.find((item) => item.id === article.silo) : undefined;

                      if (!article) return null;

                      return (
                        <ArticleCard
                          key={href}
                          href={href}
                          image={article.image}
                          label={silo?.shortLabel ?? "Article"}
                          readTime={article.readTime}
                          title={article.title}
                          excerpt={article.excerpt}
                          variant="compact"
                        />
                      );
                    })}
                    </div>
                  </div>
                  {index === 0 ? <div className="mt-4 text-sm text-ink-500">Progressive disclosure from the wireframe is represented here as always-visible curated paths for faster prototype review.</div> : null}
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-4xl">Popular resources for parents</h2>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {parentArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  href={`/${article.silo}/${article.cluster}/${article.slug}/`}
                  image={article.image}
                  label={silos.find((silo) => silo.id === article.silo)?.shortLabel ?? "Article"}
                  readTime={article.readTime}
                  title={article.title}
                  excerpt={article.excerpt}
                  variant="compact"
                />
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="text-4xl">Recommended apps for parents</h2>
              <Link href="/reviews/" className="button-tertiary">
                All reviews
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {reviews.slice(0, 3).map((review) => (
                <ReviewCard key={review.slug} review={review} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </SiteLayout>
  );
}
