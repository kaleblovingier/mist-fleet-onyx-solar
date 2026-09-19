import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { searchDrugs } from "@/lib/drugs/catalog";
import { plateForDrug } from "@/lib/drugs/visuals";
import { useDesk, usePlan } from "@/lib/drugs/store";
import { maxDrugs } from "@/lib/billing/plans";
import { cn } from "@/lib/utils";

export function DrugSearch() {
  const selected = useDesk((s) => s.selected);
  const add = useDesk((s) => s.add);
  const plan = usePlan();
  const cap = maxDrugs(plan);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(
    () => searchDrugs(q, selected),
    [q, selected],
  );

  useEffect(() => {
    setActive(0);
  }, [q, results.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "/" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const full = selected.length >= cap;

  function pick(id: string) {
    add(id);
    setQ("");
    setOpen(false);
    inputRef.current?.focus();
  }

  return (
    <div ref={rootRef} className="relative">
      <label className="sr-only" htmlFor="drug-search">
        Search drugs
      </label>
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" />
      <input
        id="drug-search"
        ref={inputRef}
        value={q}
        disabled={full}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setActive((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((i) => Math.max(i - 1, 0));
          } else if (e.key === "Enter") {
            e.preventDefault();
            const hit = results[active];
            if (hit) pick(hit.id);
          } else if (e.key === "Escape") {
            setOpen(false);
            (e.target as HTMLInputElement).blur();
          }
        }}
        placeholder={full ? "Regimen full · remove a drug to add another" : "Berberine, prozac, pgx…"}
        className="h-12 w-full rounded-lg bg-surface-2 pl-10 pr-10 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:opacity-60"
        autoComplete="off"
        spellCheck={false}
      />
      {q ? (
        <button
          type="button"
          aria-label="Clear search"
          className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-sm text-subtle hover:bg-bg-sunken hover:text-fg"
          onClick={() => {
            setQ("");
            inputRef.current?.focus();
          }}
        >
          <X className="size-4" />
        </button>
      ) : (
        <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-xs bg-bg-sunken px-1.5 py-0.5 font-mono text-[10px] text-subtle sm:inline">
          /
        </kbd>
      )}

      {open && results.length > 0 && !full ? (
        <ul
          role="listbox"
          className="absolute z-30 mt-2 max-h-80 w-full overflow-auto rounded-lg bg-surface-2 py-1 shadow-[var(--shadow-border)]"
        >
          {results.map((drug, i) => (
            <li key={drug.id}>
              <button
                type="button"
                role="option"
                aria-selected={i === active}
                className={cn(
                  "flex w-full items-start gap-3 px-3 py-2.5 text-left",
                  i === active ? "bg-accent-soft" : "hover:bg-bg-sunken",
                )}
                onMouseEnter={() => setActive(i)}
                onClick={() => pick(drug.id)}
              >
                <img
                  src={plateForDrug(drug)}
                  alt=""
                  className="mt-0.5 size-10 shrink-0 rounded-sm object-cover"
                />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-fg">{drug.name}</span>
                  <span className="block truncate text-xs text-muted">
                    {drug.kind !== "drug" ? `${drug.kind} · ` : ""}
                    {drug.cls}
                    {drug.brands.length ? ` · ${drug.brands.slice(0, 2).join(", ")}` : ""}
                  </span>
                </span>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide text-subtle">
                  {drug.enzymes
                    .filter((e) => e.kind !== "substrate")
                    .slice(0, 2)
                    .map((e) => e.enzyme.replace("CYP", ""))
                    .join(" ") ||
                    drug.enzymes[0]?.enzyme.replace("CYP", "") ||
                    "PD"}
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
