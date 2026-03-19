import Link from "next/link";

import { ClusterPage } from "@/data/site";

export function ClusterGrid({ clusters }: { clusters: ClusterPage[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {clusters.map((cluster) => (
        <article key={cluster.overviewUrl} className="surface-card rounded-[22px] p-5">
          <h3 className="mb-2 text-xl">{cluster.title}</h3>
          <p className="mb-4">{cluster.summary}</p>
          <Link href={cluster.overviewUrl} className="button-tertiary">
            Read guide
          </Link>
        </article>
      ))}
    </div>
  );
}
