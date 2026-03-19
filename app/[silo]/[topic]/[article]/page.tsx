import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleSidebar } from "@/components/article-sidebar";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Pill } from "@/components/pill";
import { SiteLayout } from "@/components/site-layout";
import { getArticle, getRelatedArticles, getSilo } from "@/data/site";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ silo: string; topic: string; article: string }>;
}) {
  const { silo, topic, article } = await params;
  const entry = getArticle(silo, topic, article);
  const siloData = getSilo(silo);

  if (!entry || !siloData) notFound();

  const related = getRelatedArticles(entry, 3);

  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell space-y-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: siloData.label, href: `/${silo}/` },
              { label: topic.replaceAll("-", " "), href: `/${silo}/${topic}/` },
              { label: entry.title },
            ]}
          />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="space-y-8">
              <div className="space-y-4">
                <Pill label={siloData.shortLabel} color={siloData.accent} />
                <h1 className="max-w-[22ch] text-5xl text-balance">{entry.title}</h1>
                <div className="text-sm font-bold text-ink-500">
                  Published {entry.published} • Updated {entry.updated} • {entry.readTime} • {entry.author.name}, {entry.author.role}
                </div>
                <p className="max-w-[65ch] text-xl leading-8 text-ink-700">{entry.excerpt}</p>
              </div>

              <div className="overflow-hidden rounded-[28px]">
                <img src={entry.image} alt={entry.title} className="aspect-[16/8] w-full object-cover" />
              </div>

              <div className="max-w-[70ch] space-y-6 text-lg leading-8 text-ink-800">
                <p>{entry.description}</p>
                <p>{entry.keyAnswer}</p>
              </div>

              <div className="space-y-10">
                {entry.sections.map((section, index) => (
                  <section key={section.id} id={section.id} className="max-w-[70ch] space-y-4">
                    <h2 className="text-3xl">{section.title}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="max-w-[70ch] text-lg leading-8">
                        {paragraph}
                      </p>
                    ))}
                    {index === 0 ? (
                      <div className="rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-paper-100 p-5">
                        <div className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-ink-500">In practice</div>
                        <p className="text-base leading-7 text-ink-800">
                          The strongest articles on this site should move from explanation into practical implications, so readers understand both the why and the next move.
                        </p>
                      </div>
                    ) : null}
                  </section>
                ))}
              </div>

              <div className="max-w-[70ch] rounded-[28px] bg-paper-100 p-6">
                <div className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-ink-500">What to remember</div>
                <ul className="space-y-2">
                  {entry.takeaways.map((takeaway) => (
                    <li key={takeaway} className="text-lg text-ink-900">• {takeaway}</li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="surface-card rounded-[24px] p-5">
                  <div className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-ink-500">Keep reading</div>
                  <p>Move back to the topic page for more articles on the same subject, or return to the main section page for a broader overview.</p>
                  <div className="mt-4 space-y-2">
                    <Link href={`/${entry.silo}/${entry.cluster}/`} className="block font-bold hover:text-ink-900">Cluster overview</Link>
                    <Link href={`/${entry.silo}/`} className="block font-bold hover:text-ink-900">Main section page</Link>
                  </div>
                </div>
                <div className="surface-card rounded-[24px] p-5">
                  <div className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-ink-500">Related articles</div>
                  <div className="space-y-3">
                    {related.map((item) => (
                      <Link key={item.slug} href={`/${item.silo}/${item.cluster}/${item.slug}/`} className="block font-bold hover:text-ink-900">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <ArticleSidebar article={entry} related={related} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
