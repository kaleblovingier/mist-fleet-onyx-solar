import { useEffect, useMemo, useState, type ReactNode } from "react";
import { CheckSquare, Square } from "lucide-react";
import { DRUG_BY_ID } from "@/lib/drugs/catalog";
import { alertsOnDesk } from "@/lib/drugs/alerts";
import { crclOf, phenytoinCorrected, qtcOf, type Sex } from "@/lib/drugs/bedside";
import { LIVERTOX_CAT_TONE, livertoxOnDesk, livertoxUrl } from "@/lib/drugs/livertox";
import { fentanylPatchMme, methadoneFactor, mmeOnDesk } from "@/lib/drugs/mme";
import { hasPhenoConvert, phenoConvertOnDesk } from "@/lib/drugs/pheno-convert";
import { qtReport } from "@/lib/drugs/qt";
import { reversalOnDesk } from "@/lib/drugs/reversal";
import { ancBand, ancWanted } from "@/lib/drugs/anc";
import { inrOnDesk } from "@/lib/drugs/inr";
import { wardWanted, wardsOnDesk } from "@/lib/drugs/wards";
import {
  cypWanted,
  FDA_DDI_TABLE,
  FDA_GRADES,
  indexFor,
  protocolsOnDesk,
  SAFETY_CHECKS,
} from "@/lib/drugs/cyp-protocol";
import { ENZYMES, type Enzyme, type HostContext } from "@/lib/drugs/types";
import { useDesk } from "@/lib/drugs/store";
import {
  guessLastAgonist,
  ID_SCREENS,
  LAST_AGONISTS,
  methadoneMonitor,
  naloxoneCounsel,
  naltrexoneWashout,
  otpWanted,
  precipRisk,
  TAKEHOME_DOMAINS,
  TAKEHOME_RULE,
  type LastAgonist,
  type NtxProduct,
} from "@/lib/drugs/otp";
import {
  HUNTER_FLAGS,
  hunterPositive,
  hunterPreset,
  hunterWhy,
  nmsRiskOnDesk,
  serotonergicOnDesk,
  type HunterKey,
} from "@/lib/drugs/syndrome";
import { tdmHostNote, tdmOnDesk } from "@/lib/drugs/tdm";
import { ASSAY_BY_ID, sortHits, udsHeadline, udsOnDesk, type UdsKind } from "@/lib/drugs/uds";
import {
  bandOf,
  CIWA_BANDS,
  CIWA_ITEMS,
  ciwaMax,
  ciwaWanted,
  COWS_BANDS,
  COWS_ITEMS,
  cowsMax,
  cowsWanted,
  scoreOf,
  type ScaleBand,
  type ScaleItem,
} from "@/lib/drugs/withdrawal";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

type Tab = "otp" | "wards" | "cyp" | "qt" | "levels" | "liver" | "pheno" | "reversal" | "mme" | "hunter" | "uds" | "bedside" | "alerts" | "anc" | "inr";

