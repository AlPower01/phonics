import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQAccordion } from "@/components/faq-accordion";
import { ReviewCard } from "@/components/review-card";
import { SiteLayout } from "@/components/site-layout";
import { getReview, reviews } from "@/data/site";
import { formatScore } from "@/lib/site";

export default async function SingleReviewPage({
  params,
}: {
  params: Promise<{ app: string }>;
}) {
  const { app } = await params;
  const review = getReview(app);

  if (!review) notFound();

  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell space-y-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Reviews", href: "/reviews/" }, { label: review.name }]} />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-ink-500">
                <span>{review.ages}</span>
                <span>{review.platforms.join(" / ")}</span>
                <span>{review.price}</span>
              </div>
              <h1 className="text-5xl">{review.name} review (2026)</h1>
              <p className="max-w-[60ch] text-lg">{review.summary}</p>
              <div className="text-sm font-bold text-ink-500">
                Reviewed by {review.reviewer} • Updated {review.updated}
              </div>
            </div>
            <div className="surface-card rounded-[30px] p-6">
              <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-600">Overall score</div>
              <div className="mt-4 flex items-center gap-5">
                <div className="inline-flex size-28 items-center justify-center rounded-full bg-emerald-600 text-4xl font-black text-white">
                  {formatScore(review.overall)}
                </div>
                <div>
                  <div className="text-2xl font-black">{review.badge}</div>
                  <p>Best for: {review.bestFor}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface-card rounded-[28px] p-6">
              <div className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-brand-600">Score breakdown</div>
              <div className="space-y-4">
                {review.breakdown.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between text-sm font-bold">
                      <span>{item.label}</span>
                      <span>{formatScore(item.score)} / 5</span>
                    </div>
                    <div className="h-3 rounded-full bg-paper-100">
                      <div className="h-3 rounded-full bg-brand-500" style={{ width: `${(item.score / 5) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-6">
                <div className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Our verdict</div>
                <p className="text-lg text-ink-900">{review.verdict}</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="surface-card rounded-[24px] p-5">
                  <h2 className="mb-3 text-2xl">Pros</h2>
                  <ul className="space-y-2 text-ink-700">
                    {review.pros.map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="surface-card rounded-[24px] p-5">
                  <h2 className="mb-3 text-2xl">Cons</h2>
                  <ul className="space-y-2 text-ink-700">
                    {review.cons.map((item) => (
                      <li key={item}>✕ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <article className="space-y-6">
              <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink-900 prose-p:text-ink-700">
                <h2>Instruction quality and sequence</h2>
                <p>{review.name} performs best when used as part of a clear routine. The strongest parts of the program are its explicit progression and the way activities cue sound-symbol mapping rather than leaving learners to infer the pattern.</p>
                <h2>Usability for adults and children</h2>
                <p>The product keeps navigation simple enough for regular home use, though adults still need a clear sense of what success should look like and how to spot when a child needs more direct teaching off-screen.</p>
                <h2>Final recommendation</h2>
                <p><strong>Best for:</strong> {review.bestFor}. <strong>Skip if:</strong> you need a free full curriculum, highly detailed classroom reporting, or a tool that replaces explicit adult-led instruction.</p>
              </div>
              <FAQAccordion
                items={[
                  { question: `Is ${review.name} good for beginners?`, answer: `${review.name} is strongest when beginners need clear guidance and short, repeatable practice. Adults still need to monitor transfer into real reading.` },
                  { question: `Can ${review.name} replace direct teaching?`, answer: "No. Even the best-rated tools work best when paired with explicit teaching, decodable reading, and responsive adult support." },
                  { question: `Who is ${review.name} best for?`, answer: review.bestFor },
                ]}
              />
            </article>
            <aside className="space-y-5">
              <div className="surface-card rounded-[24px] p-5">
                <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-600">Alternatives to consider</div>
                <div className="mt-4 space-y-4">
                  {reviews.filter((item) => item.slug !== review.slug).slice(0, 3).map((item) => (
                    <div key={item.slug}>
                      <a href={`/reviews/${item.slug}/`} className="font-bold hover:text-brand-600">{item.name}</a>
                      <p className="mt-1 text-sm">{item.bestFor}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="space-y-5">
            <h2 className="text-4xl">Related reviews</h2>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {reviews.filter((item) => item.slug !== review.slug).slice(0, 3).map((item) => (
                <ReviewCard key={item.slug} review={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
