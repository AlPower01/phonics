import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { FeaturedArticleCard } from "@/components/featured-article-card";
import { HeroSection } from "@/components/hero-section";
import { ReviewCard } from "@/components/review-card";
import { SiloCard } from "@/components/silo-card";
import { SiteLayout } from "@/components/site-layout";
import { TrustBar } from "@/components/trust-bar";
import { agePathways, articles, reviews, silos, trustStats, type Silo } from "@/data/site";

export default function HomePage() {
  const featured = articles.slice(0, 3);
  const latest = articles.slice(0, 6);
  const homepageTopics = [
    "phonics",
    "skills",
    "support",
    "teaching",
    "home",
    "science-of-reading",
  ]
    .map((id) => silos.find((silo) => silo.id === id))
    .filter((silo): silo is Silo => silo !== undefined);

  return (
    <SiteLayout>
      <HeroSection />
      <section className="section-space">
        <div className="container-shell space-y-8">
          <div className="max-w-[720px] space-y-3">
            <span className="eyebrow">Explore by topic</span>
            <h2 className="text-4xl">Navigate the site through clear learning pathways</h2>
            <p>Seven core sections organize concepts, skills, teaching, home support, intervention, reviews, and research so every page sits inside a scannable hierarchy.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {homepageTopics.map((silo) => (
              <SiloCard key={silo.id} silo={silo} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell space-y-8">
          <div>
            <span className="eyebrow">Featured content</span>
            <h2 className="mt-3 text-4xl">Start with the guides readers use most</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {featured.map((article) => (
              <FeaturedArticleCard key={article.slug} article={article} silo={silos.find((silo) => silo.id === article.silo)!} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Reviews spotlight</span>
              <h2 className="mt-3 text-4xl">Best Phonics Programs of 2026</h2>
            </div>
            <Link href="/reviews/" className="button-tertiary">
              All reviews
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {reviews.map((review) => (
              <ReviewCard key={review.slug} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell space-y-8">
          <div className="max-w-[720px]">
            <span className="eyebrow">Phonics by age</span>
            <h2 className="mt-3 text-4xl">Choose an age and follow the right next step</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {agePathways.map((pathway) => (
              <Link
                key={pathway.age}
                href={pathway.href}
                className="surface-card rounded-[24px] p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              >
                <div className="mb-4 text-3xl font-black text-brand-600">{pathway.age}</div>
                <h3 className="mb-2 text-xl">{pathway.title}</h3>
                <p>{pathway.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell space-y-8">
          <div>
            <span className="eyebrow">Latest articles</span>
            <h2 className="mt-3 text-4xl">Fresh guidance across the site</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {latest.map((article) => (
              <ArticleCard
                key={article.slug}
                href={`/${article.silo}/${article.cluster}/${article.slug}/`}
                image={article.image}
                label={silos.find((silo) => silo.id === article.silo)?.shortLabel ?? "Article"}
                readTime={article.readTime}
                title={article.title}
                excerpt={article.excerpt}
                variant="landscape"
              />
            ))}
          </div>
          <TrustBar stats={trustStats} />
        </div>
      </section>
    </SiteLayout>
  );
}
