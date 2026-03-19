export function AudienceCallout({
  title,
  body,
  tone,
}: {
  title: string;
  body: string;
  tone: "parent" | "teacher";
}) {
  const palette =
    tone === "parent"
      ? { bg: "var(--parent-100)", border: "#71717a", icon: "Note" }
      : { bg: "var(--teacher-100)", border: "#52525b", icon: "Note" };

  return (
    <div
      className="rounded-[20px] border-l-4 p-5"
      style={{ backgroundColor: palette.bg, borderColor: palette.border }}
    >
      <div className="mb-2 flex items-center gap-3 text-sm font-black uppercase tracking-[0.14em] text-ink-900">
        <span>{palette.icon}</span>
        {title}
      </div>
      <p>{body}</p>
    </div>
  );
}
