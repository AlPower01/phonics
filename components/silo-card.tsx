import Link from "next/link";

import { Pill } from "@/components/pill";

type TopicCard = {
  href: string;
  shortLabel: string;
  accent: string;
  label: string;
  description: string;
};

export function SiloCard({ silo }: { silo: TopicCard }) {
  return (
    <Link
      href={silo.href}
      className="surface-card flex h-full flex-col rounded-[24px] p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
    >
      <div className="mb-4">
        <Pill label={silo.shortLabel} color={silo.accent} />
      </div>
      <h3 className="mb-3 text-2xl">{silo.label}</h3>
      <p className="mb-5 flex-1">{silo.description}</p>
      <span className="button-tertiary">Explore {silo.shortLabel}</span>
    </Link>
  );
}
