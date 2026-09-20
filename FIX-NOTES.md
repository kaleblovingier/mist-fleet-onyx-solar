# FirstPass sale-blocker fixes (local working tree)

Three fixes applied in order on `/workspace/firstpass` (GitHub: `kaleblovingier/mist-fleet-onyx-solar`).  
**No commit / no push** (user did not ask to commit; `gh auth status` is not logged in).

`npm run typecheck` — **passed** after these changes.

Educational disclaimer copy was left intact.

---

## Fix 1 — Checkout + key fulfillment

### What was wrong
- `SITE.url` defaulted to the GitHub **repo**, so pitch / DM / tweet links sent buyers to source instead of the live desk.
- Checkout always showed **Pay with card** even when Stripe mode was `off`, and copy said to “redeem the key below” after Venmo — implying a key would appear without Foundry fulfillment.
- Founding CTAs could open checkout on month/year if the user had toggled interval earlier.
- `docs/index.html` primary CTA was “Open the source”.

### What changed
| File | Change |
|------|--------|
| `src/lib/billing/commerce.ts` | `SITE.url` → `VITE_PUBLIC_URL` or Pages (`SITE.pages`). `launchPosts` defaults to `SITE.pages`. `payClose()` copy: Venmo/Cash App/PayPal + operator emails/texts key from Foundry. |
| `src/components/desk/plans.tsx` | Stripe off: **hide** card button; promote Venmo/Cash App/PayPal as primary; clear “key emailed/texted after payment clears” copy (no fake key-below). Founding openCheckout forces `"life"`. |
| `src/components/desk/paywall.tsx` | Founding CTA passes `"life"`; rails-first copy. |
| `src/components/desk/app.tsx` | Founding / $79 unlock CTAs pass `"life"`. |
| `src/components/desk/launch.tsx` | Pitch links use `SITE.pages`. |
| `src/lib/drugs/store.ts` | `openCheckout(plan, reason?, interval?)` — plan `"lab"` defaults interval to `"life"`. |
| `docs/index.html` | Primary CTA → live desk (Pages); source secondary; Venmo tertiary. |

### How to verify
1. Open Pro / Buy founding with Stripe unset → card button hidden; three pay rails prominent; copy says key is emailed/texted after clear, Redeem only after you receive it.
2. Click Founding · $79 from paywall / header → checkout interval is **Lifetime** (`$79 once`).
3. Foundry → Launch → Pitch page URL is Pages (or `VITE_PUBLIC_URL` if set).
4. Open `docs/index.html` → primary button “Open the desk” → Pages URL.

### Env (optional for Fix 1)
- `VITE_PUBLIC_URL` — override live desk URL (e.g. Vercel domain).

---

## Fix 2 — License secrets fail closed

### What was wrong
`LICENSE_PEPPER` and `FOUNDER_PIN` fell back to hardcoded defaults (`firstpass-heme-license-v1` / `heme-450`) even in production, so anyone who knew the defaults could mint/verify.

### What changed
| File | Change |
|------|--------|
| `src/lib/billing/license.server.ts` | Defaults only in non-prod. If `NODE_ENV=production` **or** `GROK_PROJECT_ID` is set, unset secrets **throw** / verify returns failure. No new secrets hardcoded. |
| `src/lib/billing/license.ts` | Mint catches secret errors; returns `defaultPin` / `defaultPepper` flags. |
| `src/components/desk/foundry.tsx` | Warns after mint when `defaultPin` is true. |

### Env vars to set (production / Vercel)
```bash
LICENSE_PEPPER=<long random secret, e.g. openssl rand -hex 32>
FOUNDER_PIN=<operator PIN you alone know>
```
Do **not** commit these. Set them in the host env / Vercel project settings.

### How to verify
1. Local / preview (no `GROK_PROJECT_ID`, `NODE_ENV` not production): mint with default PIN still works; Foundry shows the default-PIN warning.
2. Production-like: `NODE_ENV=production` (or set `GROK_PROJECT_ID`) **without** `LICENSE_PEPPER` / `FOUNDER_PIN` → mint and redeem fail closed with a clear reason.
3. With both secrets set → mint LIFE key → redeem on desk.

---

## Fix 3 — One free host-factor teaching demo (oral ketamine)

### What was wrong
Oral ketamine route was Pro-gated, so **grapefruit × oral ketamine** (the headline teaching case) opened checkout on free desks.

### What changed
| File | Change |
|------|--------|
| `src/lib/drugs/store.ts` | `setKetamineRoute` allowed on free. `load()` no longer treats ketamine route alone as Pro host. |
| `src/lib/drugs/samples.ts` | `sampleNeedsPro` ignores `ketamineRoute` (phenotype / smoke / alcohol / cannabis still Pro). |
| `src/components/desk/phenotype.tsx` | Note that oral route is free for teaching. |
| `src/components/desk/rounds.tsx` | Blurb: oral route free; other host factors Pro. |

Atlas, metabolites, export, phenotype, smoke, alcohol, cannabis route remain gated.

### How to verify
1. Free desk → Host factors → set Ketamine route to **oral** (no checkout).
2. Load sample **Grapefruit + oral ketamine** or rounds “Breakfast and a lozenge” → desk loads with oral route, no paywall.
3. Confirm atlas / metabolites / export still ask for Pro.
4. Confirm DXM 2D6 PM / smoke samples still gate.

---

## Diff summary (`git diff --stat`)

```
 docs/index.html
 src/components/desk/app.tsx
 src/components/desk/foundry.tsx
 src/components/desk/launch.tsx
 src/components/desk/paywall.tsx
 src/components/desk/phenotype.tsx
 src/components/desk/plans.tsx
 src/components/desk/rounds.tsx
 src/lib/billing/commerce.ts
 src/lib/billing/license.server.ts
 src/lib/billing/license.ts
 src/lib/drugs/samples.ts
 src/lib/drugs/store.ts
 FIX-NOTES.md (this file)
```
(+157 / −86 lines across 13 tracked files; FIX-NOTES.md untracked)

Working tree left dirty. Skip push until `gh auth login` and an explicit branch/PR request.
