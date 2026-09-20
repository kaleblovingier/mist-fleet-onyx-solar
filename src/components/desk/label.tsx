import { CDS_CRITERIA, HAZARDS, INDICATIONS, INTENDED_USE, NOT_CLEARED, NOT_FOR, PRIMARY_SOURCES, SOFTWARE, WARNINGS } from "@/lib/regulatory";
import { OPERATOR } from "@/lib/billing/commerce";
import { Badge } from "@/components/ui/badge";

export function LabelPage() {
  return (
    <div className="space-y-5">
      <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Instructions for use</p>
        <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h1 className="font-serif text-3xl tracking-tight text-fg">{SOFTWARE.name}</h1>
          <Badge tone="warn">Not FDA-cleared</Badge>
          <span className="font-mono text-xs text-muted">
            {SOFTWARE.udi} · v{SOFTWARE.version} · {SOFTWARE.released}
          </span>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-fg">{INTENDED_USE}</p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-danger">{NOT_CLEARED}</p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <h2 className="font-serif text-lg tracking-tight text-fg">Indications for use</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-fg">
            {INDICATIONS.map((row) => (
              <li key={row}>{row}</li>
            ))}
          </ol>
        </article>
        <article className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <h2 className="font-serif text-lg tracking-tight text-fg">Not for</h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-fg">
            {NOT_FOR.map((row) => (
              <li key={row} className="text-sm leading-relaxed text-fg">
                {row}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-serif text-lg tracking-tight text-fg">Warnings</h2>
        <ul className="mt-3 space-y-2">
          {WARNINGS.map((w) => (
            <li key={w} className="rounded-md bg-warn-soft px-3 py-2.5 text-sm leading-relaxed text-fg">
              {w}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-serif text-lg tracking-tight text-fg">Non-device CDS criteria</h2>
        <p className="mt-1 text-xs text-muted">
          FDA Clinical Decision Support Software guidance, September 28, 2022. Meeting these criteria is a
          posture, not a clearance.
        </p>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {CDS_CRITERIA.map((c) => (
            <li key={c.id} className="rounded-md bg-bg-sunken px-3 py-3">
              <p className="font-mono text-[11px] uppercase tracking-wide text-accent">
                {c.id} · {c.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-fg">{c.how}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-serif text-lg tracking-tight text-fg">Residual risk</h2>
        <p className="mt-1 text-xs text-muted">ISO 14971-style hazards this desk actually has. Not a full file.</p>
        <ul className="mt-4 divide-y divide-border rounded-md bg-bg-sunken">
          {HAZARDS.map((h) => (
            <li key={h.id} className="grid gap-1 px-3 py-3 sm:grid-cols-[88px_minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-4">
              <span className="font-mono text-xs text-accent">{h.id}</span>
              <span className="text-sm text-fg">{h.hazard}</span>
              <span className="text-sm text-muted">{h.control}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-serif text-lg tracking-tight text-fg">Primary sources</h2>
        <p className="mt-1 text-xs text-muted">
          The label is the authority. These are the public endpoints this desk actually calls.
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {PRIMARY_SOURCES.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center rounded-full bg-bg-sunken px-3 text-xs font-medium text-fg hover:text-accent"
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-serif text-lg tracking-tight text-fg">Manufacturer / complaints</h2>
        <p className="mt-2 text-sm leading-relaxed text-fg">
          {SOFTWARE.manufacturer}. Software version {SOFTWARE.version} ({SOFTWARE.udi}). Report a labeling
          disagreement, a missed collision, or an adverse event associated with use of this desk to{" "}
          <a className="text-accent underline" href={`mailto:${OPERATOR.email}`}>
            {OPERATOR.email}
          </a>{" "}
          or {OPERATOR.phone}. That is a complaint path, not an FDA MedWatch filing — MedWatch is still{" "}
          <a
            className="text-accent underline"
            href="https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program"
            target="_blank"
            rel="noreferrer"
          >
            fda.gov/medwatch
          </a>
          .
        </p>
      </section>
    </div>
  );
}
