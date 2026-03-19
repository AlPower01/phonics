export function NewsletterCTA({
  title = "Get practical phonics guidance every week",
  body = "One concise email with research-grounded guidance, reviewed tools, and clear next steps for parents and teachers.",
  audience = "Parent",
  compact = false,
}: {
  title?: string;
  body?: string;
  audience?: "Parent" | "Teacher";
  compact?: boolean;
}) {
  return (
    <section
      className={`rounded-[28px] border border-white/40 bg-ink-900 text-white shadow-[var(--shadow-lg)] ${
        compact ? "p-5" : "p-6 md:p-8"
      }`}
    >
      <div className={`${compact ? "space-y-4" : "grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"}`}>
        <div className="space-y-3">
          <span className="eyebrow border-white/15 bg-white/10 text-white">Newsletter</span>
          <h2 className={`${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}>{title}</h2>
          <p className="max-w-[54ch] text-paper-100">{body}</p>
        </div>
        <form className="grid gap-3 self-end">
          <input
            aria-label="Email address"
            type="email"
            placeholder="Email address"
            className="min-h-11 rounded-2xl border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-white/60"
          />
          <select
            aria-label="Audience"
            defaultValue={audience}
            className="min-h-11 rounded-2xl border border-white/15 bg-white/10 px-4 text-sm text-white"
          >
            <option className="text-ink-900">Parent</option>
            <option className="text-ink-900">Teacher</option>
          </select>
          <button type="submit" className="button-primary w-full">
            Subscribe now
          </button>
        </form>
      </div>
    </section>
  );
}
