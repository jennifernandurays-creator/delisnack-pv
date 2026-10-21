# AGENTS.md

This document describes the DeliSnack project for AI agents and developers working on this codebase.

## Project Overview

A one-page marketing site for DeliSnack, a dessert/snack brand (mini donas, waffles, churros, postres en vasito,
horchata). Built with TanStack Start and deployed on Netlify. All product, pricing, topping, FAQ, and brand-settings
content lives in flat JSON files under `content/` so it can be edited through a Decap CMS admin panel at `/admin`
without touching code.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (theme tokens in `src/styles.css`, no `tailwind.config.js`) |
| Icons | lucide-react (+ one hand-rolled `TikTokIcon`, not in lucide) |
| Content editing | Decap CMS (`public/admin`) backed by Netlify Identity + Git Gateway |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── content/                    # Editable content (source of truth, edited via /admin or by hand)
│   ├── settings.json           # Brand copy, WhatsApp number/messages, social links
│   ├── products.json           # { categories: [ { ...category, items: [...] } ] }
│   ├── toppings.json           # { toppings: [...] } — exactly 8, do not add more without product approval
│   └── faq.json                # { items: [ { question, answer } ] }
├── public/
│   ├── admin/                  # Decap CMS (index.html + config.yml) — the visual content editor
│   ├── images/products/        # Real product photos (jpg, optimized with sharp)
│   ├── images/toppings/        # Placeholder SVG swatches for toppings — replace with real photos later
│   └── favicon.svg / .ico
├── src/
│   ├── components/             # One component per homepage section (Hero, Menu, Toppings, Faq, ...)
│   ├── data/                   # Typed wrappers around content/*.json (import here, not the raw JSON)
│   ├── lib/whatsapp.ts         # Builds wa.me links (general order, per-product order, toppings inquiry)
│   ├── routes/
│   │   ├── __root.tsx          # Root document: <html>, SEO meta, favicon
│   │   └── index.tsx           # The entire one-page site, section by section
│   └── styles.css              # Tailwind import + @theme color/font tokens
├── netlify.toml                # Build command, publish dir, dev server port
└── tsconfig.json               # `@/*` → `src/*`
```

## Content Model

- **Categories vs. items**: `products.json` has 6 categories (mini donas, waffles, churros, postres en vasito,
  horchata en bolsa, horchata en vaso), each with one or more `items`. The homepage menu tabs are categories; each
  tab renders that category's `items` as cards.
- **`price: null`** renders as "Precio próximamente" in `Menu.tsx`. Never hardcode a price that wasn't provided by
  the business owner.
- **`featured: true`** on an item surfaces it in the "Los favoritos de DeliSnack" section (`Favorites.tsx`), capped
  at 3 via `getFeaturedItems().slice(0, 3)`.
- **Toppings** are intentionally a fixed set of 8. The circles in `Toppings.tsx` are pure presentation; swapping an
  `image` path or `name` in `content/toppings.json` (via `/admin` or by hand) requires no component changes.
- **WhatsApp links** are always built through `src/lib/whatsapp.ts`, never hardcoded — this keeps the phone number
  and message copy centralized in `content/settings.json`.

## Content Editing (Decap CMS)

`public/admin/index.html` + `public/admin/config.yml` implement a git-gateway-backed CMS: edits made in the browser
UI are committed straight to the files in `content/`, which triggers a normal Netlify rebuild. See the project's
change summary for the exact one-time setup steps (enabling Git Gateway, inviting the first admin user).

When adding a new editable field, update **three places** in lockstep:
1. The JSON shape in `content/*.json`
2. The corresponding TypeScript interface in `src/data/*.ts`
3. The Decap field definition in `public/admin/config.yml`

## Conventions

- Components are one per homepage section, named after the section (`Hero`, `Menu`, `Toppings`, `Faq`, ...) and
  composed in order inside `src/routes/index.tsx`.
- Scroll-in animation goes through the shared `<Reveal>` wrapper (`src/components/Reveal.tsx`), not ad-hoc
  `IntersectionObserver` code.
- Tailwind theme colors/fonts are declared once via `@theme` in `src/styles.css` (Tailwind v4 CSS-first config,
  there is no `tailwind.config.js`). Use the semantic names (`primary`, `caramel`, `sage`, `ink`, `cream`, ...)
  rather than raw hex values in components.
- Copy avoids repeating stock phrases ("hecho con amor", "antojo perfecto", etc.) across sections — each section's
  text was written to say something distinct. Keep that pattern when adding new copy.
- No invented business facts: prices, flavors, hours, delivery zones, or history are only ever shown if present in
  `content/*.json`. Leave a field editable/empty rather than guessing.
