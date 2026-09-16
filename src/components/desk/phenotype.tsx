import {
  ALCOHOL_LABEL,
  CANNABIS_ROUTE_LABEL,
  KETAMINE_ROUTE_LABEL,
  METABOLIZER_LABEL,
  PHENO_FREQ,
  PHENOTYPE_ENZYMES,
  type AlcoholPattern,
  type CannabisRoute,
  type KetamineRoute,
  type Metabolizer,
  type PhenotypeEnzyme,
} from "@/lib/drugs/types";
import { useDesk } from "@/lib/drugs/store";
import { cn } from "@/lib/utils";

const ORDER: Metabolizer[] = ["PM", "IM", "NM", "UM"];
const ROUTES: KetamineRoute[] = ["iv", "in", "oral"];
const CANNABIS: CannabisRoute[] = ["smoked", "oral"];
const ALCOHOL: AlcoholPattern[] = ["off", "acute", "chronic"];

const HINT: Record<PhenotypeEnzyme, string> = {
  CYP2D6: "DXM, MDMA, codeine, atomoxetine",
  CYP2C19: "Clobazam, diazepam, citalopram",
  CYP2C9: "Warfarin, phenytoin, edible THC",
  CYP2B6: "Ketamine, bupropion, methadone",
};

export function PhenotypeCard() {
  const phenotypes = useDesk((s) => s.phenotypes);
  const setPhenotype = useDesk((s) => s.setPhenotype);
  const resetPhenotypes = useDesk((s) => s.resetPhenotypes);
  const smoking = useDesk((s) => s.smoking);
  const setSmoking = useDesk((s) => s.setSmoking);
  const ketamineRoute = useDesk((s) => s.ketamineRoute);
  const setKetamineRoute = useDesk((s) => s.setKetamineRoute);
  const cannabisRoute = useDesk((s) => s.cannabisRoute);
  const setCannabisRoute = useDesk((s) => s.setCannabisRoute);
  const alcohol = useDesk((s) => s.alcohol);
  const setAlcohol = useDesk((s) => s.setAlcohol);
  const dirty =
    PHENOTYPE_ENZYMES.some((e) => phenotypes[e] !== "NM") ||
    smoking ||
    ketamineRoute !== "iv" ||
    cannabisRoute !== "smoked" ||
    alcohol !== "off";

  return (
    <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xs font-medium uppercase tracking-wide text-muted">Host factors</h2>
        {dirty ? (
          <button
            type="button"
            onClick={resetPhenotypes}
            className="text-[11px] font-medium text-accent hover:underline"
          >
            Reset
          </button>
        ) : null}
      </div>
      <p className="mt-1 text-[11px] leading-relaxed text-muted">
        Poor ≈ a strong inhibitor. Smoke induces 1A2. Chronic alcohol induces 2E1. 2C9 PMs stack warfarin and edible THC.
      </p>
      <ul className="mt-3 space-y-3">
        {PHENOTYPE_ENZYMES.map((enzyme) => (
          <li key={enzyme}>
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-mono text-xs text-fg">{enzyme}</span>
              <span className="truncate text-[10px] text-subtle">{HINT[enzyme]}</span>
            </div>
            <div className="mt-1.5 grid grid-cols-4 gap-1">
              {ORDER.map((m) => {
                const on = phenotypes[enzyme] === m;
                const freq = PHENO_FREQ[enzyme][m];
                return (
                  <button
                    key={m}
                    type="button"
                    aria-pressed={on}
                    title={freq ? `${METABOLIZER_LABEL[m]} · ${freq}` : METABOLIZER_LABEL[m]}
                    onClick={() => setPhenotype(enzyme, m)}
                    className={cn(
                      "h-10 rounded-sm font-mono text-[11px] font-medium",
                      on ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
                    )}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
            {phenotypes[enzyme] !== "NM" && PHENO_FREQ[enzyme][phenotypes[enzyme]] ? (
              <p className="mt-1 text-[10px] text-subtle">{PHENO_FREQ[enzyme][phenotypes[enzyme]]}</p>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="mt-4 border-t border-border pt-3">
        <div className="text-xs font-medium text-fg">Tobacco smoke</div>
        <div className="mt-1.5 grid grid-cols-2 gap-1">
          <button
            type="button"
            aria-pressed={!smoking}
            onClick={() => setSmoking(false)}
            className={cn(
              "h-10 rounded-sm text-[11px] font-medium",
              !smoking ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
            )}
          >
            Off
          </button>
          <button
            type="button"
            aria-pressed={smoking}
            onClick={() => setSmoking(true)}
            className={cn(
              "h-10 rounded-sm text-[11px] font-medium",
              smoking ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
            )}
          >
            Daily · 1A2
          </button>
        </div>
      </div>

      <div className="mt-3">
        <div className="text-xs font-medium text-fg">Alcohol pattern</div>
        <div className="mt-1.5 grid grid-cols-3 gap-1">
          {ALCOHOL.map((a) => {
            const on = alcohol === a;
            return (
              <button
                key={a}
                type="button"
                aria-pressed={on}
                onClick={() => setAlcohol(a)}
                className={cn(
                  "h-10 rounded-sm text-[11px] font-medium",
                  on ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
                )}
              >
                {ALCOHOL_LABEL[a]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-3">
        <div className="text-xs font-medium text-fg">Ketamine route</div>
        <div className="mt-1.5 grid grid-cols-3 gap-1">
          {ROUTES.map((r) => {
            const on = ketamineRoute === r;
            return (
              <button
                key={r}
                type="button"
                aria-pressed={on}
                onClick={() => setKetamineRoute(r)}
                className={cn(
                  "h-10 rounded-sm text-[11px] font-medium",
                  on ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
                )}
              >
                {KETAMINE_ROUTE_LABEL[r]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-3">
        <div className="text-xs font-medium text-fg">Cannabis route</div>
        <div className="mt-1.5 grid grid-cols-2 gap-1">
          {CANNABIS.map((r) => {
            const on = cannabisRoute === r;
            return (
              <button
                key={r}
                type="button"
                aria-pressed={on}
                onClick={() => setCannabisRoute(r)}
                className={cn(
                  "h-10 rounded-sm text-[11px] font-medium",
                  on ? "bg-ink text-bg" : "bg-bg-sunken text-muted hover:text-fg",
                )}
              >
                {CANNABIS_ROUTE_LABEL[r]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
