import { ArticleCard } from "@/components/article-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteLayout } from "@/components/site-layout";
import { articles, silos } from "@/data/site";

export default function BlogPage() {
  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell space-y-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <h1 className="text-5xl">Blog</h1>
          <p className="max-w-[56ch] text-lg">A lightweight stream for timely commentary and updates that sit outside the core topic hierarchy.</p>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
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
        </div>
      </section>
    </SiteLayout>
  );
}
