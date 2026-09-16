# FirstPass

Educational CYP450 / PD interaction desk. Scholarly apothecary: paper `#efece4`, teal `#2f5d56`, Newsreader + IBM Plex. **Not medical advice, not a charting system.**

Two-drug collisions stay free. Host factors (phenotype, smoke, alcohol, route), enzyme atlas, metabolites, and export are licensed. Founding license is **$79 once**.

## Pay / write

- Kaleb Lovingier
- Venmo [@kaleblovingier](https://venmo.com/u/kaleblovingier)
- Cash App [$kaleblovingier7](https://cash.app/$kaleblovingier7)
- PayPal kaleblovingier@gmail.com
- kaleblovingier@gmail.com · 360-707-8923
- @badbird · @kaleblovingier

Do not put a home address on the UI.

Licenses are HMAC-signed keys (`FP-LIFE-…`). There is no fake checkout. The operator desk (Hunt / mint) is hidden: seven taps on the teal mark. The PIN lives in `src/lib/billing/license.server.ts` only.

## Stack

TanStack Start + React 19 + Tailwind v4 + Zustand persist (`firstpass.desk.v7`). Auth and database are **off**. Optional `VITE_PAY_URL` overrides the Venmo button.

## Map

| Path | What |
| --- | --- |
| `src/lib/drugs/catalog.ts` | Formulary |
| `src/lib/drugs/engine.ts` | PK + PD scoring |
| `src/lib/drugs/pk.ts` | One-compartment DDI / phenotype / route / accumulation sketch |
| `src/lib/drugs/host.ts` | Route, smoke, alcohol, washout |
| `src/lib/drugs/rounds.ts` | Teaching cases |
| `src/lib/drugs/samples.ts` | Sample regimens |
| `src/lib/billing/commerce.ts` | Pay rails, DMs, invoices |
| `src/lib/billing/hunts.ts` | WA/PNW buyer directory |
| `src/components/desk/` | UI |

`npm run dev` on `0.0.0.0:8080`. `npm run typecheck` and `npm run build` must pass.