export function ClinicalBoard({ ids, host }: { ids: string[]; host: HostContext }) {
  const qt = useMemo(() => qtReport(ids, host), [ids.join("|"), host.age, host.kidney]);
  const levels = useMemo(() => tdmOnDesk(ids), [ids.join("|")]);
  const liver = useMemo(() => livertoxOnDesk(ids), [ids.join("|")]);
  const pheno = useMemo(() => phenoConvertOnDesk(ids, host), [ids.join("|"), host]);
  const reversal = useMemo(() => reversalOnDesk(ids), [ids.join("|")]);
  const mme = useMemo(() => mmeOnDesk(ids), [ids.join("|")]);
  const hunterOn = useMemo(() => serotonergicOnDesk(ids).length + nmsRiskOnDesk(ids).length > 0, [ids.join("|")]);
  const uds = useMemo(() => udsOnDesk(ids), [ids.join("|")]);
  const alerts = useMemo(() => alertsOnDesk(ids), [ids.join("|")]);
  const otp = otpWanted(ids);
  const cypOn = cypWanted(ids);
  const ancOn = ancWanted(ids);
  const wardsOn = wardWanted(ids);
  const inr = useMemo(() => inrOnDesk(ids), [ids.join("|")]);
  const tabs = useMemo(() => {
    const t: { id: Tab; label: string; on: boolean }[] = [
      { id: "otp", label: "OTP", on: otp },
      { id: "wards", label: "Wards", on: wardsOn },
      { id: "cyp", label: "CYP", on: cypOn },
      { id: "qt", label: "QT", on: Boolean(qt) },
      { id: "levels", label: "Levels", on: levels.length > 0 },
      { id: "liver", label: "LiverTox", on: liver.length > 0 },
      { id: "pheno", label: "Pheno", on: hasPhenoConvert(ids, host) || pheno.some((r) => r.shifted) },
      { id: "reversal", label: "Reversal", on: reversal.length > 0 },
      { id: "mme", label: "MME", on: mme.length > 0 },
      { id: "hunter", label: "Hunter", on: hunterOn },
      { id: "uds", label: "UDS", on: uds.length > 0 },
      { id: "anc", label: "ANC", on: ancOn },
      { id: "inr", label: "INR", on: Boolean(inr) },
      { id: "bedside", label: "Bedside", on: true },
      { id: "alerts", label: "Alerts", on: alerts.length > 0 },
    ];
    return t;
  }, [qt, levels.length, liver.length, pheno, reversal.length, mme.length, hunterOn, uds.length, alerts.length, ids, host, otp, cypOn, ancOn, inr, wardsOn]);
  const [tab, setTab] = useState<Tab>("otp");
  const live = tabs.some((t) => t.id === tab && t.on) ? tab : (tabs.find((t) => t.on)?.id ?? "bedside");

  if (!tabs.some((t) => t.on && t.id !== "bedside") && ids.length === 0) return null;

  return (
    <section className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-serif text-lg tracking-tight text-fg">Clinical board</h2>
          <p className="mt-1 text-xs text-muted">
            QT, TDM, LiverTox, phenoconversion, CYP start/stop clocks, reversal, MME, Hunter, UDS,
            OTP tools, Wards collisions, ANC, INR, COWS / CIWA, bedside math. Teaching — not a
            protocol, not a QTc, not a dose.
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              disabled={!t.on}
              onClick={() => setTab(t.id)}
              className={cn(
                "h-10 rounded-full px-3 text-xs font-medium",
                live === t.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
                !t.on && "opacity-40",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {live === "otp" && otp ? <OtpPanel ids={ids} qtPartner={Boolean(qt?.rows.some((r) => r.id !== "methadone"))} /> : null}
        {live === "wards" && wardsOn ? <WardsPanel ids={ids} /> : null}
        {live === "cyp" && cypOn ? <CypPanel ids={ids} /> : null}
        {live === "qt" && qt ? <QtPanel report={qt} /> : null}
        {live === "levels" && levels.length ? <LevelsPanel rows={levels} host={host} /> : null}
        {live === "liver" && liver.length ? <LiverPanel rows={liver} /> : null}
        {live === "pheno" ? <PhenoPanel rows={pheno} /> : null}
        {live === "reversal" && reversal.length ? <ReversalPanel rows={reversal} /> : null}
        {live === "mme" && mme.length ? <MmePanel rows={mme} /> : null}
        {live === "hunter" ? <HunterPanel ids={ids} /> : null}
        {live === "uds" && uds.length ? <UdsPanel ids={ids} /> : null}
        {live === "anc" && ancOn ? <AncPanel /> : null}
        {live === "inr" && inr ? <InrPanel report={inr} /> : null}
        {live === "bedside" ? <BedsidePanel ids={ids} host={host} /> : null}
        {live === "alerts" && alerts.length ? <AlertsPanel rows={alerts} /> : null}
      </div>
    </section>
  );
}

function CypPanel({ ids }: { ids: string[] }) {
  const cards = useMemo(() => protocolsOnDesk(ids), [ids.join("|")]);
  const add = useDesk((s) => s.add);
  const selected = useDesk((s) => s.selected);
  const [phase, setPhase] = useState<"start" | "stop">("start");
  const [enzyme, setEnzyme] = useState<Enzyme>("CYP3A4");
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const index = useMemo(() => indexFor(enzyme), [enzyme]);
  useEffect(() => {
    const next = protocolsOnDesk(ids)[0]?.enzymes[0];
    if (next) setEnzyme(next);
  }, [ids]);

  return (
    <div className="space-y-5">
      <p className="text-sm leading-relaxed text-muted">
        FDA DDI grades, start vs stop, TDI linger, induction lag. Huang 2007 / FDA 2020 teaching —
        not a milligram and not a hold. The Prescribing Information is the authority.
      </p>

      <div className="flex flex-wrap gap-1">
        {(["start", "stop"] as const).map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPhase(p)}
            className={cn(
              "h-10 rounded-full px-3 text-xs font-medium",
              phase === p ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
            )}
          >
            {p === "start" ? "Start clock" : "Stop clock"}
          </button>
        ))}
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        {(
          [
            ["inhibitor", "strong"],
            ["inhibitor", "moderate"],
            ["inducer", "strong"],
          ] as const
        ).map(([kind, strength]) => {
          const g = FDA_GRADES[kind][strength];
          return (
            <div key={`${kind}-${strength}`} className="rounded-md bg-bg-sunken px-3 py-2.5">
              <p className="text-xs font-medium text-fg">{g.label}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-muted">{g.fold}</p>
            </div>
          );
        })}
      </div>

      {cards.length ? (
        cards.map((card) => {
          const clock = phase === "start" ? card.start : card.stop;
          return (
            <article key={card.perpId} className={cn("rounded-md px-3 py-3", toneClass(card.tone))}>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-serif text-lg tracking-tight text-fg">{card.name}</h3>
                <Badge tone={card.tone === "danger" ? "danger" : card.tone === "warn" ? "warn" : "info"}>
                  {card.grade}
                </Badge>
                <Badge tone="default">{card.clock === "tdi" ? "TDI" : card.clock}</Badge>
                {card.dualHit ? <Badge tone="warn">3A4 + P-gp</Badge> : null}
              </div>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                {card.enzymes.join(" · ")} · {card.fold}
              </p>
              <p className="mt-2 text-sm font-medium text-fg">
                {clock.title}
                <span className="ml-2 font-mono text-[11px] font-normal text-muted"> · {clock.days}</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-fg">{clock.body}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{clock.watch}</p>
              {card.linger && phase === "stop" ? (
                <p className="mt-2 text-sm leading-relaxed text-fg">{card.linger}</p>
              ) : null}
              {card.victims.length ? (
                <ul className="mt-3 flex flex-wrap gap-1">
                  {card.victims.slice(0, 8).map((v) => (
                    <li key={`${v.id}-${v.enzyme}`}>
                      <Badge tone={v.nti ? "danger" : v.sensitivity === "sensitive" ? "warn" : "default"}>
                        {v.name}
                        {v.nti ? " NTI" : ""}
                        {v.pathway === "activation" ? " prodrug" : ""}
                      </Badge>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-xs text-muted">
                  No mapped victim on the desk. Add a sensitive substrate from the index table below.
                </p>
              )}
            </article>
          );
        })
      ) : (
        <p className="text-sm leading-relaxed text-muted">
          Add a strong or moderate perpetrator — clarithromycin, paroxetine, fluvoxamine, rifampin,
          ketoconazole — then a victim. The clock is the point, not a second PK row.
        </p>
      )}

      {cards[0] ? (
        <article className="rounded-md bg-bg-sunken px-3 py-3">
          <h3 className="font-serif text-lg tracking-tight text-fg">Safety steps</h3>
          <p className="mt-1 text-xs text-muted">Teaching checklist for the hottest perpetrator on this desk. Nothing is stored.</p>
          <ul className="mt-3 space-y-1">
            {cards[0].steps.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => setChecks((prev) => ({ ...prev, [s.id]: !prev[s.id] }))}
                  className={cn(
                    "flex h-auto min-h-10 w-full items-start gap-2 rounded-md px-3 py-2 text-left",
                    checks[s.id] ? "bg-accent-soft text-fg" : "bg-surface text-muted hover:text-fg",
                  )}
                >
                  <span className="mt-0.5">
                    {checks[s.id] ? <CheckSquare className="size-4" /> : <Square className="size-4" />}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-fg">{s.title}</span>
                    <span className="block text-xs leading-relaxed text-muted">{s.body}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </article>
      ) : (
        <article className="rounded-md bg-bg-sunken px-3 py-3">
          <h3 className="font-serif text-lg tracking-tight text-fg">Safety steps</h3>
          <ul className="mt-3 space-y-2">
            {SAFETY_CHECKS.map((s) => (
              <li key={s.id}>
                <p className="text-sm font-medium text-fg">{s.title}</p>
                <p className="text-xs leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ul>
        </article>
      )}

      <article className="rounded-md bg-bg-sunken px-3 py-3">
        <h3 className="font-serif text-lg tracking-tight text-fg">FDA index table</h3>
        <p className="mt-1 text-xs text-muted">
          Example substrates, inhibitors, and inducers on this desk. Tap to add.{" "}
          <a className="text-accent underline" href={FDA_DDI_TABLE} target="_blank" rel="noreferrer">
            Open the FDA table
          </a>
          .
        </p>
        <div className="mt-3 flex flex-wrap gap-1">
          {ENZYMES.map((e) => (
            <button
              key={e}
              type="button"
              onClick={() => setEnzyme(e)}
              className={cn(
                "h-10 rounded-full px-3 font-mono text-xs font-medium",
                enzyme === e ? "bg-ink text-bg" : "bg-surface text-muted hover:text-fg",
              )}
            >
              {e.replace("CYP", "")}
            </button>
          ))}
        </div>
        {(
          [
            ["Substrates", index.substrates],
            ["Inhibitors", index.inhibitors],
            ["Inducers", index.inducers],
          ] as const
        ).map(([label, rows]) =>
          rows.length ? (
            <div key={label} className="mt-3">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted">{label}</p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {rows.map((r) => {
                  const on = selected.includes(r.id);
                  return (
                    <button
                      key={`${r.role}-${r.id}-${r.grade}`}
                      type="button"
                      disabled={on}
                      onClick={() => add(r.id)}
                      className={cn(
                        "h-10 rounded-full px-3 text-xs",
                        on ? "bg-ink/20 text-muted" : "bg-surface text-fg hover:text-accent",
                      )}
                    >
                      {r.name}
                      <span className="ml-1 text-[10px] text-muted">{r.grade}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null,
        )}
      </article>

      <p className="text-[11px] leading-relaxed text-subtle">
        Not FDA-cleared. Independently review the{" "}
        <a className="text-accent underline" href={FDA_DDI_TABLE} target="_blank" rel="noreferrer">
          FDA index table
        </a>{" "}
        and each victim’s Prescribing Information. FirstPass does not pick a milligram, a hold, or a
        restart.
      </p>
    </div>
  );
}

function QtPanel({ report }: { report: NonNullable<ReturnType<typeof qtReport>> }) {
  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed text-fg">{report.headline}</p>
      <ul className="space-y-2">
        {report.rows.map((row) => (
          <li key={row.id} className="rounded-md bg-bg-sunken px-3 py-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-fg">{row.name}</span>
              <Badge tone={row.risk === "known" ? "danger" : "warn"}>
                {row.risk === "known" ? "known risk" : "possible"}
              </Badge>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-muted">{row.note}</p>
          </li>
        ))}
      </ul>
      {report.amplifiers.length ? (
        <ul className="space-y-1.5">
          {report.amplifiers.map((a) => (
            <li key={a} className="text-sm leading-relaxed text-fg">
              {a}
            </li>
          ))}
        </ul>
      ) : null}
      <p className="text-sm leading-relaxed text-muted">{report.tell}</p>
      <p className="text-[11px] leading-relaxed text-subtle">
        Known / possible is this desk’s PD map, paraphrasing public QT lists (CredibleMeds). Not a QTc
        and not a substitute for an ECG. Bedside tab has Bazett / Fridericia.
      </p>
    </div>
  );
}

function LevelsPanel({
  rows,
  host,
}: {
  rows: ReturnType<typeof tdmOnDesk>;
  host: HostContext;
}) {
  return (
    <div className="space-y-4">
      {rows.map(({ id, card }) => {
        const drug = DRUG_BY_ID[id];
        const hostNote = tdmHostNote(id, host);
        return (
          <article key={id} className="rounded-md bg-bg-sunken px-3 py-3">
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="font-serif text-lg tracking-tight text-fg">{drug?.name ?? id}</h3>
              <span className="font-mono text-[11px] uppercase tracking-wide text-muted">{card.analyte}</span>
            </div>
            <dl className="mt-2 grid gap-2 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wide text-muted">Window</dt>
                <dd className="text-sm text-fg">
                  {card.trough}
                  {card.unit ? ` ${card.unit}` : ""}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wide text-muted">Toxic</dt>
                <dd className="text-sm text-fg">{card.toxic}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-mono text-[10px] uppercase tracking-wide text-muted">Draw</dt>
                <dd className="text-sm text-fg">{card.draw}</dd>
              </div>
            </dl>
            <p className="mt-2 text-sm leading-relaxed text-fg">{card.pearl}</p>
            {hostNote ? (
              <p className="mt-2 text-sm leading-relaxed text-accent">
                <span className="font-mono text-[10px] uppercase tracking-wide">this host · </span>
                {hostNote}
              </p>
            ) : null}
          </article>
        );
      })}
      <p className="text-[11px] leading-relaxed text-subtle">
        Windows are teaching ranges from labeled / consensus TDM. Lab methods differ. Not a draw-time
        order and not a dose.
      </p>
    </div>
  );
}

function LiverPanel({ rows }: { rows: ReturnType<typeof livertoxOnDesk> }) {
  return (
    <div className="space-y-3">
      {rows.map(({ id, card }) => {
        const drug = DRUG_BY_ID[id];
        const name = drug?.name ?? id;
        return (
          <article key={id} className="rounded-md bg-bg-sunken px-3 py-3">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-medium text-fg">{name}</h3>
              <Badge tone={LIVERTOX_CAT_TONE[card.cat]}>
                {card.cat} · {card.label}
              </Badge>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-fg">{card.pearl}</p>
            <a
              href={livertoxUrl(id, name)}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex h-10 items-center text-sm text-accent hover:underline"
            >
              Open LiverTox
            </a>
          </article>
        );
      })}
      <p className="text-[11px] leading-relaxed text-subtle">
        Categories paraphrase NIDDK LiverTox (A = well-known cause). Open the chapter for the case
        series. Not a fibrosis score.
      </p>
    </div>
  );
}

function PhenoPanel({ rows }: { rows: ReturnType<typeof phenoConvertOnDesk> }) {
  if (!rows.length) {
    return (
      <p className="text-sm leading-relaxed text-muted">
        Add a 2D6 / 2C19 perpetrator next to a victim — paroxetine × codeine is the teaching pair. A
        strong inhibitor rewrites the genotype on this desk. Search <span className="font-mono">phenoconversion</span>.
      </p>
    );
  }
  return (
    <div className="space-y-4">
      {rows.map((row) => (
        <article key={row.enzyme} className={cn("rounded-md px-3 py-3", row.shifted ? "bg-accent-soft" : "bg-bg-sunken")}>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-mono text-sm text-fg">{row.enzyme}</h3>
            <Badge tone={row.shifted ? "warn" : "info"}>
              {row.genotype} → {row.clinical}
            </Badge>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-fg">{row.pearl}</p>
          {row.inhibitors.length ? (
            <p className="mt-2 text-xs text-muted">
              Inhibitors: {row.inhibitors.map((p) => `${p.name} (${p.strength})`).join(", ")}
            </p>
          ) : null}
          {row.inducers.length ? (
            <p className="mt-1 text-xs text-muted">
              Inducers: {row.inducers.map((p) => `${p.name} (${p.strength})`).join(", ")}
            </p>
          ) : null}
          {row.victims.length ? (
            <p className="mt-1 text-xs text-muted">
              Victims: {row.victims.map((v) => `${v.name}${v.pathway === "activation" ? " (prodrug)" : ""}`).join(", ")}
            </p>
          ) : null}
        </article>
      ))}
      <p className="text-[11px] leading-relaxed text-subtle">
        Shah & Smith: phenoconversion is the Achilles heel of a genotype report. CPIC still lists the
        lab. This desk scores the enzyme the patient actually has.
      </p>
    </div>
  );
}

function ReversalPanel({ rows }: { rows: ReturnType<typeof reversalOnDesk> }) {
  return (
    <div className="space-y-3">
      {rows.map((row) => (
        <article key={`${row.id}-${row.card.agent}`} className="rounded-md bg-bg-sunken px-3 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-medium text-fg">{row.name}</h3>
            <Badge tone={row.card.kind === "will-not" ? "danger" : row.card.kind === "antidote" ? "ok" : "warn"}>
              {row.card.kind === "will-not" ? "will not reverse" : row.card.kind}
            </Badge>
          </div>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">{row.card.for}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-fg">
            <span className="font-medium">{row.card.agent}. </span>
            {row.card.pearl}
          </p>
          {row.card.caution ? <p className="mt-1.5 text-sm leading-relaxed text-danger">{row.card.caution}</p> : null}
        </article>
      ))}
      <p className="text-[11px] leading-relaxed text-subtle">
        Teaching reversal map. Not a tox protocol, not a dose, and not permission to skip airway.
      </p>
    </div>
  );
}

function MmePanel({ rows }: { rows: ReturnType<typeof mmeOnDesk> }) {
  const [doses, setDoses] = useState<Record<string, string>>({});
  let total = 0;
  let countable = 0;
  const parts: string[] = [];
  for (const row of rows) {
    const raw = Number(doses[row.id]);
    if (!Number.isFinite(raw) || raw <= 0) continue;
    let factor = row.factor;
    if (row.id === "methadone") factor = methadoneFactor(raw);
    if (row.id === "fentanyl") {
      const mme = fentanylPatchMme(raw);
      if (mme == null) continue;
      total += mme;
      countable += 1;
      parts.push(`${raw} mcg/hr patch ≈ ${Math.round(mme)} MME`);
      continue;
    }
    if (factor == null) continue;
    const mme = raw * factor;
    total += mme;
    countable += 1;
    parts.push(`${raw} × ${factor} = ${Math.round(mme * 10) / 10}`);
  }
  return (
    <div className="space-y-4">
      <ul className="space-y-3">
        {rows.map((row) => {
          const name = DRUG_BY_ID[row.id]?.name ?? row.id;
          return (
            <li key={row.id} className="rounded-md bg-bg-sunken px-3 py-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-sm font-medium text-fg">{name}</h3>
                  <p className="font-mono text-[11px] text-muted">
                    {row.factor == null ? "not converted" : `× ${row.factor}`} · {row.unit}
                  </p>
                </div>
                {row.factor != null || row.id === "methadone" || row.id === "fentanyl" ? (
                  <label className="flex items-center gap-2">
                    <span className="sr-only">Daily amount for {name}</span>
                    <Input
                      inputMode="decimal"
                      className="h-10 w-24"
                      placeholder={row.id === "fentanyl" ? "mcg/hr" : "mg/d"}
                      value={doses[row.id] ?? ""}
                      onChange={(e) => setDoses((d) => ({ ...d, [row.id]: e.target.value }))}
                    />
                  </label>
                ) : null}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-fg">{row.hint}</p>
              {row.note ? <p className="mt-1 text-sm leading-relaxed text-muted">{row.note}</p> : null}
            </li>
          );
        })}
      </ul>
      {countable ? (
        <p className="text-sm text-fg">
          Teaching sum ≈ <span className="font-mono">{Math.round(total)}</span> oral morphine milligram-equivalents
          {parts.length ? ` (${parts.join("; ")})` : ""}. CDC 2022 factors. Not a conversion order.
        </p>
      ) : (
        <p className="text-sm text-muted">Enter a daily oral milligram (patch mcg/hr for fentanyl) to sketch MME. Street mass stays blank on purpose.</p>
      )}
      <p className="text-[11px] leading-relaxed text-subtle">
        Incomplete for methadone OTP, buprenorphine MOUD, and anything stamped. 50 / 90 MME cuts are
        policy history — this desk does not apply them as a dose.
      </p>
    </div>
  );
}

function HunterPanel({ ids }: { ids: string[] }) {
  const sero = serotonergicOnDesk(ids);
  const nms = nmsRiskOnDesk(ids);
  const [on, setOn] = useState<Record<HunterKey, boolean>>(() => {
    const preset = hunterPreset(ids);
    const base = Object.fromEntries(HUNTER_FLAGS.map((f) => [f.key, false])) as Record<HunterKey, boolean>;
    return { ...base, ...preset };
  });
  useEffect(() => {
    const sero = serotonergicOnDesk(ids).length > 0;
    setOn((prev) => (prev.serotonergic === sero ? prev : { ...prev, serotonergic: sero }));
  }, [ids.join("|")]);
  const positive = hunterPositive(on);
  function toggle(key: HunterKey) {
    setOn((prev) => ({ ...prev, [key]: !prev[key] }));
  }
  return (
    <div className="space-y-4">
      {sero.length ? (
        <p className="text-sm leading-relaxed text-fg">
          Serotonergic on this desk: {sero.map((s) => `${s.name} (${s.why})`).join("; ")}.
        </p>
      ) : (
        <p className="text-sm leading-relaxed text-muted">
          No serotonergic mapped. Tick the first box if one is in the history (fluoxetine lingers weeks).
        </p>
      )}
      <ul className="grid gap-1 sm:grid-cols-2">
        {HUNTER_FLAGS.map((f) => (
          <li key={f.key}>
            <button
              type="button"
              onClick={() => toggle(f.key)}
              className={cn(
                "flex h-auto min-h-10 w-full items-start gap-2 rounded-md px-3 py-2 text-left",
                on[f.key] ? "bg-accent-soft text-fg" : "bg-bg-sunken text-muted hover:text-fg",
              )}
            >
              <span className="mt-0.5 text-fg">
                {on[f.key] ? <CheckSquare className="size-4" /> : <Square className="size-4" />}
              </span>
              <span>
                <span className="block text-sm font-medium text-fg">{f.label}</span>
                <span className="block text-xs text-muted">{f.hint}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <p className={cn("text-sm leading-relaxed", positive ? "text-danger" : "text-fg")}>{hunterWhy(on)}</p>
      {nms.length ? (
        <div className="rounded-md bg-warn-soft px-3 py-3">
          <p className="font-mono text-[10px] uppercase tracking-wide text-warn">NMS contrast</p>
          <p className="mt-1 text-sm leading-relaxed text-fg">
            Dopamine blocker on this desk ({nms.map((n) => n.name).join(", ")}). NMS is lead-pipe
            rigidity, bradyreflexia, slower onset. Hunter is clonus and hyperreflexia. Do not give
            dantrolene for serotonin toxicity because the intern said ‘fever.’
          </p>
        </div>
      ) : null}
      <p className="text-[11px] leading-relaxed text-subtle">
        Dunkley 2003 Hunter criteria. Cyproheptadine is adjunct on the Reversal tab. Not a charted
        diagnosis.
      </p>
    </div>
  );
}

function UdsPanel({ ids }: { ids: string[] }) {
  const cards = udsOnDesk(ids);
  const headline = udsHeadline(ids);
  const toneFor = (kind: UdsKind): "ok" | "warn" | "danger" =>
    kind === "expected" ? "ok" : kind === "miss" ? "warn" : "danger";
  const labelFor = (kind: UdsKind) =>
    kind === "expected" ? "lights" : kind === "miss" ? "misses" : "false +";
  return (
    <div className="space-y-4">
      {headline ? <p className="text-sm leading-relaxed text-fg">{headline}</p> : null}
      {cards.map((card) => {
        const drug = DRUG_BY_ID[card.id];
        return (
          <article key={card.id} className="rounded-md bg-bg-sunken px-3 py-3">
            <h3 className="font-serif text-lg tracking-tight text-fg">{drug?.name ?? card.id}</h3>
            <p className="mt-1 text-sm leading-relaxed text-fg">{card.pearl}</p>
            {card.hits.length ? (
              <ul className="mt-3 space-y-2">
                {sortHits(card.hits).map((h) => {
                  const assay = ASSAY_BY_ID[h.assay];
                  return (
                    <li key={`${card.id}-${h.assay}-${h.kind}`} className="rounded-md bg-surface px-3 py-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium text-fg">{assay.label}</span>
                        <Badge tone={toneFor(h.kind)}>{labelFor(h.kind)}</Badge>
                        <span className="font-mono text-[10px] uppercase tracking-wide text-muted">{assay.target}</span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{h.note}</p>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-muted">No cheap drugs-of-abuse cup is built for this one.</p>
            )}
          </article>
        );
      })}
      <p className="text-[11px] leading-relaxed text-subtle">
        Presumptive immunoassay, not LC-MS/MS. Kit antibodies differ. Saitman 2014 is on the Cites shelf.
        A cup is not a diagnosis and not a take-home decision.
      </p>
    </div>
  );
}

function BedsidePanel({ ids, host }: { ids: string[]; host: HostContext }) {
  const [qt, setQt] = useState("400");
  const [hr, setHr] = useState("60");
  const [age, setAge] = useState(host.age === "geriatric" ? "78" : "42");
  const [wt, setWt] = useState("70");
  const [scr, setScr] = useState("1.0");
  const [sex, setSex] = useState<Sex>("male");
  const qtc = qtcOf({ qtMs: Number(qt), hr: Number(hr) });
  const crcl = crclOf({ age: Number(age), weightKg: Number(wt), scr: Number(scr), sex });
  const showCows = cowsWanted(ids) || ids.length === 0;
  const showCiwa = ciwaWanted(ids, host.alcohol) || ids.includes("ethanol");
  const precip = ids.includes("buprenorphine") && ids.some((id) =>
    ["fentanyl", "dirty-30", "heroin", "methadone", "oxycodone", "hydrocodone"].includes(id),
  );
  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
      <article>
        <h3 className="font-serif text-lg tracking-tight text-fg">QTc</h3>
        <p className="mt-1 text-xs text-muted">QT ms and heart rate. Bazett and Fridericia both print.</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <label className="text-xs text-muted">
            QT (ms)
            <Input className="mt-1" inputMode="decimal" value={qt} onChange={(e) => setQt(e.target.value)} />
          </label>
          <label className="text-xs text-muted">
            HR
            <Input className="mt-1" inputMode="decimal" value={hr} onChange={(e) => setHr(e.target.value)} />
          </label>
        </div>
        {qtc ? (
          <dl className="mt-3 space-y-1 text-sm">
            <div className="flex justify-between gap-2">
              <dt className="text-muted">Bazett</dt>
              <dd className="font-mono text-fg">{qtc.bazett} ms</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-muted">Fridericia</dt>
              <dd className="font-mono text-fg">{qtc.fridericia} ms</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-muted">RR</dt>
              <dd className="font-mono text-fg">{qtc.rr} s</dd>
            </div>
          </dl>
        ) : (
          <p className="mt-3 text-sm text-muted">Need QT 200–800 ms and HR 30–220.</p>
        )}
        {qtc ? <p className="mt-2 text-sm leading-relaxed text-fg">{qtc.note}</p> : null}
      </article>
      <article>
        <h3 className="font-serif text-lg tracking-tight text-fg">CrCl</h3>
        <p className="mt-1 text-xs text-muted">Cockcroft–Gault. Flip CKD on the host to score the clinic cards.</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <label className="text-xs text-muted">
            Age
            <Input className="mt-1" inputMode="decimal" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
          <label className="text-xs text-muted">
            Weight (kg)
            <Input className="mt-1" inputMode="decimal" value={wt} onChange={(e) => setWt(e.target.value)} />
          </label>
          <label className="text-xs text-muted">
            SCr (mg/dL)
            <Input className="mt-1" inputMode="decimal" value={scr} onChange={(e) => setScr(e.target.value)} />
          </label>
          <div className="text-xs text-muted">
            Sex
            <div className="mt-1 flex gap-1">
              {(["male", "female"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSex(s)}
                  className={cn(
                    "h-10 flex-1 rounded-full text-xs font-medium",
                    sex === s ? "bg-ink text-bg" : "bg-bg-sunken text-muted",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
        {crcl ? (
          <p className="mt-3 text-sm text-fg">
            CrCl ≈ <span className="font-mono">{crcl.crcl}</span> mL/min
            {crcl.band !== "usual" ? (
              <Badge className="ml-2" tone={crcl.band === "severe" ? "danger" : "warn"}>
                {crcl.band}
              </Badge>
            ) : null}
          </p>
        ) : (
          <p className="mt-3 text-sm text-muted">Age 18–110, weight 30–250 kg, SCr {'>'} 0.</p>
        )}
        {crcl ? <p className="mt-2 text-sm leading-relaxed text-fg">{crcl.note}</p> : null}
        {host.kidney === "ckd" ? (
          <p className="mt-2 font-mono text-[10px] uppercase tracking-wide text-accent">CKD is already on this host</p>
        ) : null}
      </article>
      </div>

      {ids.includes("phenytoin") ? <PhenytoinBlock /> : null}

      <ScaleBlock
        title="COWS"
        blurb={`Wesson & Ling 2003. Eleven items, max ${cowsMax()}. Teaching — not an induction protocol.`}
        items={COWS_ITEMS}
        bands={COWS_BANDS}
        hot={showCows}
        extra={
          precip ? (
            <p className="rounded-md bg-danger-soft px-3 py-2 text-sm leading-relaxed text-fg">
              Fentanyl in tissue can still precipitate at a 'high enough' COWS. Occupancy, not this
              integer. Do not chase precipitated withdrawal by stacking more film in the first stretch
              without a protocol.
            </p>
          ) : showCows ? (
            <p className="text-sm leading-relaxed text-muted">
              Many office maps wait for ≥8–12 before a first film. Recent fentanyl is still occupancy.
              Lofexidine / clonidine are α2 — naloxone will not reverse them.
            </p>
          ) : null
        }
      />

      <ScaleBlock
        title="CIWA-Ar"
        blurb={`Sullivan 1989. Ten items, max ${ciwaMax()}. Symptom-triggered maps often move at 8–10.`}
        items={CIWA_ITEMS}
        bands={CIWA_BANDS}
        hot={showCiwa}
      />

      <p className="text-[11px] leading-relaxed text-subtle">
        Formulas and scales only. Not an ECG machine, not CKD-EPI, not IBW, not a dose, not a COWS
        induction, not a CIWA benzo protocol.
      </p>
    </div>
  );
}

function ScaleBlock({
  title,
  blurb,
  items,
  bands,
  hot,
  extra,
}: {
  title: string;
  blurb: string;
  items: ScaleItem[];
  bands: ScaleBand[];
  hot?: boolean;
  extra?: ReactNode;
}) {
  const [picked, setPicked] = useState<Record<string, number>>({});
  const total = scoreOf(items, picked);
  const band = bandOf(bands, total);
  return (
    <article className={cn("rounded-md px-3 py-3", hot ? "bg-accent-soft" : "bg-bg-sunken")}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="font-serif text-lg tracking-tight text-fg">{title}</h3>
          <p className="mt-1 text-xs text-muted">{blurb}</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-lg text-fg">{total}</p>
          <p className="font-mono text-[10px] uppercase tracking-wide text-muted">{band.label}</p>
        </div>
      </div>
      {extra ? <div className="mt-3">{extra}</div> : null}
      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <p className="text-sm font-medium text-fg">{item.label}</p>
            <p className="text-[11px] text-muted">{item.hint}</p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {item.options.map((opt) => {
                const on = picked[item.id] === opt.score;
                return (
                  <button
                    key={`${item.id}-${opt.score}-${opt.label}`}
                    type="button"
                    onClick={() => setPicked((prev) => ({ ...prev, [item.id]: opt.score }))}
                    className={cn(
                      "h-10 min-w-10 rounded-full px-3 text-xs font-medium",
                      on ? "bg-ink text-bg" : "bg-surface text-muted hover:text-fg",
                    )}
                  >
                    <span className="font-mono">{opt.score}</span>
                    <span className="ml-1">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm leading-relaxed text-fg">{band.note}</p>
    </article>
  );
}

function WardsPanel({ ids }: { ids: string[] }) {
  const rows = useMemo(() => wardsOnDesk(ids), [ids.join("|")]);
  return (
    <div className="space-y-3">
      <p className="text-sm leading-relaxed text-muted">
        Named hospital collisions. Teaching — not a protocol, not a milligram. The Prescribing
        Information governs.
      </p>
      {rows.map((row) => (
        <article key={row.id} className={cn("rounded-md px-3 py-3", toneClass(row.tone))}>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-medium text-fg">{row.title}</h3>
            <Badge tone={row.tone === "danger" ? "danger" : "warn"}>{row.severity}</Badge>
          </div>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-muted">{row.mechanism}</p>
          <p className="mt-2 text-sm leading-relaxed text-fg">{row.clinical}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{row.watch}</p>
          <p className="mt-2 text-[11px] leading-relaxed text-subtle">{row.source}</p>
        </article>
      ))}
      <p className="text-[11px] leading-relaxed text-subtle">
        Carbapenem–valproate is UGT, not stacked seizure-lowering. Vancomycin–Zosyn is observational
        AKI, not a boxed hold. Entresto next to an ACE inhibitor is a 36-hour washout. Open the PI.
      </p>
    </div>
  );
}

function AlertsPanel({ rows }: { rows: ReturnType<typeof alertsOnDesk> }) {
  return (
    <div className="space-y-3">
      {rows.map((row) => {
        const name = DRUG_BY_ID[row.id]?.name ?? row.id;
        return (
          <article key={row.id} className="rounded-md bg-bg-sunken px-3 py-3">
            <h3 className="text-sm font-medium text-fg">{name}</h3>
            <ul className="mt-2 space-y-2">
              {row.flags.map((f) => (
                <li key={f.kind}>
                  <Badge tone={f.kind === "rems" ? "danger" : f.kind === "niosh" ? "warn" : "info"}>{f.label}</Badge>
                  <p className="mt-1 text-sm leading-relaxed text-fg">{f.note}</p>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
      <p className="text-[11px] leading-relaxed text-subtle">
        ISMP high-alert, NIOSH hazardous-drug, and REMS paraphrases of public lists. Incomplete on
        purpose. Open the source before you handle a crush.
      </p>
    </div>
  );
}

function toneClass(tone: "ok" | "warn" | "danger") {
  return tone === "danger" ? "bg-danger-soft" : tone === "warn" ? "bg-warn-soft" : "bg-ok-soft";
}

function OtpPanel({ ids, qtPartner }: { ids: string[]; qtPartner: boolean }) {
  const guessed = guessLastAgonist(ids);
  const [last, setLast] = useState<LastAgonist>(guessed);
  const [hours, setHours] = useState("24");
  const [cows, setCows] = useState("12");
  const [days, setDays] = useState("7");
  const [product, setProduct] = useState<NtxProduct>("xr");
  const [domains, setDomains] = useState<Record<string, boolean>>({});
  const [screens, setScreens] = useState<Record<string, boolean>>({});
  const precip = precipRisk(last, Number(hours), Number(cows));
  const wash = naltrexoneWashout(last, Number(days), product);
  const naloxone = naloxoneCounsel(ids);
  const ecg = methadoneMonitor(ids, qtPartner);

  return (
    <div className="space-y-5">
      <p className="text-sm leading-relaxed text-muted">
        Occupancy, washout, take-homes, naloxone, ECG, and ID screens. ASAM 2020 / TIP 63 / 42 CFR 8
        2024 teaching — not a protocol and not a milligram.
      </p>

      <article className="rounded-md bg-bg-sunken px-3 py-3">
          <h3 className="font-serif text-lg tracking-tight text-fg">Precipitated withdrawal</h3>
          <p className="mt-1 text-xs text-muted">Last agonist, hours since, COWS. Occupancy is not the integer.</p>
          <div className="mt-3 flex flex-wrap gap-1">
            {LAST_AGONISTS.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setLast(a.id)}
                className={cn(
                  "h-10 rounded-full px-3 text-xs font-medium",
                  last === a.id ? "bg-ink text-bg" : "bg-surface text-muted hover:text-fg",
                )}
              >
                {a.label}
              </button>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <label className="text-xs text-muted">
              Hours since last use
              <Input className="mt-1" inputMode="decimal" value={hours} onChange={(e) => setHours(e.target.value)} />
            </label>
            <label className="text-xs text-muted">
              COWS
              <Input className="mt-1" inputMode="decimal" value={cows} onChange={(e) => setCows(e.target.value)} />
            </label>
          </div>
          <div className={cn("mt-3 rounded-md px-3 py-2.5", toneClass(precip.tone))}>
            <p className="text-sm font-medium text-fg">{precip.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-fg">{precip.body}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{precip.consider}</p>
          </div>
        </article>

      <article className="rounded-md bg-bg-sunken px-3 py-3">
          <h3 className="font-serif text-lg tracking-tight text-fg">Naltrexone washout</h3>
          <p className="mt-1 text-xs text-muted">Days off agonist vs oral vs Vivitrol. The PI times the shot, not this card.</p>
          <div className="mt-3 flex flex-wrap gap-1">
            {(["oral", "xr"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setProduct(p)}
                className={cn(
                  "h-10 rounded-full px-3 text-xs font-medium",
                  product === p ? "bg-ink text-bg" : "bg-surface text-muted hover:text-fg",
                )}
              >
                {p === "xr" ? "XR / Vivitrol" : "Oral naltrexone"}
              </button>
            ))}
          </div>
          <label className="mt-3 block text-xs text-muted">
            Days since last full agonist
            <Input className="mt-1 max-w-40" inputMode="decimal" value={days} onChange={(e) => setDays(e.target.value)} />
          </label>
          <div className={cn("mt-3 rounded-md px-3 py-2.5", toneClass(wash.tone))}>
            <p className="text-sm font-medium text-fg">{wash.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-fg">{wash.body}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{wash.consider}</p>
          </div>
        </article>

      <article className="rounded-md bg-bg-sunken px-3 py-3">
        <h3 className="font-serif text-lg tracking-tight text-fg">Take-homes</h3>
        <p className="mt-1 text-xs text-muted">{TAKEHOME_RULE}</p>
        <ul className="mt-3 grid gap-1 sm:grid-cols-2">
          {TAKEHOME_DOMAINS.map((d) => (
            <li key={d.id}>
              <button
                type="button"
                onClick={() => setDomains((prev) => ({ ...prev, [d.id]: !prev[d.id] }))}
                className={cn(
                  "flex h-auto min-h-10 w-full items-start gap-2 rounded-md px-3 py-2 text-left",
                  domains[d.id] ? "bg-accent-soft text-fg" : "bg-surface text-muted hover:text-fg",
                )}
              >
                <span className="mt-0.5">
                  {domains[d.id] ? <CheckSquare className="size-4" /> : <Square className="size-4" />}
                </span>
                <span>
                  <span className="block text-sm font-medium text-fg">{d.label}</span>
                  <span className="block text-xs text-muted">{d.hint}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Ticked {Object.values(domains).filter(Boolean).length} of {TAKEHOME_DOMAINS.length}. A full
          row is still not an approval.
        </p>
      </article>

      {naloxone ? (
        <article className="rounded-md bg-bg-sunken px-3 py-3">
          <h3 className="font-serif text-lg tracking-tight text-fg">Naloxone coprescribe</h3>
          <ul className="mt-2 space-y-2">
            {naloxone.map((line) => (
              <li key={line} className="text-sm leading-relaxed text-fg">
                {line}
              </li>
            ))}
          </ul>
        </article>
      ) : null}

      {ecg ? (
        <article className={cn("rounded-md px-3 py-3", toneClass(ecg.tone))}>
          <h3 className="font-serif text-lg tracking-tight text-fg">{ecg.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-fg">{ecg.body}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{ecg.consider}</p>
        </article>
      ) : null}

      <article className="rounded-md bg-bg-sunken px-3 py-3">
        <h3 className="font-serif text-lg tracking-tight text-fg">ID / vaccine screens</h3>
        <p className="mt-1 text-xs text-muted">ASAM / CDC entry screens. Offers, not orders. Nothing here is stored.</p>
        <ul className="mt-3 grid gap-1 sm:grid-cols-2">
          {ID_SCREENS.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => setScreens((prev) => ({ ...prev, [s.id]: !prev[s.id] }))}
                className={cn(
                  "flex h-auto min-h-10 w-full items-start gap-2 rounded-md px-3 py-2 text-left",
                  screens[s.id] ? "bg-accent-soft text-fg" : "bg-surface text-muted hover:text-fg",
                )}
              >
                <span className="mt-0.5">
                  {screens[s.id] ? <CheckSquare className="size-4" /> : <Square className="size-4" />}
                </span>
                <span>
                  <span className="block text-sm font-medium text-fg">{s.label}</span>
                  <span className="block text-xs text-muted">{s.hint}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </article>

      <p className="text-[11px] leading-relaxed text-subtle">
        Not FDA-cleared. Independently review ASAM 2020, SAMHSA TIP 63, 42 CFR 8, and the
        Prescribing Information. FirstPass does not time a film, a shot, or a take-home.
      </p>
    </div>
  );
}

function AncPanel() {
  const [anc, setAnc] = useState("1800");
  const [ben, setBen] = useState(false);
  const band = ancBand(Number(anc), ben);
  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed text-muted">
        Clozapine REMS ANC table, paraphrased. Not the REMS portal, not a WBC, not a dispense.
      </p>
      <div className="grid grid-cols-2 gap-2">
        <label className="text-xs text-muted">
          ANC (cells/µL)
          <Input className="mt-1" inputMode="decimal" value={anc} onChange={(e) => setAnc(e.target.value)} />
        </label>
        <div className="text-xs text-muted">
          BEN
          <button
            type="button"
            onClick={() => setBen((v) => !v)}
            className={cn(
              "mt-1 flex h-10 w-full items-center justify-center rounded-full text-xs font-medium",
              ben ? "bg-ink text-bg" : "bg-bg-sunken text-muted",
            )}
          >
            {ben ? "BEN documented" : "General population"}
          </button>
        </div>
      </div>
      <div className={cn("rounded-md px-3 py-3", toneClass(band.tone))}>
        <p className="font-mono text-[10px] uppercase tracking-wide text-muted">{band.label}</p>
        <p className="mt-1 text-sm leading-relaxed text-fg">{band.note}</p>
      </div>
      <p className="text-[11px] leading-relaxed text-subtle">
        Alvir 1993 agranulocytosis. Smoke and fluvoxamine move the level on the TDM tab. Open{" "}
        <a className="text-accent underline" href="https://www.clozapinerems.com/" target="_blank" rel="noreferrer">
          clozapinerems.com
        </a>
        .
      </p>
    </div>
  );
}

function InrPanel({ report }: { report: NonNullable<ReturnType<typeof inrOnDesk>> }) {
  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed text-fg">{report.pearl}</p>
      {report.raisers.length ? (
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-wide text-danger">May raise INR / bleed</h3>
          <ul className="mt-2 space-y-2">
            {report.raisers.map((r) => (
              <li key={r.id} className="rounded-md bg-danger-soft px-3 py-2">
                <p className="text-sm font-medium text-fg">{r.name}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted">{r.how}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {report.lowers.length ? (
        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-wide text-warn">May lower INR</h3>
          <ul className="mt-2 space-y-2">
            {report.lowers.map((r) => (
              <li key={r.id} className="rounded-md bg-warn-soft px-3 py-2">
                <p className="text-sm font-medium text-fg">{r.name}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted">{r.how}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {!report.raisers.length && !report.lowers.length ? (
        <p className="text-sm text-muted">No mapped INR mover on this desk besides warfarin. Absence is not a stable INR.</p>
      ) : null}
      <p className="text-[11px] leading-relaxed text-subtle">
        S-warfarin is 2C9. Kale is vitamin K. This is not a warfarin clinic and not a milligram.
      </p>
    </div>
  );
}

function PhenytoinBlock() {
  const [total, setTotal] = useState("12");
  const [albumin, setAlbumin] = useState("2.4");
  const [crclLow, setCrclLow] = useState(false);
  const result = phenytoinCorrected({ total: Number(total), albumin: Number(albumin), crclLow });
  return (
    <article className="rounded-md bg-bg-sunken px-3 py-3">
      <h3 className="font-serif text-lg tracking-tight text-fg">Corrected phenytoin</h3>
      <p className="mt-1 text-xs text-muted">Sheiner–Tozer. A free level is better. Tube feeds bind Dilantin on the food board.</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <label className="text-xs text-muted">
          Total (µg/mL)
          <Input className="mt-1" inputMode="decimal" value={total} onChange={(e) => setTotal(e.target.value)} />
        </label>
        <label className="text-xs text-muted">
          Albumin (g/dL)
          <Input className="mt-1" inputMode="decimal" value={albumin} onChange={(e) => setAlbumin(e.target.value)} />
        </label>
        <div className="text-xs text-muted">
          CrCl
          <button
            type="button"
            onClick={() => setCrclLow((v) => !v)}
            className={cn(
              "mt-1 flex h-10 w-full items-center justify-center rounded-full text-xs font-medium",
              crclLow ? "bg-ink text-bg" : "bg-surface text-muted",
            )}
          >
            {crclLow ? "<10" : "≥10"}
          </button>
        </div>
      </div>
      {result ? (
        <p className="mt-3 text-sm text-fg">
          Corrected ≈ <span className="font-mono">{result.corrected}</span> µg/mL
        </p>
      ) : (
        <p className="mt-3 text-sm text-muted">Need total 0–80 and albumin 0.8–6.</p>
      )}
      {result ? <p className="mt-2 text-sm leading-relaxed text-muted">{result.note}</p> : null}
    </article>
  );
}
