import { pillStyle } from "@/lib/site";

export function Pill({
  label,
  color: _color,
}: {
  label: string;
  color: string;
}) {
  return (
    <span
      className="inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em]"
      style={pillStyle(_color)}
    >
      {label}
    </span>
  );
}
