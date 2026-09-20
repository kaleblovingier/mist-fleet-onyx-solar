# FirstPass

Educational CYP450 / PD collision desk for ketamine clinics, MAT, harm-reduction staff, and pharmacy students.

Two-drug collisions stay free. Host factors (phenotype, smoke, alcohol, route), the enzyme atlas, metabolites, and export are licensed. Founding license is **$79 once**.

**Not medical advice. Not a charting system. Not TDM.**

Pitch: [github.com/kaleblovingier/mist-fleet-onyx-solar](https://github.com/kaleblovingier/mist-fleet-onyx-solar)
Pages (after Settings → Pages → main `/docs`): [kaleblovingier.github.io/mist-fleet-onyx-solar](https://kaleblovingier.github.io/mist-fleet-onyx-solar/)
Deck: [gamma.app/docs/c1sxd9i8iyv80eq](https://gamma.app/docs/c1sxd9i8iyv80eq)

## Try these

1. **Oral ketamine × grapefruit** — F rises. Half-life does not. Overlay IV: the ghost is untouched.
2. **DXM in a 2D6 poor metabolizer, q8h** — accumulation Rac ~2.7×. Dextrorphan falls.
3. **Azathioprine × allopurinol** — xanthine oxidase, not CYP. Pancytopenia. Search `clinic` or `imuran`.
4. **Fluoxetine** — Stahl occupancy (SERT, long washout) plus DrugBank `DB00472`. Flip 2D6 PM: CPIC has no dose cut for Prozac, but it still locks 2D6 for codeine and tamoxifen. Search `stahl` / `pgx`.
5. **Berberine × simvastatin** — the glucose capsule is a 3A4/P-gp bully, not goldenseal tea. Search `supplement` or `berberine`.
6. **Activated charcoal × levothyroxine** — the binder. The dose never arrives. Metamucil does the same.
7. **Valproate, then flip Pregnant** — teratogen card. Search `pubmed` or open Cites for Bailey, Mega, Krantz, Hunter.
8. **Lorazepam, flip Geriatric** — Beers 2023. Search `beers`.

## Pay / write

- Kaleb Lovingier
- Card on Stripe (primary)
- Venmo [@kaleblovingier](https://venmo.com/u/kaleblovingier)
- Cash App [$kaleblovingier7](https://cash.app/$kaleblovingier7)
- PayPal kaleblovingier@gmail.com
- kaleblovingier@gmail.com · 360-707-8923
- @badbird · @kaleblovingier

Pay $79 with card on the desk (Stripe), or Venmo / Cash App / PayPal. A signed key is minted only after payment clears. There is no fake checkout.

## Who it's for

| Buyer | Why they open it |
| --- | --- |
| Ketamine / esketamine clinics | Oral vs IV first-pass, benzo airway stacks, 2B6 phenotype |
| Primary care / IM / transplant | Imuran × Zyloprim, Imdur × Viagra, Flonase × ritonavir, Ozempic × SU |
| MAT / street-supply desks | Xylazine, nitazenes, designer benzos, naltrexone / loperamide |
| Pharmacy students | A teaching desk they will actually open. JSON/CSV for the lab book |
| Harm-reduction and psych NPs | MDMA × SSRI, DXM in 2D6 PMs, grapefruit × oral ketamine |

## License

HMAC-signed keys (`FP-LIFE-…`). Two-drug stays free. Founding lifetime is $79.

---

## Map (for the other LLM)

Scholarly apothecary: paper `#efece4`, teal `#2f5d56`, Newsreader + IBM Plex. Auth and database **off**. Persist `firstpass.desk.v7`. Optional `VITE_PAY_URL`, `VITE_PUBLIC_URL`. Stripe: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` (server only — never a `.env` in the repo).

| Path | What |
| --- | --- |
| `src/lib/drugs/catalog.ts` | Formulary |
| `src/lib/drugs/drugbank.ts` | DrugBank accessions + targets |
| `src/lib/drugs/pgx.ts` | CPIC / ClinPGx teaching cards |
| `src/lib/drugs/pubmed.ts` | Curated PMIDs |
| `src/lib/drugs/pubmed.server.ts` | NCBI E-utilities live search |
| `src/lib/drugs/clinic.ts` | Pregnancy / Beers / renal / boxed teaching cards |
| `src/lib/drugs/engine.ts` | PK + PD scoring |
| `src/lib/drugs/pk.ts` | One-compartment DDI / phenotype / route / accumulation sketch |
| `src/lib/drugs/host.ts` | Route, smoke, alcohol, washout |
| `src/lib/drugs/rounds.ts` | Teaching cases |
| `src/lib/drugs/samples.ts` | Sample regimens |
| `src/lib/billing/commerce.ts` | Pay rails, DMs, launch posts, invoices |
| `src/lib/billing/stripe.server.ts` | Stripe Checkout session + paid-session key mint |
| `src/lib/billing/hunts.ts` | WA/PNW buyer directory (public orgs, websites) |
| `src/components/desk/` | UI |
| `docs/index.html` | Public pitch page (GitHub Pages) |

Do not put a home address on the UI. Do not cold-email the Hunt directory. Educational disclaimer stays visible.
