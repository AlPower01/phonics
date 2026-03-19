export function TrustBar({ stats }: { stats: string[] }) {
  return (
    <section className="rounded-[26px] border border-[rgba(16,36,63,0.08)] bg-white px-6 py-5 shadow-[var(--shadow-sm)]">
      <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat} className="rounded-2xl bg-paper-100 px-4 py-4">
            <div className="text-lg font-black text-ink-900">{stat}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
