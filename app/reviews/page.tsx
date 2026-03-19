import { Breadcrumbs } from "@/components/breadcrumbs";
import { ComparisonTable } from "@/components/comparison-table";
import { FilterBar } from "@/components/filter-bar";
import { ReviewCard } from "@/components/review-card";
import { SiteLayout } from "@/components/site-layout";
import { reviews } from "@/data/site";

export default function ReviewsPage() {
  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell space-y-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Reviews" }]} />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-4">
              <span className="eyebrow">Reviews hub</span>
              <h1 className="text-5xl">Phonics app and program reviews</h1>
              <p className="max-w-[58ch] text-lg">
                Expert reviews of phonics apps and curricula, scored on instruction quality, usability, engagement, content depth, and value for money.
              </p>
            </div>
            <div className="surface-card rounded-[28px] p-5">
              <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-600">How we rate</div>
              <p className="mt-3">Every review follows the same rubric so families and teachers can compare products with less guesswork.</p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.slug} review={review} />
            ))}
          </div>

          <FilterBar reviews={reviews} />

          <div className="space-y-5">
            <div>
              <span className="eyebrow">Compare top apps</span>
              <h2 className="mt-3 text-4xl">A side-by-side comparison</h2>
            </div>
            <ComparisonTable reviews={reviews} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
