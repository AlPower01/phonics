import { Article, Silo } from "@/data/site";
import { ArticleCard } from "@/components/article-card";

export function FeaturedArticleCard({
  article,
  silo,
}: {
  article: Article;
  silo: Silo;
}) {
  return (
    <ArticleCard
      href={`/${article.silo}/${article.cluster}/${article.slug}/`}
      image={article.image}
      label={silo.shortLabel}
      readTime={article.readTime}
      title={article.title}
      excerpt={article.excerpt}
      variant="compact"
    />
  );
}
