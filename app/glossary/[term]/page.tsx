import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteLayout } from "@/components/site-layout";
import { getGlossaryTerm } from "@/data/site";
import { resolveTitleFromHref } from "@/lib/site";

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term } = await params;
  const entry = getGlossaryTerm(term);

  if (!entry) notFound();

  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell max-w-[920px] space-y-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Glossary", href: "/glossary/" }, { label: entry.term }]} />
          <div className="space-y-4 text-center">
            <span className="eyebrow">Phonics glossary</span>
            <h1 className="text-5xl">What is a {entry.term}?</h1>
          </div>
          <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-6">
            <div className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-700">Definition</div>
            <p className="text-lg text-ink-900">{entry.definition}</p>
          </div>
          <article className="surface-card rounded-[28px] p-6">
            <div className="space-y-5">
              {entry.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <section className="surface-card rounded-[28px] p-6">
            <h2 className="mb-4 text-3xl">Learn more about {entry.term.toLowerCase()}</h2>
            <div className="space-y-3">
              {entry.learnMore.map((href) => (
                <Link key={href} href={href} className="block rounded-2xl border border-[rgba(16,36,63,0.08)] bg-white px-4 py-4 font-bold hover:text-brand-600">
                  {resolveTitleFromHref(href)}
                </Link>
              ))}
            </div>
          </section>
          <section className="surface-card rounded-[28px] p-6">
            <h2 className="mb-4 text-3xl">Related terms</h2>
            <div className="flex flex-wrap gap-3">
              {entry.related.map((slug) => (
                <Link key={slug} href={`/glossary/${slug}/`} className="rounded-full border border-[rgba(16,36,63,0.12)] bg-paper-100 px-4 py-2 text-sm font-bold">
                  {slug.replaceAll("-", " ")}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </SiteLayout>
  );
}
