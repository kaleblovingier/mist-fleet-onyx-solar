import { cn } from "@/lib/utils";
import type { CannabisRoute, KetamineRoute } from "@/lib/drugs/types";

export function FirstPassMap({
  ketamineRoute,
  cannabisRoute,
  showKetamine,
  showCannabis,
  trayIds = [],
}: {
  ketamineRoute: KetamineRoute;
  cannabisRoute: CannabisRoute;
  showKetamine: boolean;
  showCannabis: boolean;
  /** Desk selection — only name perpetrators that are actually on the tray. */
  trayIds?: string[];
}) {
  if (!showKetamine && !showCannabis) return null;
  const oral =
    (showKetamine && ketamineRoute === "oral") || (showCannabis && cannabisRoute === "oral");
  const skip =
    (showKetamine && ketamineRoute === "iv") || (showCannabis && cannabisRoute === "smoked");
  const tray = new Set(trayIds);
  const namedPerps = [
    tray.has("clarithromycin") ? "Clarithromycin" : null,
    tray.has("grapefruit") ? "grapefruit" : null,
  ].filter(Boolean) as string[];
  const oralKetamineNote =
    namedPerps.length > 0
      ? `Oral ketamine is a 3A4 victim. ${namedPerps.join(" and ")} light${namedPerps.length === 1 ? "s" : ""} this path up.`
      : "Oral ketamine is a 3A4 victim. A strong gut/hepatic 3A4 inhibitor lights this path up — add one to the tray to map it.";

  return (
    <section className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <h2 className="font-serif text-lg tracking-tight text-fg">First-pass river</h2>
          <p className="text-xs text-muted">
            Gut CYP3A4 and hepatic 2B6/3A4 only see what you swallow. IV and smoked skip the trap.
          </p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <PathCard
          title="Oral / edible"
          hot={oral}
          steps={["Mouth", "Gut 3A4", "Portal", "Liver 2B6/3A4", "Systemic"]}
          note={
            showKetamine && ketamineRoute === "oral"
              ? oralKetamineNote
              : showCannabis && cannabisRoute === "oral"
                ? "Edible THC becomes 11-OH-THC here. Smoked THC barely does."
                : "Swallowing puts the whole cytochrome gauntlet between dose and brain."
          }
        />
        <PathCard
          title="IV / smoked / IN"
          hot={skip && !oral}
          steps={["Vein / lung / nose", "Systemic"]}
          note="Hepatic 3A4 still clears on the way out, but intestinal first-pass is gone."
        />
      </div>
    </section>
  );
}

function PathCard({
  title,
  hot,
  steps,
  note,
}: {
  title: string;
  hot: boolean;
  steps: string[];
  note: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg px-4 py-3",
        hot ? "bg-danger-soft text-danger" : "bg-bg-sunken text-fg",
      )}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{title}</div>
      <ol className="mt-3 flex flex-wrap items-center gap-1.5">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-1.5">
            <span
              className={cn(
                "inline-flex h-8 items-center rounded-sm px-2 font-mono text-[11px]",
                hot ? "bg-surface text-danger" : "bg-surface text-fg",
              )}
            >
              {s}
            </span>
            {i < steps.length - 1 ? <span className="text-subtle">→</span> : null}
          </li>
        ))}
      </ol>
      <p className={cn("mt-3 text-xs leading-relaxed", hot ? "text-danger" : "text-muted")}>{note}</p>
    </div>
  );
}
