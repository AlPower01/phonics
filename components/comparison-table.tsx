import Link from "next/link";

import { Review } from "@/data/site";
import { formatScore } from "@/lib/site";

export function ComparisonTable({ reviews }: { reviews: Review[] }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[rgba(16,36,63,0.08)] bg-white shadow-[var(--shadow-sm)]">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-paper-100 text-ink-900">
            <tr>
              <th className="px-4 py-4 font-black">App</th>
              <th className="px-4 py-4 font-black">Score</th>
              <th className="px-4 py-4 font-black">Price</th>
              <th className="px-4 py-4 font-black">Ages</th>
              <th className="px-4 py-4 font-black">Platform</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.slug} className="border-t border-[rgba(16,36,63,0.08)]">
                <td className="px-4 py-4 font-bold">
                  <Link href={`/reviews/${review.slug}/`} className="hover:text-brand-600">
                    {review.name}
                  </Link>
                </td>
                <td className="px-4 py-4">{formatScore(review.overall)}</td>
                <td className="px-4 py-4">{review.price}</td>
                <td className="px-4 py-4">{review.ages}</td>
                <td className="px-4 py-4">{review.platforms.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
