import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteLayout } from "@/components/site-layout";
import { glossaryTerms } from "@/data/site";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryHubPage() {
  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell space-y-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Glossary" }]} />
          <div className="space-y-4 text-center">
            <span className="eyebrow">Glossary</span>
            <h1 className="text-5xl">Phonics glossary: key terms explained</h1>
            <p className="mx-auto max-w-[56ch] text-lg">
              Clear, crawlable definitions of the phonics terms parents and teachers encounter most often.
            </p>
          </div>
          <div className="surface-card sticky top-20 rounded-[24px] p-5">
            <div className="mb-3 text-center text-sm font-black uppercase tracking-[0.18em] text-brand-600">Jump to letter</div>
            <div className="flex flex-wrap justify-center gap-2">
              {letters.map((letter) => (
                <a key={letter} href={`#${letter}`} className="inline-flex size-10 items-center justify-center rounded-xl border border-[rgba(16,36,63,0.08)] bg-white text-sm font-black">
                  {letter}
                </a>
              ))}
            </div>
          </div>
          {letters.map((letter) => {
            const items = glossaryTerms.filter((term) => term.term.startsWith(letter));
            if (!items.length) return null;
            return (
              <section key={letter} id={letter} className="space-y-4">
                <div className="rounded-[18px] bg-brand-500 px-5 py-3 text-2xl font-black text-white">{letter}</div>
                <div className="space-y-3">
                  {items.map((term) => (
                    <article key={term.slug} className="surface-card rounded-[22px] p-5">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div className="space-y-2">
                          <h2 className="text-2xl">{term.term}</h2>
                          <p>{term.shortDefinition}</p>
                        </div>
                        <Link href={`/glossary/${term.slug}/`} className="button-tertiary">
                          Read more
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
