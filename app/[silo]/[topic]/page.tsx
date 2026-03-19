import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/article-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteLayout } from "@/components/site-layout";
import { getArticlesForCluster, getCluster, getSilo } from "@/data/site";

export default async function ClusterPage({
  params,
}: {
  params: Promise<{ silo: string; topic: string }>;
}) {
  const { silo, topic } = await params;
  const siloData = getSilo(silo);
  const cluster = getCluster(silo, topic);

  if (!siloData || !cluster) notFound();
  const clusterArticles = getArticlesForCluster(siloData.id, topic);

  return (
    <SiteLayout>
      <section className="section-space">
        <div className="container-shell space-y-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: siloData.label, href: `/${silo}/` }, { label: cluster.title }]} />
          <div className="rounded-[32px] border border-[rgba(0,0,0,0.08)] bg-paper-100 p-8">
            <span className="eyebrow">{siloData.label}</span>
            <h1 className="mt-4 text-5xl">{cluster.title}</h1>
            <p className="mt-4 max-w-[58ch] text-lg">{cluster.summary}</p>
          </div>
          <article className="space-y-4">
            <h2 className="mb-4 text-3xl">Articles in this topic</h2>
            <p className="max-w-[62ch]">
              This cluster page now acts as a real hub between the pillar page and the article level. Each card below links into a child article within the {cluster.title.toLowerCase()} topic.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {clusterArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  href={`/${article.silo}/${article.cluster}/${article.slug}/`}
                  image={article.image}
                  label={siloData.shortLabel}
                  readTime={article.readTime}
                  title={article.title}
                  excerpt={article.excerpt}
                  variant="compact"
                />
              ))}
            </div>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}
