import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  href: string;
  image: string;
  label: string;
  readTime: string;
  title: string;
  excerpt: string;
  variant?: "landscape" | "compact";
  className?: string;
};

export function ArticleCard({
  href,
  image,
  label,
  readTime,
  title,
  excerpt,
  variant = "compact",
  className,
}: ArticleCardProps) {
  const wrapperClass =
    variant === "landscape"
      ? "grid gap-4 p-4 sm:grid-cols-[112px_1fr] sm:items-start"
      : "space-y-4 p-4";

  const imageClass =
    variant === "landscape"
      ? "relative aspect-[4/3] overflow-hidden rounded-[18px] bg-paper-100"
      : "relative aspect-[16/10] overflow-hidden rounded-[18px] bg-paper-100";

  const contentClass = variant === "landscape" ? "min-w-0 space-y-2 py-1" : "min-w-0 space-y-2";

  return (
    <Link
      href={href}
      className={[
        "surface-card block overflow-hidden rounded-[24px] transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={wrapperClass}>
        <div className={imageClass}>
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className={contentClass}>
          <div className="text-[11px] font-black uppercase tracking-[0.18em] text-ink-500">
            {label} / {readTime}
          </div>
          <h3 className="text-xl leading-tight text-ink-900">{title}</h3>
          <p className="line-clamp-2 text-sm leading-6 text-ink-600">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
