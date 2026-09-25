import { useMemo, useState } from "react";
import { DRUG_BY_ID } from "@/lib/drugs/catalog";
import { analyze } from "@/lib/drugs/engine";
import { parseDoses } from "@/lib/drugs/dosing";
import {
  STUDY_LANES,
  STUDY_PILES,
  cardsFor,
  pileOf,
  type StudyCard,
  type StudyLane,
  type StudyPile,
} from "@/lib/drugs/study";
import { useDesk, usePlan } from "@/lib/drugs/store";
import { LANE_PLATE } from "@/lib/drugs/visuals";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plate } from "./plate";

export function StudyPage() {
  const selected = useDesk((s) => s.selected);
  const doses = useDesk((s) => s.doses);
  const phenotypes = useDesk((s) => s.phenotypes);
  const smoking = useDesk((s) => s.smoking);
  const ketamineRoute = useDesk((s) => s.ketamineRoute);
  const cannabisRoute = useDesk((s) => s.cannabisRoute);
  const alcohol = useDesk((s) => s.alcohol);
  const age = useDesk((s) => s.age);
  const kidney = useDesk((s) => s.kidney);
  const preg = useDesk((s) => s.preg);
  const marks = useDesk((s) => s.studyMarks);
  const markStudy = useDesk((s) => s.markStudy);
  const clearStudy = useDesk((s) => s.clearStudy);
  const load = useDesk((s) => s.load);
  const plan = usePlan();
  const [lane, setLane] = useState<StudyLane>(selected.length ? "desk" : "drill");
  const [pile, setPile] = useState<StudyPile>("all");
  const [epoch, setEpoch] = useState(0);

  const findings = useMemo(
    () =>
      analyze(
        selected,
        { phenotypes, smoking, ketamineRoute, cannabisRoute, alcohol, age, kidney, preg },
        parseDoses(doses),
      ).findings,
    [selected, phenotypes, smoking, ketamineRoute, cannabisRoute, alcohol, age, kidney, preg, doses],
  );
  const source = useMemo(() => cardsFor(lane, selected, findings), [lane, selected, findings]);
  const key = `${lane}|${pile}|${epoch}|${source.map((c) => c.id).join(",")}`;
  const [frozen, setFrozen] = useState({ key: "", deck: [] as StudyCard[] });
  if (frozen.key !== key) {
    setFrozen({ key, deck: pileOf(source, pile, marks) });
  }
  const deck = frozen.key === key ? frozen.deck : pileOf(source, pile, marks);

  const [cursor, setCursor] = useState({ key: "", index: 0, revealed: false, picked: null as string | null });
  if (cursor.key !== key) {
    setCursor({ key, index: 0, revealed: false, picked: null });
  }
  const index = cursor.key === key ? cursor.index : 0;
  const revealed = cursor.key === key ? cursor.revealed : false;
  const picked = cursor.key === key ? cursor.picked : null;

  const card = deck[Math.min(index, Math.max(deck.length - 1, 0))];
  const known = source.filter((c) => marks[c.id] === "got").length;
  const missed = source.filter((c) => marks[c.id] === "miss").length;
  const unseen = source.length - known - missed;
  const knownPct = source.length ? Math.round((known / source.length) * 100) : 0;
  const missPct = source.length ? Math.round((missed / source.length) * 100) : 0;

  function jump(next: number) {
    setCursor({ key, index: next, revealed: false, picked: null });
  }

  return (
    <div className="space-y-5">
      <section className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
        <div className="grid sm:grid-cols-[220px_minmax(0,1fr)]">
          <Plate src={LANE_PLATE.clinic} alt="" className="h-36 w-full min-h-36 sm:h-full" />
          <div className="px-5 py-5 sm:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Study</p>
            <h2 className="mt-2 font-serif text-2xl tracking-tight text-fg">
              Say the mechanism before you reveal it.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              For pharmacy and medical trainees. Rounds are preceptor stems. Named pairs are the labeled
              collisions. CYP cards are the formulary map and FDA fold-change grades. Desk cards are whatever
              pair is loaded. Mark a miss, then drill only those. Not an exam key, not a milligram, not a
              prescription. The Prescribing Information still wins.
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-muted">
              {known} known · {missed} missed · {unseen} unseen
              {plan === "free" ? " · five-drug desks stay free" : ""}
            </p>
            <div className="mt-3 flex h-1.5 overflow-hidden rounded-full bg-bg-sunken" aria-hidden>
              <div className="h-full bg-ok" style={{ width: `${knownPct}%` }} />
              <div className="h-full bg-warn" style={{ width: `${missPct}%` }} />
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap items-center gap-1">
        {STUDY_LANES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setLane(s.id)}
            className={cn(
              "h-10 rounded-full px-3 text-xs font-medium",
              lane === s.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
            )}
          >
            {s.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            clearStudy();
            setEpoch((n) => n + 1);
          }}
          className="h-10 rounded-full px-3 text-xs font-medium text-muted hover:text-fg"
        >
          Reset marks
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-1">
        {STUDY_PILES.map((s) => {
          const n = s.id === "all" ? source.length : s.id === "open" ? unseen : missed;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setPile(s.id)}
              className={cn(
                "h-10 rounded-full px-3 text-xs font-medium",
                pile === s.id ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
              )}
            >
              {s.label} {n}
            </button>
          );
        })}
      </div>

      {!card ? (
        <p className="rounded-xl bg-surface px-5 py-8 text-sm text-muted shadow-[var(--shadow-border)]">
          {pile === "miss"
            ? "Nothing missed in this lane. Mark a miss, then come back."
            : pile === "open"
              ? "Nothing unseen here. Switch to All, or reset marks to start over."
              : lane === "desk"
                ? "Nothing on the desk yet. Load a pair, or switch to Rounds, Named pairs, or CYP map."
                : "No cards in this lane."}
        </p>
      ) : (
        <StudyCardView
          card={card}
          n={Math.min(index, deck.length - 1) + 1}
          total={deck.length}
          revealed={revealed || Boolean(picked)}
          picked={picked}
          mark={marks[card.id]}
          onReveal={() => setCursor({ key, index, revealed: true, picked })}
          onPick={(id) => {
            setCursor({ key, index, revealed: true, picked: id });
            if (card.correct) markStudy(card.id, id === card.correct ? "got" : "miss");
          }}
          onMark={(m) => markStudy(card.id, m)}
          onPrev={() => jump(Math.max(0, index - 1))}
          onNext={() => jump(Math.min(deck.length - 1, index + 1))}
          onLoad={() => {
            if (card.drugIds.length) load(card.drugIds);
          }}
        />
      )}
    </div>
  );
}

