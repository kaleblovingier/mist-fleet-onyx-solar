import { useEffect, useMemo, useState } from "react";
import { Check, Copy, KeyRound } from "lucide-react";
import {
  BUYERS,
  COMMERCE,
  OPERATOR,
  buyerDm,
  fulfillKey,
  invoiceText,
  launchTweet,
  salesDm,
} from "@/lib/billing/commerce";
import { mintLicenseKey } from "@/lib/billing/license";
import { priceFor } from "@/lib/billing/plans";
import { useDesk } from "@/lib/drugs/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HuntDesk } from "./hunt";
import { Plate } from "./plate";

type Issued = { key: string; plan: string; at: string; soldTo: string };

const ISSUED_KEY = "firstpass.issued.v1";
const PAY_NOTE_KEY = "firstpass.payNote";

function loadIssued(): Issued[] {
  try {
    const raw = localStorage.getItem(ISSUED_KEY);
    const rows = raw ? (JSON.parse(raw) as Partial<Issued>[]) : [];
    return rows
      .filter((r) => typeof r.key === "string")
      .map((r) => ({
        key: r.key as string,
        plan: typeof r.plan === "string" ? r.plan : "life",
        at: typeof r.at === "string" ? r.at : new Date().toISOString(),
        soldTo: typeof r.soldTo === "string" ? r.soldTo : "",
      }));
  } catch {
    return [];
  }
}

