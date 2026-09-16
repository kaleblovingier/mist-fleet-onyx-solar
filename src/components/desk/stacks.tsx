import { STACK_LABEL, type StackBar } from "@/lib/drugs/types";
import { cn } from "@/lib/utils";

function tone(score: number) {
  if (score >= 4) return "bg-danger";
  if (score >= 3) return "bg-warn";
  if (score >= 2) return "bg-accent";
  if (score >= 1) return "bg-ink/40";
  return "bg-border";
}

export function StackMeters({ stacks }: { stacks: StackBar[] }) {
  if (stacks.every((s) => s.score === 0)) return null;
  return (
    <section className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
      <div className="mb-3">
        <h2 className="font-serif text-lg tracking-tight text-fg">Stack load</h2>
        <p className="text-xs text-muted">Pharmacodynamic burden on this desk — not a dose calculator.</p>
      </div>
      <ul className="space-y-2.5">
        {stacks.map((s) => (
          <li key={s.axis}>
            <div className="flex items-center gap-3">
              <span className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-wide text-muted">
                {STACK_LABEL[s.axis]}
              </span>
              <span className="grid min-w-0 flex-1 grid-cols-5 gap-1" aria-hidden>
                {Array.from({ length: s.cap }, (_, i) => (
                  <span
                    key={i}
                    className={cn("h-3 rounded-xs", i < s.score ? tone(s.score) : "bg-bg-sunken")}
                  />
                ))}
              </span>
              <span className="w-8 shrink-0 text-right font-mono text-xs tabular-nums text-fg">
                {s.score}/{s.cap}
              </span>
            </div>
            <p className="mt-1 truncate pl-0 text-[11px] text-subtle sm:pl-28">
              {s.items.length ? s.items.join(" · ") : "—"}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
