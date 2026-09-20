import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { lookupRxnavInteractions } from "@/lib/drugs/live-rpc";
import type { RxclassHit, RxnavPair } from "@/lib/drugs/live";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function RxnavBoard({ ids }: { ids: string[] }) {
  const [pairs, setPairs] = useState<RxnavPair[] | null>(null);
  const [classes, setClasses] = useState<RxclassHit[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [reason, setReason] = useState<string | null>(null);

  async function run() {
    setBusy(true);
    setErr(null);
    setReason(null);
    try {
      const res = await lookupRxnavInteractions({ data: { ids } });
      if (!res.ok) setErr(res.reason ?? "Did not answer.");
      else if (res.reason) setReason(res.reason);
      setPairs(res.pairs);
      setClasses(res.classes ?? []);
    } catch {
      setErr("Did not answer.");
      setPairs([]);
      setClasses([]);
    } finally {
      setBusy(false);
    }
  }

  if (ids.length < 2) return null;

  return (
    <section className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-serif text-lg tracking-tight text-fg">Live labels / RxClass</h2>
          <p className="mt-1 text-xs text-muted">
            OpenFDA interaction excerpts scanned for the partner. NIH RxClass (ATC / FDA SPL) is still
            live — NLM retired the Interaction API in 2024.
          </p>
        </div>
        <Button variant="secondary" size="sm" disabled={busy} onClick={() => void run()}>
          {busy ? "Asking NLM / FDA…" : pairs ? "Refresh" : "Ask live sources"}
        </Button>
      </div>
      {err ? <p className="mt-3 text-sm text-danger">{err}</p> : null}
      {reason ? <p className="mt-3 text-sm text-muted">{reason}</p> : null}
      {pairs && pairs.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {pairs.map((p, i) => (
            <li key={`${p.source}-${p.a}-${p.b}-${i}`} className="rounded-md bg-bg-sunken px-3 py-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-fg">
                  {p.a} × {p.b}
                </span>
                <Badge tone="info">{p.source}</Badge>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted">{p.description}</p>
            </li>
          ))}
        </ul>
      ) : null}
      {classes.length ? (
        <div className="mt-4">
          <h3 className="font-mono text-[11px] uppercase tracking-wide text-muted">RxClass</h3>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {classes.map((c, i) => (
              <li key={`${c.rxcui}-${c.className}-${i}`}>
                <Badge tone="info">
                  {c.drug}: {c.className}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <p className="mt-3 text-[11px] leading-relaxed text-subtle">
        Label text is truncated SPL, not a complete DDI engine. CYP / PD scoring stays on this desk.{" "}
        <a
          className="text-accent underline"
          href="https://lhncbc.nlm.nih.gov/RxNav/APIs/RxClassAPIs.html"
          target="_blank"
          rel="noreferrer"
        >
          RxClass docs
          <ExternalLink className="ml-1 inline size-3" />
        </a>
      </p>
    </section>
  );
}
