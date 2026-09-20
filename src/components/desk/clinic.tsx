import { DRUG_BY_ID } from "@/lib/drugs/catalog";
import { clinicFor, type ClinicCard, type ClinicFlag } from "@/lib/drugs/clinic";
import type { HostContext } from "@/lib/drugs/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const FLAG_TONE: Record<ClinicFlag, "danger" | "warn" | "ok"> = {
  avoid: "danger",
  caution: "warn",
  ok: "ok",
};

function Flag({ label, flag, note, hot }: { label: string; flag?: ClinicFlag; note?: string; hot?: boolean }) {
  if (!flag) return null;
  return (
    <li className={cn("rounded-md px-3 py-2.5", hot ? "bg-accent-soft" : "bg-bg-sunken")}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted">{label}</span>
        <Badge tone={FLAG_TONE[flag]}>{flag}</Badge>
        {hot ? <span className="font-mono text-[10px] uppercase tracking-wide text-accent">this host</span> : null}
      </div>
      {note ? <p className="mt-1.5 text-sm leading-relaxed text-fg">{note}</p> : null}
    </li>
  );
}

function DrugClinic({ id, host }: { id: string; host: HostContext }) {
  const drug = DRUG_BY_ID[id];
  const card = clinicFor(id);
  if (!drug || !card) return null;
  return (
    <article>
      <h3 className="font-serif text-lg tracking-tight text-fg">{drug.name}</h3>
      <ul className="mt-2 space-y-2">
        <Flag
          label="Pregnancy"
          flag={card.pregnancy}
          note={card.pregNote}
          hot={host.preg === "pregnant" && (card.pregnancy === "avoid" || card.pregnancy === "caution")}
        />
        <Flag
          label="Lactation"
          flag={card.lactation}
          note={card.lactNote}
          hot={host.preg === "lactating" && card.lactation === "avoid"}
        />
        <Flag
          label="Kidney"
          flag={card.renal}
          note={card.renalNote}
          hot={host.kidney === "ckd" && Boolean(card.renal && card.renal !== "ok")}
        />
        <Flag
          label="Liver"
          flag={card.hepatic}
          note={card.hepNote}
        />
      </ul>
      {card.boxed ? (
        <p className="mt-3 text-sm leading-relaxed text-fg">
          <span className="font-medium">Boxed / label. </span>
          {card.boxed}
        </p>
      ) : null}
      {card.beers ? (
        <p className={cn("mt-2 text-sm leading-relaxed", host.age === "geriatric" ? "text-fg" : "text-muted")}>
          <span className="font-medium">Beers. </span>
          {card.beers}
          {host.age === "geriatric" ? <span className="ml-2 font-mono text-[10px] uppercase text-accent">this host</span> : null}
        </p>
      ) : null}
      {card.monitor?.length ? (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {card.monitor.map((m) => (
            <li key={m}>
              <Badge tone="info">{m}</Badge>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export function ClinicPanel({ ids, host }: { ids: string[]; host: HostContext }) {
  const present = ids.filter((id) => clinicFor(id));
  if (!present.length) return null;
  const labs = new Set<string>();
  for (const id of present) {
    for (const m of clinicFor(id)?.monitor ?? []) labs.add(m);
  }
  return (
    <section className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
      <h2 className="font-serif text-lg tracking-tight text-fg">Clinic card</h2>
      <p className="mt-1 text-xs text-muted">
        Pregnancy, kidney, liver, Beers, boxed language, and labs. Teaching notes — not a label and not a
        dose. Flip geriatric / CKD / pregnant on the host to score them.
      </p>
      {labs.size ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="self-center text-[11px] uppercase tracking-wide text-muted">Monitor</span>
          {[...labs].map((m) => (
            <Badge key={m} tone="info">
              {m}
            </Badge>
          ))}
        </div>
      ) : null}
      <div className="mt-4 space-y-6">
        {present.map((id) => (
          <DrugClinic key={id} id={id} host={host} />
        ))}
      </div>
    </section>
  );
}

export function clinicPreview(card: ClinicCard): string {
  const bits = [
    card.pregnancy ? `preg ${card.pregnancy}` : "",
    card.renal ? `renal ${card.renal}` : "",
    card.beers ? "Beers" : "",
    card.boxed ? "boxed" : "",
  ].filter(Boolean);
  return bits.join(" · ");
}
