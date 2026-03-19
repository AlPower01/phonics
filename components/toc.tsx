export function TOC({ items }: { items: { id: string; title: string }[] }) {
  return (
    <aside className="surface-card rounded-[24px] p-5 lg:sticky lg:top-28">
      <div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-brand-600">Table of contents</div>
      <div className="space-y-3">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="block text-sm font-bold text-ink-700 hover:text-brand-600">
            {item.title}
          </a>
        ))}
      </div>
    </aside>
  );
}
