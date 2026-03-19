import Link from "next/link";

import { Article } from "@/data/site";
import { NewsletterCTA } from "@/components/newsletter-cta";

export function ArticleSidebar({
  article,
  related,
}: {
  article: Article;
  related: Article[];
}) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-28">
      <div className="surface-card rounded-[24px] p-5">
        <div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-brand-600">In this article</div>
        <div className="space-y-3">
          {article.sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="block text-sm font-bold text-ink-700 hover:text-brand-600">
              {section.title}
            </a>
          ))}
        </div>
      </div>
      <div className="surface-card rounded-[24px] p-5">
        <div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-brand-600">This skill&apos;s guide</div>
        <div className="space-y-3 text-sm">
          <Link href={`/${article.silo}/${article.cluster}/`} className="block font-bold hover:text-brand-600">
            Cluster overview
          </Link>
          <Link href={`/${article.silo}/`} className="block font-bold hover:text-brand-600">
            Main section page
          </Link>
        </div>
      </div>
      <div className="surface-card rounded-[24px] p-5">
        <div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-brand-600">Related articles</div>
        <div className="space-y-4">
          {related.map((item) => (
            <Link key={item.slug} href={`/${item.silo}/${item.cluster}/${item.slug}/`} className="block hover:text-brand-600">
              <div className="font-bold">{item.title}</div>
              <div className="text-sm text-ink-500">{item.readTime}</div>
            </Link>
          ))}
        </div>
      </div>
      <NewsletterCTA compact audience={article.audience.includes("teacher") ? "Teacher" : "Parent"} />
    </aside>
  );
}
