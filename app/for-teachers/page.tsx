import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ReviewCard } from "@/components/review-card";
import { SiteLayout } from "@/components/site-layout";
import { articles, reviews, silos, teacherPathways } from "@/data/site";
import { resolveArticleFromHref } from "@/lib/site";

export default function ForTeachersPage() {
  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell space-y-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "For Teachers" }]} />
          <div className="rounded-[36px] border border-[rgba(0,0,0,0.08)] bg-white p-8 text-center md:p-10">
            <span className="eyebrow">Teacher pathway</span>
            <h1 className="mx-auto mt-4 max-w-[22ch] text-5xl text-balance">Phonics for teachers: classroom-ready pathways and planning support</h1>
            <p className="mx-auto mt-4 max-w-[64ch] text-lg">
              Professional, curated entry points into the site content so teachers can move from foundations to planning, assessment, and intervention without digging through archives.
            </p>
          </div>

          <section className="space-y-5">
            <h2 className="text-4xl">Choose a teaching context</h2>
            <div className="space-y-6">
              {teacherPathways.map((pathway) => (
                <article key={pathway.label} className="surface-card rounded-[24px] p-6">
                  <div className="mb-4 flex flex-col gap-3 border-b border-[rgba(0,0,0,0.08)] pb-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <h3 className="mb-2 text-2xl">{pathway.label}</h3>
                      <p>{pathway.summary}</p>
                    </div>
                    <div className="text-sm font-semibold text-ink-500">Top 3 articles</div>
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
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-4xl">Popular resources for teachers</h2>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {articles.filter((article) => article.audience.includes("teacher")).slice(0, 6).map((article) => (
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
              <h2 className="text-4xl">Recommended tools for teachers</h2>
              <Link href="/reviews/" className="button-tertiary">
                All reviews
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {reviews.slice(1, 4).map((review) => (
                <ReviewCard key={review.slug} review={review} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </SiteLayout>
  );
}