export function Foundry() {
  const setView = useDesk((s) => s.setView);
  const [pin, setPin] = useState("");
  const [plan, setPlan] = useState<"life" | "pro" | "lab">("life");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [last, setLast] = useState<string | null>(null);
  const [copied, setCopied] = useState("");
  const [issued, setIssued] = useState<Issued[]>([]);
  const [payNote, setPayNote] = useState("");
  const [soldTo, setSoldTo] = useState("");
  const [tab, setTab] = useState<"hunt" | "close">("hunt");
  useEffect(() => {
    setIssued(loadIssued());
    setPayNote(localStorage.getItem(PAY_NOTE_KEY) || OPERATOR.payLine);
  }, []);
  const dm = useMemo(() => salesDm(), []);
  const tweet = useMemo(() => launchTweet(), []);
  const invoice = useMemo(
    () =>
      invoiceText({
        plan: plan === "life" ? "Founding lifetime desk" : plan === "lab" ? "Lab seat (year)" : "Pro (year)",
        price: plan === "life" ? COMMERCE.founding : plan === "lab" ? priceFor("lab", "year") : priceFor("pro", "year"),
        pay: payNote || OPERATOR.payLine,
        keyHint: last ?? undefined,
      }),
    [plan, payNote, last],
  );
  const fulfillment = last ? fulfillKey({ key: last, soldTo }) : "";

  async function copy(label: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      window.setTimeout(() => setCopied(""), 1600);
    } catch {
      /* clipboard */
    }
  }

  async function mint() {
    setBusy(true);
    setErr("");
    try {
      const res = await mintLicenseKey({ data: { pin, plan } });
      if (!res.ok) {
        setErr(res.reason);
        return;
      }
      const row: Issued = {
        key: res.key,
        plan: res.plan,
        at: new Date().toISOString(),
        soldTo: soldTo.trim(),
      };
      const next = [row, ...issued].slice(0, 40);
      setIssued(next);
      localStorage.setItem(ISSUED_KEY, JSON.stringify(next));
      setLast(res.key);
      await copy("fulfill", fulfillKey({ key: res.key, soldTo }));
    } catch {
      setErr("Could not mint. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <section className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
        <div className="grid sm:grid-cols-[200px_minmax(0,1fr)]">
          <Plate src="/plates/hero.jpg" alt="" className="h-36 w-full sm:h-full min-h-36" />
          <div className="px-5 py-5 sm:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Operator desk</p>
            <h1 className="mt-2 font-serif text-3xl tracking-tight text-fg">Find buyers. Sell keys.</h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              This week’s hunt is five real WA shops. Copy the DM, take payment however you already
              get paid, mint a signed key. Hidden from the public nav.
            </p>
            <div className="mt-4 flex flex-wrap gap-1">
              {(
                [
                  ["hunt", "Hunt"],
                  ["close", "Close"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setTab(id)}
                  className={
                    tab === id
                      ? "h-10 rounded-full bg-ink px-4 text-sm font-medium text-bg"
                      : "h-10 rounded-full bg-bg-sunken px-4 text-sm font-medium text-muted hover:text-fg"
                  }
                >
                  {label}
                </button>
              ))}
            </div>
            <button type="button" className="mt-3 block text-sm text-accent hover:underline" onClick={() => setView("plans")}>
              Back to licenses
            </button>
          </div>
        </div>
      </section>

      {tab === "hunt" ? (
        <HuntDesk />
      ) : (
        <CloseDesk
          pin={pin}
          setPin={setPin}
          plan={plan}
          setPlan={setPlan}
          busy={busy}
          err={err}
          last={last}
          copied={copied}
          issued={issued}
          payNote={payNote}
          setPayNote={setPayNote}
          soldTo={soldTo}
          setSoldTo={setSoldTo}
          dm={dm}
          tweet={tweet}
          invoice={invoice}
          fulfillment={fulfillment}
          copy={copy}
          mint={mint}
        />
      )}
    </div>
  );
}

function CloseDesk({
  pin,
  setPin,
  plan,
  setPlan,
  busy,
  err,
  last,
  copied,
  issued,
  payNote,
  setPayNote,
  soldTo,
  setSoldTo,
  dm,
  tweet,
  invoice,
  fulfillment,
  copy,
  mint,
}: {
  pin: string;
  setPin: (v: string) => void;
  plan: "life" | "pro" | "lab";
  setPlan: (v: "life" | "pro" | "lab") => void;
  busy: boolean;
  err: string;
  last: string | null;
  copied: string;
  issued: Issued[];
  payNote: string;
  setPayNote: (v: string) => void;
  soldTo: string;
  setSoldTo: (v: string) => void;
  dm: string;
  tweet: string;
  invoice: string;
  fulfillment: string;
  copy: (label: string, text: string) => void;
  mint: () => void;
}) {
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <h2 className="font-serif text-xl tracking-tight text-fg">Who pays — copy their DM</h2>
          <ul className="mt-4 space-y-3">
            {BUYERS.map((b) => (
              <li key={b.who} className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-fg">{b.who}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{b.why}</p>
                </div>
                <Button size="sm" variant="secondary" onClick={() => void copy(b.who, buyerDm(b.who))}>
                  {copied === b.who ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                  {copied === b.who ? "Copied" : "DM"}
                </Button>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-serif text-xl tracking-tight text-fg">Cold DM / email</h2>
            <Button size="sm" variant="secondary" onClick={() => void copy("dm", dm)}>
              {copied === "dm" ? "Copied" : "Copy"}
            </Button>
          </div>
          <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted">{dm}</pre>
          <div className="mt-5 flex items-center justify-between gap-2">
            <h3 className="text-xs font-medium uppercase tracking-wide text-muted">Launch post</h3>
            <Button size="sm" variant="secondary" onClick={() => void copy("tweet", tweet)}>
              {copied === "tweet" ? "Copied" : "Copy post"}
            </Button>
          </div>
          <pre className="mt-2 whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted">{tweet}</pre>
        </section>
      </div>

      <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-serif text-xl tracking-tight text-fg">How a sale closes</h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ["1. Pitch", "Send the buyer DM. Founding is $79 once — cheaper to say yes than $12/mo."],
            ["2. Collect", `${OPERATOR.payLine}. Email or text if they need a receipt.`],
            ["3. Fulfill", "Mint LIFE. Copy fulfillment. They redeem under Pro."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-md bg-bg-sunken px-3 py-3">
              <p className="font-mono text-[11px] uppercase tracking-wide text-accent">{t}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{d}</p>
            </li>
          ))}
        </ol>
        <label className="mt-5 block text-xs font-medium text-muted" htmlFor="pay-note">
          How you get paid (goes on the invoice you copy — not shown to strangers unless you send it)
        </label>
        <Input
          id="pay-note"
          className="mt-1.5"
          value={payNote}
          placeholder={OPERATOR.payLine}
          onChange={(e) => {
            setPayNote(e.target.value);
            localStorage.setItem(PAY_NOTE_KEY, e.target.value);
          }}
        />
      </section>

      <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <div className="flex items-center gap-2">
          <KeyRound className="size-4 text-accent" />
          <h2 className="font-serif text-xl tracking-tight text-fg">Mint a key</h2>
        </div>
        <p className="mt-2 text-sm text-muted">
          Signed on the server. Forged strings will not redeem. The operator PIN is set on the
          server — it is not printed here.
        </p>
        <label className="mt-4 block text-xs font-medium text-muted" htmlFor="sold-to">
          Sold to (optional — stamped on the fulfillment you copy)
        </label>
        <Input
          id="sold-to"
          className="mt-1.5"
          value={soldTo}
          placeholder="Clinic name, NP, student — whoever just paid"
          onChange={(e) => setSoldTo(e.target.value)}
        />
        <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_auto_auto]">
          <Input
            type="password"
            autoComplete="off"
            placeholder="Operator PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <div className="grid grid-cols-3 gap-1">
            {(
              [
                ["life", "Life"],
                ["pro", "Pro"],
                ["lab", "Lab"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setPlan(id)}
                className={
                  plan === id
                    ? "h-11 rounded-sm bg-ink text-bg text-sm font-medium"
                    : "h-11 rounded-sm bg-bg-sunken text-muted text-sm font-medium hover:text-fg"
                }
              >
                {label}
              </button>
            ))}
          </div>
          <Button onClick={() => void mint()} disabled={busy || !pin}>
            {busy ? "Minting…" : "Mint"}
          </Button>
        </div>
        {err ? <p className="mt-3 text-sm text-danger">{err}</p> : null}
        {last ? (
          <p className="mt-3 rounded-md bg-ok-soft px-3 py-2 font-mono text-sm text-ok">
            {last}
            <span className="ml-2 font-sans text-xs">fulfillment copied</span>
          </p>
        ) : null}

        {fulfillment ? (
          <>
            <div className="mt-5 flex items-center justify-between gap-2">
              <h3 className="text-xs font-medium uppercase tracking-wide text-muted">Fulfillment to paste back</h3>
              <Button size="sm" variant="secondary" onClick={() => void copy("fulfill", fulfillment)}>
                {copied === "fulfill" ? "Copied" : "Copy fulfillment"}
              </Button>
            </div>
            <pre className="mt-2 whitespace-pre-wrap rounded-md bg-bg-sunken px-3 py-3 font-sans text-sm leading-relaxed text-fg">
              {fulfillment}
            </pre>
          </>
        ) : null}

        <div className="mt-5 flex items-center justify-between gap-2">
          <h3 className="text-xs font-medium uppercase tracking-wide text-muted">Invoice to send</h3>
          <Button size="sm" variant="secondary" onClick={() => void copy("inv", invoice)}>
            {copied === "inv" ? "Copied" : "Copy invoice"}
          </Button>
        </div>
        <pre className="mt-2 whitespace-pre-wrap rounded-md bg-bg-sunken px-3 py-3 font-mono text-xs leading-relaxed text-fg">
          {invoice}
        </pre>
      </section>

      {issued.length > 0 ? (
        <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <h2 className="text-xs font-medium uppercase tracking-wide text-muted">Issued on this browser</h2>
          <ul className="mt-3 space-y-2">
            {issued.map((row) => (
              <li key={row.key} className="flex flex-wrap items-center justify-between gap-2 text-sm">
                <span className="font-mono text-xs text-fg">{row.key}</span>
                <span className="text-xs text-muted">
                  {row.soldTo ? `${row.soldTo} · ` : ""}
                  {row.plan} · {row.at.slice(0, 10)}
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => void copy("fulfill", fulfillKey({ key: row.key, soldTo: row.soldTo }))}
                >
                  Copy
                </Button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );
}
