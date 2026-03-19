import Image from "next/image";
import Link from "next/link";

import { Review } from "@/data/site";
import { formatScore, scoreTone } from "@/lib/site";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="surface-card flex h-full flex-col rounded-[24px] p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="relative size-12 overflow-hidden rounded-2xl">
          <Image src={review.image} alt={review.name} fill className="object-cover" />
        </div>
        <span
          className={`inline-flex size-14 items-center justify-center rounded-full text-lg font-black text-white ${scoreTone(
            review.overall,
          )}`}
        >
          {formatScore(review.overall)}
        </span>
      </div>
      <h3 className="mb-2 text-xl">{review.name}</h3>
      <p className="mb-4 flex-1">{review.summary}</p>
      <div className="mb-4 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em] text-ink-500">
        <span>{review.ages}</span>
        <span>{review.platforms.join(" / ")}</span>
        <span>{review.price}</span>
      </div>
      <Link href={`/reviews/${review.slug}/`} className="button-tertiary">
        Read full review
      </Link>
    </article>
  );
}