function StudyCardView({
  card,
  n,
  total,
  revealed,
  picked,
  mark,
  onReveal,
  onPick,
  onMark,
  onPrev,
  onNext,
  onLoad,
}: {
  card: StudyCard;
  n: number;
  total: number;
  revealed: boolean;
  picked: string | null;
  mark?: "got" | "miss";
  onReveal: () => void;
  onPick: (id: string) => void;
  onMark: (m: "got" | "miss") => void;
  onPrev: () => void;
  onNext: () => void;
  onLoad: () => void;
}) {
  const correct = card.choices?.find((c) => c.id === card.correct);
  return (
    <article className="rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)] sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{card.kicker}</p>
        <p className="font-mono text-[11px] text-muted">
          {n} / {total}
          {mark ? ` · ${mark === "got" ? "known" : "missed"}` : ""}
        </p>
      </div>
      <h3 className="mt-2 font-serif text-2xl tracking-tight text-fg">{card.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{card.prompt}</p>
      <p className="mt-3 text-sm font-medium leading-relaxed text-fg">{card.ask}</p>

      {card.choices ? (
        <ul className="mt-4 space-y-2">
          {card.choices.map((c) => {
            const on = picked === c.id;
            const isCorrect = revealed && c.id === card.correct;
            const isWrong = revealed && on && c.id !== card.correct;
            return (
              <li key={c.id}>
                <button
                  type="button"
                  disabled={revealed}
                  onClick={() => onPick(c.id)}
                  className={cn(
                    "flex min-h-11 w-full items-start rounded-md px-3 py-2.5 text-left text-sm leading-relaxed",
                    isCorrect && "bg-ok-soft text-fg",
                    isWrong && "bg-danger-soft text-fg",
                    !isCorrect && !isWrong && "bg-bg-sunken text-fg hover:bg-surface-2",
                  )}
                >
                  {c.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}

      {revealed ? (
        <div className="mt-4 rounded-md bg-bg-sunken px-3 py-3">
          {card.choices && correct ? (
            <p className="text-sm font-medium text-fg">
              {picked === card.correct ? "That role is on the map." : `Mapped answer: ${correct.label}`}
            </p>
          ) : null}
          <p className={cn("text-sm leading-relaxed text-fg", card.choices && correct && "mt-2")}>{card.answer}</p>
          {card.drugIds.length ? (
            <p className="mt-2 text-[11px] leading-relaxed text-subtle">
              {card.drugIds.map((id) => DRUG_BY_ID[id]?.name ?? id).join(" · ")}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {!card.choices && !revealed ? (
          <Button size="sm" onClick={onReveal}>
            Reveal
          </Button>
        ) : null}
        {revealed && !card.choices ? (
          <>
            <Button size="sm" variant={mark === "got" ? "default" : "secondary"} onClick={() => onMark("got")}>
              I knew it
            </Button>
            <Button size="sm" variant={mark === "miss" ? "danger" : "secondary"} onClick={() => onMark("miss")}>
              I missed it
            </Button>
          </>
        ) : null}
        {card.drugIds.length ? (
          <Button size="sm" variant="secondary" onClick={onLoad}>
            Put on desk
          </Button>
        ) : null}
        <Button size="sm" variant="ghost" onClick={onPrev} disabled={n <= 1}>
          Back
        </Button>
        <Button size="sm" variant="ghost" onClick={onNext} disabled={n >= total}>
          Next
        </Button>
        {mark ? <Badge tone={mark === "got" ? "ok" : "warn"}>{mark === "got" ? "Known" : "Missed"}</Badge> : null}
      </div>
    </article>
  );
}
